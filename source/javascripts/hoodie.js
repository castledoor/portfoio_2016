$(document).ready(function() {
  $("#hoodie-hover-1, .hl").mouseover(function() {
    $('.hl').css("display", "block");
  });

  $("#hoodie-hover-1").mouseleave(function() {
    $('.hl').css("display", "none");
  });

  $("#hoodie-hover-2, .hr").mouseover(function() {
    $('.hr').css("display", "block");
  });

  $("#hoodie-hover-2").mouseleave(function() {
    $('.hr').css("display", "none");
  });
});