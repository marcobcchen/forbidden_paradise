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
  }

});