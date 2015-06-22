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
  
  $('.carousel-content').slick({
      prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/shoe_story/arrow-left.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>"
  });
 
}); 
