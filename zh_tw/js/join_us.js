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
    TweenMax.to($('#loading'), 0.5, {autoAlpha: 0});
  }

});