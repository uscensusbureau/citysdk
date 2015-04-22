/****************************************************************************
* Author: Brian Norman (Earthware Ltd)
* Website: http://www.earthware.co.uk
* Date:May 23th, 2012
* 
* Description:
* This module allows you to import GeoJSON files into Bing Maps. A GeoJSON feed will be downloaded 
* and parsed into an EntityCollection which can then be added to the map. Additional properties are 
* captured and stored in a Metadata tag on each shape making it easy to relate shapes to their metadata.
*
* Currently supports:
* GeoJSON Spec 1.0 http://www.geojson.org/geojson-spec.html
*   - Point
*   - MultiPoint
*   - LineString
*   - MultiLineString
*   - Polygon
*   - MultiPolygon
*   - Geometry Collection
*   - Feature
*   - Feature Collection
*
*
* Currently no support for complex polygons.
****************************************************************************/

//Define custom Metadata property for the shape classes.
Microsoft.Maps.Pushpin.prototype.Metadata = null;
Microsoft.Maps.Polyline.prototype.Metadata = null;
Microsoft.Maps.Polygon.prototype.Metadata = null;
Microsoft.Maps.EntityCollection.prototype.Metadata = null;

var GeoJSONModule = function () {
    var _callback = null,
        _allCoords = [],
        _options = {
            pushpinOptions: null,
            polylineOptions: null,
            polygonOptions: null
        };

    /*****************
    * Private Methods
    ******************/
    function parseGeoJSON(json) {
        if (_callback != null) {
            var result = parseGeoJSONItem(json);
            var bounds;

            if (_allCoords != null && _allCoords.length > 0) {
                bounds = Microsoft.Maps.LocationRect.fromLocations(_allCoords);
            } else {
                bounds = new Microsoft.Maps.LocationRect(new Microsoft.Maps.Location(0, 0), 360, 180);
            }

            _callback(result, bounds);
        }
    }

    function parseGeoJSONItem(i) {
        var shape = null;

        switch (i.type) {
            case "FeatureCollection":
                shape = parseFeatureCollection(i);
                break;
            case "Feature":
                shape = parseFeature(i);
                break;
            case "Point":
                var point = parsePoint(i);
                shape = createPushpin(point);
                if (i.properties) shape.Metadata = i.properties;
                break;
            case "LineString":
                shape = parseLineString(i);
                break;
            case "Polygon":
                shape = parsePolygon(i);
                break;
            case "MultiPoint":
                shape = new Microsoft.Maps.EntityCollection();
                $(parseMultiPoint(i)).each(function (i, v) {
                    shape.push(createPushpin(v));
                });
                break;
            case "MultiLineString":
                shape = new Microsoft.Maps.EntityCollection();
                $(parseMultiLineString(i)).each(function (i, v) {
                    shape.push(v);
                });
                break;
            case "MultiPolygon":
                shape = new Microsoft.Maps.EntityCollection();
                $(parseMultiPolygon(i)).each(function (i, v) {
                    shape.push(v);
                });
                break;
            case "GeometryCollection":
                shape = parseGeometryCollection(i);
                break;
            default:
                // do nothing with it not a supported element
        }
        return shape;
    }
    /* methods for parsing GeoJSON*/

    function parsePoint(p) {
        var loc = new Microsoft.Maps.Location(p.coordinates[1], p.coordinates[0]);
        _allCoords.push(loc);
        return loc;
    }

    function parseLineString(ls) {
        var result = new Microsoft.Maps.Polyline(parseMultiPoint(ls), _options.polylineOptions);
        if (ls.properties) result.Metadata = ls.properties;
        return result;
    }

    function parsePolygon(po) {
        var rings = [];
        $(po.coordinates).each(function (i, v) {
            rings.push(parseMultiPoint({ coordinates: v }));
        });
        var result = new Microsoft.Maps.Polygon(rings, _options.polygonOptions);
        if (po.properties) result.Metadata = po.properties;
        return result;
    }

    function parseMultiPoint(mp) {
        var locs = [];
        $(mp.coordinates).each(function (i, v) {
            locs.push(parsePoint({ coordinates: v }));
        });
        if (mp.properties) locs.Metadata = mp.properties;
        return locs;
    }

    function parseMultiLineString(mls) {
        var ls = [];
        $(mls.coordinates).each(function (i, v) {
            ls.push(parseLineString({ coordinates: v }));
        });
        if (mls.properties) ls.Metadata = mls.properties;
        return ls;
    }

    function parseMultiPolygon(mpo) {
        var pos = [];
        $(mpo.coordinates).each(function (i, v) {
            pos.push(parsePolygon({ coordinates: v }));
        });
        if (mpo.properties) pos.Metadata = mpo.properties;
        return pos;
    }

    function parseGeometryCollection(gc) {
        var entityCollection = new Microsoft.Maps.EntityCollection();
        $(gc.geometries).each(function (i, v) {
            var entity = parseFeature({ geometry: v });

            if (entity) entityCollection.push(entity);
        });
        if (gc.properties) entityCollection.Metadata = gc.properties;
        return entityCollection;
    }

    function parseFeature(fe) {
        var entity;
        var i = fe.geometry;
        switch (i.type) {
            case "Point":
                var point = parsePoint(i);
                entity = createPushpin(point);
                if (i.properties) entity.Metadata = i.properties;
                break;
            case "LineString":
                entity = parseLineString(i);
                break;
            case "Polygon":
                entity = parsePolygon(i);
                break;
            case "MultiPoint":
                entity = new Microsoft.Maps.EntityCollection();
                $(parseMultiPoint(i)).each(function (i, v) {
                    entity.push(createPushpin(v));
                });
                break;
            case "MultiLineString":
                entity = new Microsoft.Maps.EntityCollection();
                $(parseMultiLineString(i)).each(function (i, v) {
                    entity.push(v);
                });
                break;
            case "MultiPolygon":
                entity = new Microsoft.Maps.EntityCollection();
                $(parseMultiPolygon(i)).each(function (i, v) {
                    entity.push(v);
                });
                break;
            default:
                // do nothing with it not a supported element
        }

        if (fe.properties) entity.Metadata = fe.properties;

        return entity;
    }

    function parseFeatureCollection(fc) {
        var entityCollection = new Microsoft.Maps.EntityCollection();
        $(fc.features).each(function (i, v) {
            entityCollection.push(parseFeature(v));
        });
        return entityCollection;
    }

    /* methods for creating Bing Maps entities including passed in options */
    function createPushpin(point) {
        return new Microsoft.Maps.Pushpin(point, _options.pushpinOptions);
    }

    /****************
    * Public Methods
    ****************/

    /*
    * Takes in a URL to a GeoRSS file, loads and parses it into an Entity Collection. Data is then sent back to a callback function.
    */
    this.ImportGeoJSON = function (link, callback, options) {
        _callback = callback;

        if (options != null) {
            for (attrname in options) {
                _options[attrname] = options[attrname];
            }
        }

        $.getJSON(link, function (json) {
            parseGeoJSON(json);
        });
    };
};

(function () {
    //Load complex polygon module is not already loaded
    var p = new Microsoft.Maps.Polygon();
    if (!p.getRings) {
        Microsoft.Maps.loadModule('Microsoft.Maps.AdvancedShapes', { callback: function () {
            // Call the Module Loaded method
            Microsoft.Maps.moduleLoaded('GeoJSONModule');
        }
        });
    } else {
        // Call the Module Loaded method
        Microsoft.Maps.moduleLoaded('GeoJSONModule');
    }
})();