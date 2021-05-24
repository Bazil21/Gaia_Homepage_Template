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
        if (scroll > 300) {
          $(".scrolled").css({"background": "#fff", "color": "#333", "border-bottom": "1px solid grey"});
          $(".nav-link").css({"color": "#333"});
        }
  
        else{
            $(".scrolled").css({"background-color": "transparent", "color": "white","border-bottom": "none"}); 
            $(".nav-link").css({"color": "#ffffff"}); 	
        }
    })
  })