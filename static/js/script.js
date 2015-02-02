$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $("#hmda-lar-fields tbody").each(function () {
    var $body = $(this);

    var ajax = $.ajax({
      url: "http://usg-website-templates.github.io/developer-hub/static/hmda_lar.json",
      dataType: "json"
    });

    ajax.done(function (data) {
      var fields = data['fields'];
      var fieldNames = _(fields).keys().sort();

      _(fieldNames).each(function (fieldName) {
        var info = fields[fieldName];
        var $row = $("<tr></tr>");
        $row.
          append("<td><code>" + fieldName + "</code></td>").
          append("<td>" + info['description'] + "</td>").
          append("<td>" + info['type'] + "</td>").
          append("<td>" + (info['indexed'] ? "true" : "false") + "</td>");
        $body.append($row);
      });
    });
  });
});
