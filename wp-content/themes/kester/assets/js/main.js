/**
*
* --------------------------------------------------------------------
*
* Template : kester - Consulting Business WordPress Theme

* --------------------------------------------------------------------
*
**/

(function($) {
    "use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    var headerinnerHeight = $(".header-inner").innerHeight();

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < headerinnerHeight) {
           header.removeClass("sticky");
           $('.menu-area').removeClass("sticky-menu");
           
       } else {
           header.addClass("sticky");
           $('.menu-area').addClass("sticky-menu");
       }
    });

    $('.header-inner').waypoint('sticky', {
      offset: 0
    });

    $(".widget_nav_menu li a").filter(function(){
        return $.trim($(this).html()) == '';
    }).hide();

    // collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
        });
     });

    // video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    } 

    $(".menu-area .navbar ul > li.menu-item-has-children").hover(
        function () {
            $(this).addClass('hover-minimize');
        },
        function () {
            $(this).removeClass("hover-minimize");
        }
    );

    $( ".showcase-item" ).hover(function() {
        $( this ).toggleClass("hover");
    });

    
    if($('.progress-wrap').length){
        $(document).ready(function(){    
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);	
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
            } else {
            jQuery('.progress-wrap').removeClass('active-progress');
            }
        });				
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    });
    }
     //Phone Number
    $('.phone_call').on('click', function(event) {        
        $('.phone_num_call').slideToggle('show');
    });

    //search 

     $('.sticky_search').on('click', function(event) {        
        $('.sticky_form').animate({ opacity: 'toggle' }, 500);;
        $( '.sticky_form input' ).focus();
    });

    $('.sticky_search').on('click', function() {
        $('body').removeClass('search-active').removeClass('search-close');
          if ($(this).hasClass('close-full')) {
            $('body').addClass('search-close');
             $('.sticky_form').fadeOut('show');
        }
        else {
            $('body').addClass('search-active');
        }
        return false;
    });
   
    $('.nav-link-container').on('click', function(e){
        $('body.on-offcanvas').removeClass('on-offcanvas');
        setTimeout(function(){ $('body').addClass('on-offcanvas'); },500);        
    });

    if($('.reactheme-newsletter').hasClass('reactheme-newsletters')){
        $('body').addClass('reactheme-pages-btm-gap');
    } 
    $('.sticky_form_search').on('click', function() {      
        $('body, html').removeClass('reactheme-search-active').removeClass('reactheme-search-close');
          if ($(this).hasClass('close-search')) {
          $('body, html').addClass('reactheme-search-close');

        }
        else {
          $('body, html').addClass('reactheme-search-active');
        }
        return false;
    });

   
    if($('#reactheme-header').hasClass('fixed-menu')){
        $('body').addClass('body-left-space');
    }  

    $("#reactheme-header ul > li.classic").hover(
        function () {
            $('body').addClass('mega-classic');
        },
        function () {
            $('body.mega-classic').removeClass("mega-classic");
        }
    );

    var nav = $('#nav');
    if(nav.length){
        $('#menu-single-menu').onePageNav();
    }
   new WOW().init();

    $(document).ready(function(){
        function resizeNav() {
            $(".menu-ofcn").css({"height": window.innerHeight});
            var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
            var diameter = radius * 2;
            $(".off-nav-layer").width(diameter);
            $(".off-nav-layer").height(diameter);
            $(".off-nav-layer").css({"margin-top": -radius, "margin-left": -radius});
        }
        $(".menu-button, .close-button").on('click', function() {
            $(".nav-toggle, .off-nav-layer, .menu-ofcn, .close-button, body").toggleClass("off-open");
        });    

        $(window).resize(resizeNav);
        resizeNav();
    });
   
    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".mobile-menus").toggleClass("nav-active-menu-container");
    });

    // Get a quote popup
    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500, //delay removal by X to allow out-animation
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });

    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".mobile-menus").toggleClass("nav-active-menu-container");
    });
    
    $(".nav-close-menu-li > a").on('click', function(event){
        $(".mobile-menus").toggleClass("nav-active-menu-container");
        $(".content").toggleClass("inactive-body");
    });


    $(".reactheme-heading h3").each(function() {
  
      // Some Vars
      var elText,
          openSpan = '<span class="first-word">',
          closeSpan = '</span>';
      
      // Make the text into array
      elText = $(this).text().split(" ");
      
      // Adding the open span to the beginning of the array
      elText.unshift(openSpan);
      
      // Adding span closing after the first word in each sentence
      elText.splice(2, 0, closeSpan);
      
      // Make the array into string 
      elText = elText.join(" ");
      
      // Change the html of each element to style it
      $(this).html(elText);
    });  

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });

    $(".reactheme-products-grid .product-btn .button").addClass("glyph-icon flaticon-shopping-bag");
    
     //Videos popup jQuery activation code
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });
     });

    //Select box wrap css
    $(".menu-area .navbar ul > li.mega > ul.sub-menu").wrapInner("<div class='container flex-mega'></div>");
    $('.menu-area .navbar ul > li.mega > ul.sub-menu li').first().addClass('first-li-item');


    if ($('div').hasClass('openingfoot')) {
        $('body').addClass('openingfootwrap');
    }

  
  //preloader
    $(window).on( 'load', function() {    
        $("#rts__preloader").delay(0).fadeOut(1000);

      if($(window).width() < 992) {
      $('.reactheme-menu').css('height', '0');
      $('.reactheme-menu').css('opacity', '0');
      $('.reactheme-menu').css('z-index', '-1');
      $('.reactheme-menu-toggle').on( 'click', function(){
         $('.reactheme-menu').css('opacity', '1');
         $('.reactheme-menu').css('z-index', '1');
     });
    }
    })

     // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return '<div class="gallery-title-wrap"><h3>' + item.el.attr('title') + '</h3>' + '<p>' + item.el.attr('caption') + '</p></div>';
            }
        },
        gallery: {
            enabled: true
        }
    });

    // JS for Filter
    $(window).load(function() {

            // image loaded portfolio init
    $('.grid').imagesLoaded(function() {
        $('.portfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            animationOptions: {
             duration: 750,
             easing: 'linear',
             queue: false
           },

            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    });

    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    });

    
     // Counter Up  
    $('.rs-counter').counterUp({
        delay: 20,
        time: 1500
    });     
    // scrollTop init
    var win=$(window);
    var totop = $('#top-to-bottom');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    }); 

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });
   
    
    $( ".comment-body, .comment-respond" ).wrap( "<div class='comment-full'></div>" );    


    $(window).on('elementor/frontend/init', function () { 
        elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
            const cartParent = $('.cart-icon-instedof-text');
            const addToCart = $('.cart-icon-instedof-text .add_to_cart_button');
            addToCart.html('<i class="rt-basket-shopping add-to-cart-icon"></i>');
        });
    });

    //mobile menu
    $.fn.menumaker = function(options) {      
        var mobile_menu = $(this), settings = $.extend({
          format: "dropdown",
          sticky: false
        }, options);
           return this.each(function() {
           mobile_menu.find('li ul').parent().addClass('has-sub');
           var multiTg = function() {
              mobile_menu.find(".has-sub").prepend('<span class="submenu-button"></span>');
              mobile_menu.find(".hash").parent().addClass('hash-has-sub');
              mobile_menu.find('.submenu-button').on('click', function() {
                  $(this).toggleClass('submenu-opened');
                  if ($(this).siblings('ul').hasClass('open-sub')) {
                      $(this).siblings('ul').removeClass('open-sub').hide('fadeToggle');
                      $(this).siblings('ul').hide('fadeToggle');                                     
                  }
                  else {
                      $(this).siblings('ul').addClass('open-sub').hide('fadeToggle');
                      $(this).siblings('ul').slideToggle().show('fadeToggle');
                  }
              });
           };
          if (settings.format === 'multitoggle') multiTg();
          else mobile_menu.addClass('dropdown');
          if (settings.sticky === true) mobile_menu.css('position', 'fixed');
          var resizeFix = function() {
               if ($( window ).width() > 991) {
                   mobile_menu.find('ul').show('fadeToggle');
                   mobile_menu.find('ul.sub-menu').hide('fadeToggle');
               }          
           };
          resizeFix();
          return $(window).on('resize', resizeFix);
          });
      };

      $(document).ready(function(){

        $("#mobile_menu").menumaker({
           format: "multitoggle"
        });
        
        });


     //woocommerce quantity style
     if ( ! String.prototype.getDecimals ) {
        String.prototype.getDecimals = function() {
            var num = this,
                match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            if ( ! match ) {
                return 0;
            }
            return Math.max( 0, ( match[1] ? match[1].length : 0 ) - ( match[2] ? +match[2] : 0 ) );
        }
    }
     // Quantity "plus" and "minus" buttons
     $( document.body ).on( 'click', '.plus, .minus', function() {
        var $qty        = $( this ).closest( '.quantity' ).find( '.qty'),
            currentVal  = parseFloat( $qty.val() ),
            max         = parseFloat( $qty.attr( 'max' ) ),
            min         = parseFloat( $qty.attr( 'min' ) ),
            step        = $qty.attr( 'step' );

        // Format values
        if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
        if ( max === '' || max === 'NaN' ) max = '';
        if ( min === '' || min === 'NaN' ) min = 0;
        if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

        // Change the value
        if ( $( this ).is( '.plus' ) ) {
            if ( max && ( currentVal >= max ) ) {
                $qty.val( max );
            } else {
                $qty.val( ( currentVal + parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        } else {
            if ( min && ( currentVal <= min ) ) {
                $qty.val( min );
            } else if ( currentVal > 0 ) {
                $qty.val( ( currentVal - parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        }

        // Trigger change event
        $qty.trigger( 'change' );
    });

    // Menu Expand on Click
    let linkMenu = $('.expand-on-click.menu-area .navbar ul li');
    linkMenu.click(function(){
        let linkSubMenu = $(this).find("ul");
        if( linkSubMenu.hasClass("menu-expand-click") ){
            linkSubMenu.removeClass("menu-expand-click");
        }else{
            let parentMenu = $(this).parent();
            let allSub = parentMenu.find("li ul");
            allSub.removeClass("menu-expand-click");
            linkSubMenu.addClass("menu-expand-click");            
        }
    });

    $(document).on("click", function(event){
        var $trigger = linkMenu;
        let linkSubMenu2 = linkMenu.find("ul");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            linkSubMenu2.removeClass("menu-expand-click");
        }
    }); 

})(jQuery);