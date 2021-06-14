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

  // Add White Background color to navbar when scroll down

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".scrolled").css({"background": "#ffffff", "color": "#333", "border-bottom": "1px solid #D5DBB3"});
          $(".nav-link").css({"color": "#333"});
          $(".navbar-toggler span").css({"background-color": "#333"});
        }
  
        else{
            $(".scrolled").css({"background-color": "transparent", "color": "white","border-bottom": "none"}); 
            $(".nav-link").css({"color": "#ffffff"}); 	
            $(".navbar-toggler span").css({"background-color": "#fff"});
        }
    })
  })
  // Arrow  button onClick Function scrolldown 

  $(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target:".content", offset: 0});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#section02 a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });

  