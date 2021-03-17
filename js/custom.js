
$(function() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();

    if ((y + $(window).height()) > ($(document).height() * 0.9)) {
      $('#sample').fadeOut();
      return;
    }

    if (y > 1500) {
      $('#sample').fadeIn();
    } else {
      $('#sample').fadeOut();
    }
  });
})




$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},500);
                  
          }
          
      }); 
  
  });
  
});







$(function() {
    // vars for clients list carousel
    // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
    var $clientcarousel = $('#clients-list');
    var clients = $clientcarousel.children().length;
    var clientwidth = (clients * 220); // 140px width for each client item 
    $clientcarousel.css('width', clientwidth);
  
    var rotating = true;
    var clientspeed = 0;
    var seeclients = setInterval(rotateClients, clientspeed);
  
    $(document).on({
      mouseenter: function() {
        rotating = false; // turn off rotation when hovering
      },
      mouseleave: function() {
        rotating = true;
      }
    }, '#clients');
  
    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clients-list li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 8000, function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clients-list li:last').after($first);
        });
      }
    }
  });




  // ********************************************ESCONDER DIV

  $("nav#main-nav-wrap > ul > li").on("click", function () {
    $("nav#main-nav-wrap").hide()
});
  // ********************************************ESCONDER DIV
