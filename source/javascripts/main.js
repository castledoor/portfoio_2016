$(document).ready(function() {
  $('.header-shoe').click(function() {
    $("li").removeClass('active');
    $('.shoe-story').addClass('active');
  });

  $('.header-hoodie').click(function() {
    $("li").removeClass('active');
    $('.hoodie-story').addClass('active');
  });

  $('.header-apparel').click(function() {
    $("li").removeClass('active');
    $('.apparel-story').addClass('active');
  });
});

// DRYing
// function story_switch(story) {
//   var story = 
//   $('li').removeClass('active');
// }

