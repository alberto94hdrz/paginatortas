/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu Appear
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({      	

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() { 

		      	sLoader.fadeIn(); 

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut(); 
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();   
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut(); 
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut(); 
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });     		
  		}

	});


 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);




/* ===================================================================
 * Kreative 2.0.0 - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    const cfg = {
                scrollDuration : 800, // smoothscroll duration
                mailChimpURL   : ''   // mailchimp url
                };

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    // const doc = document.documentElement;
    // doc.setAttribute('data-useragent', navigator.userAgent);


   /* preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');

        if (!preloader) return;

        document.querySelector('html').classList.add('ss-preload');
        
        window.addEventListener('load', function() {
               
            document.querySelector('html').classList.remove('ss-preload');
            document.querySelector('html').classList.add('ss-loaded');

            preloader.addEventListener('transitionend', function(e) {
                if (e.target.matches("#preloader")) {
                    this.style.display = 'none';
                }
            });
        });

        // force page scroll position to top at page refresh
        window.addEventListener('beforeunload' , function () {
            window.scrollTo(0, 0);
        });
    };



   /* move header
    * -------------------------------------------------- */
    const ssMoveHeader = function () {

        const hdr = document.querySelector('.s-header');
        const hero = document.querySelector('#home');
        let triggerHeight;

        if (!(hdr && hero)) return;

        setTimeout(function(){
            triggerHeight = hero.offsetHeight - 170;
        }, 300);

        window.addEventListener('scroll', function () {

            let loc = window.scrollY;

            if (loc > triggerHeight) {
                hdr.classList.add('sticky');
            } else {
                hdr.classList.remove('sticky');
            }

            if (loc > triggerHeight + 20) {
                hdr.classList.add('offset');
            } else {
                hdr.classList.remove('offset');
            }

            if (loc > triggerHeight + 150) {
                hdr.classList.add('scrolling');
            } else {
                hdr.classList.remove('scrolling');
            }

        });
    };



   /* Mobile Menu
    * ---------------------------------------------------- */ 
    const ssMobileMenu = function() {

        const $toggleButton = $('.s-header__menu-toggle');
        const $nav = $('.s-header__nav');


        $toggleButton.on('click', function(event){
            event.preventDefault();
            $toggleButton.toggleClass('is-clicked');
            $nav.slideToggle();
        });

        // add mobile class
        if ($toggleButton.is(':visible')) $nav.addClass('mobile');

        $(window).resize(function() {
            if ($toggleButton.is(':visible')) $nav.addClass('mobile');
            else $nav.removeClass('mobile');
        });

        $('.s-header__nav ul').find('a').on("click", function() {
            if ($nav.hasClass('mobile')) {
                $toggleButton.trigger('click');
            }
        });
    }; 


   /* search
    * ------------------------------------------------------ */
    const ssSearch = function() {

        const searchWrap = document.querySelector('.s-header__search');
        const searchTrigger = document.querySelector('.s-header__search-trigger');

        if (!(searchWrap && searchTrigger)) return;

        const searchField = searchWrap.querySelector('.search-field');
        const closeSearch = searchWrap.querySelector('.s-header__overlay-close');
        const siteBody = document.querySelector('body');

        searchTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            siteBody.classList.add('search-is-visible');
            setTimeout(function(){
                searchWrap.querySelector('.search-field').focus();
            }, 100);
        });

        closeSearch.addEventListener('click', function(e) {
            e.stopPropagation();

            if(siteBody.classList.contains('search-is-visible')) {
                siteBody.classList.remove('search-is-visible');
                setTimeout(function(){
                    searchWrap.querySelector('.search-field').blur();
                }, 100);
            }
        });

        searchWrap.addEventListener('click', function(e) {
            if( !(e.target.matches('.search-field')) ) {
                closeSearch.dispatchEvent(new Event('click'));
            }
        });

        searchField.addEventListener('click', function(e) {
            e.stopPropagation();
        })

        searchField.setAttribute('placeholder', 'Type Keywords');
        searchField.setAttribute('autocomplete', 'off');
    };



   /* Highlight the current section in the navigation bar
    * ------------------------------------------------------ */
    const ssWaypoints = function() {

        const $sections = $(".target-section");
        const $navigationLinks = $(".s-header__nav li a");

        $sections.waypoint( {

            handler: function(direction) {

                let $activeSection;

                $activeSection = $('section#' + this.element.id);

                if (direction === "up") $activeSection = $activeSection.prevAll(".target-section").first();

                let $activeLink = $('.s-header__nav li a[href="#' + $activeSection.attr("id") + '"]');

                $navigationLinks.parent().removeClass("current");
                $activeLink.parent().addClass("current");

            },

            offset: '25%'

        });
    };



   /* Slick Slider
    * ------------------------------------------------------ */
    const ssSlickSlider = function() {

        // Home Slider
        // ----------------------------
        function ssRunHomeSlider() {
            const $heroSlider = $('.s-home__slider');

            $heroSlider.slick({
                arrows: false,
                dots: false,
                speed: 1000,
                fade: true,
                cssEase: 'linear',
                autoplay: false,
                autoplaySpeed: 5000,
                pauseOnHover: false
            });

            $('.s-home__arrow-prev').on('click', function() {
                $heroSlider.slick('slickPrev');
            });
    
            $('.s-home__arrow-next').on('click', function() {
                $heroSlider.slick('slickNext');
            });

        } // end ssRunHomeSlider

        function ssRunTestimonialSlider() {
            const $testimonialSlider = $('.testimonial-slider');
                            
            $testimonialSlider.slick({
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                pauseOnFocus: false,
                autoplaySpeed: 1500,
                responsive: [
                    {
                        breakpoint: 1080,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        } // end ssRunTestimonialSlider

        ssRunHomeSlider();
        ssRunTestimonialSlider();
    };



   /* animate on scroll
    * ------------------------------------------------------ */
    const ssAOS = function() {
        
        AOS.init( {
            offset: 100,
            duration: 600,
            easing: 'ease-in-out',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };



   /* alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');

        boxes.forEach(function(box) {

            box.addEventListener('click', function(e){
                if (e.target.matches(".alert-box__close")) {
                    e.stopPropagation();
                    e.target.parentElement.classList.add("hideit");

                    setTimeout(function() {
                        box.style.display = "none";
                    }, 500)
                }    
            });

        })
    };


   /* smooth scrolling
    * ------------------------------------------------------ */
    const ssSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            const target = this.hash;
            const $target = $(target);
            
            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {
                window.location.hash = target;
            });
        });
    };


   /* back to top
    * ------------------------------------------------------ */
    const ssBackToTop = function() {

        const pxShow = 800;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });
    };


   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssMoveHeader();
        ssMobileMenu();
        ssSearch();
        ssWaypoints();
        ssSlickSlider();
        ssAOS();
        ssAlertBoxes();
        ssSmoothScroll();
        ssBackToTop();

    })();

})(jQuery);

