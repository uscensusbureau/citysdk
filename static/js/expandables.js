$(document).ready( function() {
  function expandable() {
    $('.expandable-header').on('click', function(e){
      e.preventDefault();
                  
      var header = $(e.currentTarget),
      section = header.parent(),
      button = header.find('.expand-button'),
      buttonText = header.find('.expandable-text');

      section.toggleClass('open');
      header.next('.expandable-content').slideToggle();
      button.toggleClass('open');
      buttonText.html(section.hasClass('open') ? 'Hide' : 'Show');
    });
  }

  expandable();
});
