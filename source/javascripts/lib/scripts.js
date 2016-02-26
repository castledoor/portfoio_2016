$(document).ready(function() {
  $('.work-pull').css("display", "none");

  $('.plus').click(function() {
    if ($('.work-pull').hasClass("open")) {
       var this_one = $(this).parent().parent().next()
       var that_one = $('.plus').parent().parent().next()
       $(that_one).not(this_one).slideUp()
       $(that_one).not(this_one).removeClass("open").addClass("closed");
       var b = $(that_one).parent().children().children().next().children().first();
       var c = $(this_one).parent().children().children().next().children().first();
       $(b).not(c).css("display", "block");
     }

    if ($('.work-pull').hasClass("closed")) {

    }

    $(this).parent().parent().next().toggleClass( "closed").toggleClass( "open");
    $(this).parent().children().toggle();
    $(this).parent().parent().next().slideToggle();

  });

  $('.minus').click(function() {
    $(this).first().parent().parent().next().slideUp().removeClass("open").addClass("closed");
    $(this).css("display", "none");
    $(this).prev().css("display", "block");
  });

});


jQuery(function($) {
$('.slider').sss();
});