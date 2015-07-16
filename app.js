(function() {
  var seats = document.getElementsByClassName('seat');

  for (var i = 0; i < seats.length; i++) {
    seats[i].onclick = function() {
      if (this.classList.contains('current')) {
        this.classList.toggle('current');
      } else {
        removeHighlight();
        this.classList.toggle('current');
      }
    }
  }

  function removeHighlight() {
    for (var j = 0; j < seats.length; j++) {
      if (seats[j].classList.contains('current')) {
        return seats[j].classList.toggle('current');
      }
    }
  }
})();
