$(document).ready(function() {
  $("#shoe-hover-1").mouseover(function() {
    $('#text-switch-one').css("display", "none");
    $('#text-switch-two').css("display", "block");
  });

  $("#shoe-hover-1").mouseleave(function() {
    $('#text-switch-two').css("display", "none");
    $('#text-switch-one').css("display", "block");
  });

  $('#shoe-hover-2').mouseover(function() {
    $('#text-switch-one').css("display", "none");
    $('#text-switch-three').css("display", "block");
  });

  $("#shoe-hover-2").mouseleave(function() {
    $('#text-switch-three').css("display", "none");
    $('#text-switch-one').css("display", "block");
  });

  $('#shoe-hover-3').mouseover(function() {
    $('#text-switch-one').css("display", "none");
    $('#text-switch-four').css("display", "block");
  });

  $("#shoe-hover-3").mouseleave(function() {
    $('#text-switch-four').css("display", "none");
    $('#text-switch-one').css("display", "block");
  });

  carousel = (function(){
    // Read necessary elements from the DOM once
    var box = document.querySelector('.carouselbox');
    var next = box.querySelector('.next');
    var prev = box.querySelector('.prev');

    // Define the global counter, the items and the 
    // current item 
    var counter = 0;
    var items = box.querySelectorAll('.content li');
    var amount = items.length;
    var current = items[0];

    box.classList.add('active');

    // navigate through the carousel

    function navigate(direction) {

      // hide the old current list item 
      current.classList.remove('current');
      
      // calculate th new position
      counter = counter + direction;

      // if the previous one was chosen
      // and the counter is less than 0 
      // make the counter the last element,
      // thus looping the carousel
      if (direction === -1 && 
          counter < 0) { 
        counter = amount - 1; 
      }

      if (direction === 1 && 
          !items[counter]) { 
        counter = 0;
      }
      current = items[counter];
      current.classList.add('current');
    }

    // add event handlers to buttons
    next.addEventListener('click', function(ev) {
      navigate(1);
    });
    prev.addEventListener('click', function(ev) {
      navigate(-1);
    });

    navigate(0);

  })();
}); 
