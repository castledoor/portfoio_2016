$(document).ready(function() {
  shoe_click_actions();
  $('.header-shoe, .bw-1').click(function() {
    shoe_click_actions();
  });

  $('.header-hoodie, .bw-2').click(function() {
    hoodie_click_actions();
  });

  $('.header-apparel, .bw-3').click(function() {
    apparel_click_actions();
  });

  function shoe_click_actions() {
    $("li").removeClass('active');
    $('.shoe-story').addClass('active');
    $('.bw-1').css("opacity", "0");
    $('.bw-2').css("opacity", "1");
    $('.bw-3').css("opacity", "1");
  }

  function hoodie_click_actions() {
    $("li").removeClass('active');
    $('.hoodie-story').addClass('active');
    $('.bw-2').css("opacity", "0");
    $('.bw-1').css("opacity", "1");
    $('.bw-3').css("opacity", "1");
  }

  function apparel_click_actions() {
    $("li").removeClass('active');
    $('.apparel-story').addClass('active');
    $('.bw-3').css("opacity", "0");
    $('.bw-2').css("opacity", "1");
    $('.bw-1').css("opacity", "1");
  }
});

// DRYing
// function story_switch(story) {
//   var story = 
//   $('li').removeClass('active');
// }

