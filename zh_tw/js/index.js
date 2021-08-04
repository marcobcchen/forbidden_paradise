$(function(){
  
  $.html5Loader({
    filesToLoad: 'js/resource.json',
    onBeforeLoad: function(){
      console.log('on BeforeLoad');
    },
    onComplete: function(){
      console.log('on complete');
      init();
    },
    onElementLoaded: function(obj, elm){
      //console.log(elm);
    },
    onUpdate: function(percentage){
      console.log(percentage);
    }
  });

  function init(){
    TweenMax.to($('.loading .logo'), 0.6, {y: -30, autoAlpha: 0, ease: Back.easeOut, delay: 0.3});
    TweenMax.to($('.loading'), 0.5, {autoAlpha: 0, delay: 0.7});

    setSlick($('.item-group'));
  }

  // 設置slick
  function setSlick(el){
    el.slick({
      infinite: true,
      dots: false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      centerPadding: '200px',
      prevArrow: '<div class="arrow-left"><img class="img-fluid" src="images/global/arrow_left.png"></div>',
      nextArrow: '<div class="arrow-right"><img class="img-fluid" src="images/global/arrow_right.png"></div>',
      
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
          }
        },
      ]
    });
  }


});