$(function(){

  let winW, winH;
  
  $.html5Loader({
    filesToLoad: 'js/resource.json',
    onBeforeLoad: function(){
      // console.log('on BeforeLoad');
    },
    onComplete: function(){
      // console.log('on complete');
      init();
    },
    onElementLoaded: function(obj, elm){
      //console.log(elm);
    },
    onUpdate: function(percentage){
      // console.log(percentage);
    }
  });

  function init(){

    $(window).on('resize', onResize);
    onResize();

    TweenMax.to($('#loading'), 0.5, {autoAlpha: 0, delay: 0.3});

    setSlick($('.item-group'));
    setSpriteSpin();
  }

  function onResize(){
    winW = $(window).innerWidth();
    winH = $(window).innerHeight();
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

  function setSpriteSpin(){

    $("#intro").spritespin({
      source: SpriteSpin.sourceArray('/images/intro/motion_{frame}.png', {
        frame: [0, 90],
        digits: 3
      }),
      width: winW,
      height: winH,
      sense: -1,
      // responsive: true,
      loop: false,
      stopFrame: 90,
      sizeMode: 'fit',
      onComplete: function(){
        // console.log('done');
      },
      onProgress: function(){
        // console.log('on progress');
      },
      onFrame: function(e, data){
        if(data.frame > 70){
          TweenMax.to($('#intro'), 0.6, {autoAlpha: 0});
        }
      }
    });
  }


});