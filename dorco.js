// $(document).ready(function(){
//   let i = 0;
//   let count = $(".pic_list>li").length;
//   let hei = $(".pic_list>li").height();
//   $(".prev").click(function(){
//     if(i == 0){
//       i = count - 1;
//     }else{
//       i--;
//     }
//     $(".pic_list").stop().animate({"margin-top":-hei*i});
//   });
//   $(".products_list>li").hover(function () { 
//     $(this).stop().fadeToggle(0);
//   });
// });

$(document).ready(function(){
  let i = 0;
  let count = $(".info_list>li").length;
  let hei = $(".pic_list>li").height();
  let autoSlide = interval()
  
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $(".top_btn").stop().fadeIn(0)
    }else{
      $(".top_btn").stop().fadeOut(0)
    }
  });
  $(".top_btn").click(function(){
    $("html,body").stop().animate({scrollTop : 0},500)
  });

  $(".korean").click(function(){
    $(".language").slideToggle();
  });
  $(window).click(function(event){
    if(!$(event.target).closest(".korean").length && !$(event.target).closest(".language").length) {
      $(".language").slideUp();
    }
  });

  slide(); 

  $(".main1").mouseenter(function(){ 
    clearInterval(autoSlide);
  });

  $(".main1").mouseleave(function(){ 
    autoSlide = interval();
  });

  $(".prev").click(function(){
    $(".pic_list").stop().animate({"margin-top":"0vh"},
      function(){
        $(".pic_list>li:last-child").prependTo(".pic_list");
        $(".pic_list").css({"margin-top":"-100vh"})
      });
    if(i == 0){
      i = count - 1;
    }else{
      i--;
    }
    slide();

  });

  // 기본값 설정
  
  $(".next").click(function(){
    $(".pic_list").stop().animate({"margin-top":"-200vh"},
      function(){
        $(".pic_list>li:first-child").appendTo(".pic_list");
        $(".pic_list").css({"margin-top":"-100vh"})
      });

    if(i == count - 1){
      i = 0;
    }else{
      i++;
    }
    slide();

  });

  function slide(){
    $(".top").stop().css({"top":"-230px"});
    $(".bottom").stop().css({"top":"-150px"});
    $(".info_list>li").stop().fadeOut();
    $(".info_list>li").eq(i).stop().fadeIn( function(){
      $(".top").stop().animate({"top":"0px"});
      $(".bottom").stop().animate({"top":"0px"});
    });
  }

  function interval(){
    return setInterval(function(){
      $(".pic_list").stop().animate({"margin-top":"-200vh"},
        function(){
          $(".pic_list>li:first-child").appendTo(".pic_list");
          $(".pic_list").css({"margin-top":"-100vh"})
        });
  
      if(i == count - 1){
        i = 0;
      }else{
        i++;
      }
      slide();
    }, 3000);
  }
});
