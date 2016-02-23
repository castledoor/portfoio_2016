$(document).ready(function() {
  $('.work-pull').css("display", "none");

  $('.plus').click(function() {

    if ($(this).hasClass("closed") ){
      document.getElementById("plus_minus").innerHTML = "-";
    } else {
      document.getElementById("plus_minus").innerHTML = "+";
    }




    $(this).parent().next().slideToggle(); 
    $(this).toggleClass( "closed", "open");
  });
});

