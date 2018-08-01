

# Cartography Files from the US Census Bureau

## FTP asset structure

### Examples:
```
http://www2.census.gov/geo/tiger/GENZ2010/gz_2010_us_outline_500k.zip
└──────────────┬───────────────┘ └──┬───┘ └──┬──┘ └───┬────┘ └─┬┘
            BASE                 2010 =>  Vintage  Level     Resolution

https://www2.census.gov/geo/tiger/PREVGENZ/tr/tr00shp/tr01_d00_shp.zip
└──────────────┬───────────────┘ └──┬───┘ └┬┘ └──┬──┘ └┬─┘
            BASE                 pre2010 tract Level     Resolution
```

- 500K (Resolution)
  - 2010 (Vintage)
    - National/
      - National `GeoJSON Feature`
      - States/
        - States in the Nation `GeoJSON Feature Collection` (if `for=state:?`)
        - 01/
        - .../ (rest of states)
          - Counties/
            - Counties in this state `GeoJSON Feature Collection` (if `for=county:?`)
            - Tracts in this state `GeoJSON Feature Collection` (if `for=tract:?`)
            - 001/
              - Block-groups in this state `GeoJSON Feature Collection` (if `for=block%20group:?`)
              - Blocks in this state `GeoJSON Feature Collection` (TBD) 
            - .../ (rest of counties)


Recursive function
within each vintage (available from cartography files: hard-coded?)
    within nation, get each level available at nation level (considering wildcards)
    get all states
        within state, get each level available at state level (considering wildcards)
        within each state, get each county
            within each county, get each level available at county level (considering wildcards)

Use `/examples` of sf1 to configure each call

Indexes needed:
- mapping between cartography file geo-descriptor and `/geography.json` geo-descriptors 
  - (2 maps = 1 for 2010+ and pre2010 vintages)
- cartographic vintages available 
  - (vector)
- store files by name that matches keyword used in the `geoHierarchy` arg 
  - (e.g., `state-legislative-district-#upper-chamber#`)