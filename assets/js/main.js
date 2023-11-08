// @select box
$('.language-area .submit').click(function(){
  url=$("#language").val();//SELECT OPTION VALUE

  window.open(url)//새창열림
})

// @visual 영역
  const mainSlide1 = new Swiper('.sc-visual .slide1',{
    
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,//사용자 컨트롤 이후 작동유무
    },
    pagination:{
      el:".fraction",
      type:"fraction"
    },
    navigation:{
      nextEl:".next",
      prevEl:".prev"
    },
    loop: true,
  })

  const mainSlide2 = new Swiper('.sc-visual .slide2',{
    
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination:{
      el:".fraction",
      type:"fraction"
    },
    navigation:{
      nextEl:".next",
      prevEl:".prev"
    },
    loop: true,
  })

  $('.sc-visual .group-tab button').click(function(){
    target=$(this).data('slide');
    $(this).addClass('active').siblings().removeClass('active');
    $(target).addClass('on').siblings().removeClass('on');
  })

  // @banner 영역
  const bannerSlide = new Swiper('.sc-banner .swiper',{
    slidesPerView:'3',
    spaceBetween:43,
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination:{
      el:".fraction",
      type:"fraction"
    },
    navigation:{
      nextEl:".next",
      prevEl:".prev"
    },
    loop: true,
  })

// @visual slide, 하단 banner slide 배열
  slideArr=[mainSlide1, mainSlide2, bannerSlide]
  $('.autoplay').click(function(){
    idx=$(this).data('index');
    if ($(this).hasClass('on')) {
      slideArr[idx].autoplay.start();      
    } else{
      slideArr[idx].autoplay.stop();
  }
    $(this).toggleClass('on')
  })

// @relate 영역
$('.btn-relate').click(function(){
  if ($(this).hasClass('on')) {
    $('.btn-relate').removeClass('on').siblings('.sub').slideUp()    
  }else{
  $('.btn-relate').removeClass('on').siblings('.sub').slideUp()
  $(this).addClass('on').siblings('.sub').slideDown()
}
})

$('.sc-relate .sub li:first-child').keydown(function(e){  
  if (e.keyCode === 9 && e.shiftKey) {
    $('.btn-relate').removeClass('on').siblings('.sub').slideUp()
  }
})
$('.sc-relate .sub li:last-child').keydown(function(e){  
  if (e.keyCode === 9 && !e.shiftKey) {
    $('.btn-relate').removeClass('on').siblings('.sub').slideUp()
  }
})

// @상단이동 버튼
$(window).scroll(function(){
  curr=$(this).scrollTop();
  if (curr > 10) {
    $('.fix-top').addClass('show')
  } else {
    $('.fix-top').removeClass('show')
  }
})

$('.fix-top').click(function(){
  window.scrollTo({top:0, behavior:"smooth"})
})