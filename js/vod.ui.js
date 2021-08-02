
$(document).ready(function(){    
    //clip - autoplay button
    var autoPlay = $('.autoplay');
    $(autoPlay).click(function () {
        $(this).toggleClass('off');
    });
    //keyboard control popup
    $(".keyboard_ctrl .info-tit").click(function(){
      $(".keyboard_ctrl .popup").show();        
    });
    $('.keyboard_ctrl .close_popup').click(function(){

      $('.keyboard_ctrl .popup').hide();
    });
    //sns
    $(".btn_share").click(function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        $(".layer_sns").toggle();        
    });
    //sns layer hide
    $('body').click(function (e) {
      if($('.btn_share').hasClass('on')){
        if(!$(e.target).is('.btn_share, .layer_sns')){
          $('.btn_share').removeClass('on');
          $('.layer_sns').hide();
        };
      }
    });
    //selectbox ui
    $('.sort .check').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
});