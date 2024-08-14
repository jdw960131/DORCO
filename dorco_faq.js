$(document).ready(function(){
  $(".tab_menu>li").click(function(){
    let i = $(this).index();
    $(".tab_contents").stop().fadeOut();
    $(".tab_contents").eq(i).stop().fadeIn();
    $(".tab_menu>li").removeClass("active")
    $(this).addClass("active")
  });
  $(".acco_title").click(function(){
    if($(this).hasClass("active")){
      $(".acco_title").removeClass("active").siblings().slideUp();
    }else{
      $(".acco_title").removeClass("active").siblings().slideUp();
      $(this).addClass("active").siblings().slideDown();
    }
  });
});
