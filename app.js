$(document).ready(function() {
  var seatNums = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];

  $('.seat').each(function() {
    $(this).on('click', function() {
      if (!$(this).hasClass('current')) {
        removeHighlight();
      }
      $(this).toggleClass('current');
    });
  });

  function removeHighlight() {
    $('.seat').each(function() {
      if ($(this).hasClass('current')) {
        return $(this).toggleClass('current');
      }
    });
  }

});
