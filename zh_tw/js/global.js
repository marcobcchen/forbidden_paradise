$(function(){

  function init(){
    // 選單開關
    $(".hamburger").on("click",function(){            
      $('nav').toggleClass('open');
      $('.hamburger').toggleClass('open');
    });
  }
  init();


  // 倒數計時器
  // function countdownTimer(TargetSec, rate, callback){
  //   let _t = 0;
  //   let timer;
  //   timer = setInterval(function(){
  //     _t += 100;
      
  //     if(_t >= TargetSec){
  //       clearInterval(timer);
  //       if(typeof callback === 'function') callback();
  //     }
  //   }, rate)
  // }

});