$(document).ready(function(){
    $(window).scroll(function(e){
      parallax();
    });
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.hero').css('top',-(scrolled*0.0315)+'rem');
      $('.hero > h1').css('top',-(scrolled*-0.005)+'rem');
      $('.hero > h1').css('opacity',1-(scrolled*.00175));
    };
  });

 
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
          $(".scrolled").css({"background": "#fff", "color": "#333"});
        }
  
        else{
            $(".scrolled").css({"background-color": "transparent", "color": "white"});  	
        }
    })
  })