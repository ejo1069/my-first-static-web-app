

(function() {
  
  /*-- loder --*/
  /*$(window).on("load",function(){
      $(".loader-wrapper").fadeOut("slow");
  });*/

 /* $(document).ready(function() {
 
        setTimeout(function(){
            $('body').addClass('loaded');
        }, 2000);
 
    });*/


    $(window).on("load",function(){
      $('body').addClass('loaded');
    });



  /*-- MENU --*/
  var Menu = (function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var brand = document.querySelector('.menu__brand');
    var menuItems = document.querySelectorAll('.menu__item');
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        menu.classList.add('menu--active');
        menuList.classList.add('menu__list--active');
        brand.classList.add('menu__brand--active');
        burger.classList.add('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu__item--active');
        }
        
        active = true;
      } else {
        menu.classList.remove('menu--active');
        menuList.classList.remove('menu__list--active');
        brand.classList.remove('menu__brand--active');
        burger.classList.remove('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }
        
        active = false;
      }
    };
    
    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();


  /*-- gotop --*/
  $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });


  /*-- newsarea reveal --*/
  (function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.fadein', {
      duration   : 800,
      distance   : '40px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : false,
      scale      : 1,
      viewFactor : 0,
      afterReveal  : revealChildren,
    }, 150);
    
      var revealChildren = sr.reveal('.fadein-title, .fadein-text', {
      duration   : 500,
      scale      : 1,
      distance   : '40px',
      origin     : 'bottom',
      reset      : false,
      easing     : 'ease-out',
      viewFactor : 1,
    }, 75);
  })();


  /*-- otherparts reveal --*/
  jQuery(function($) {
  
        // Function which adds the 'animated' class to any '.animatable' in view
        var doAnimations = function() {
          
          // Calc current offset and get all animatables
          var offset = $(window).scrollTop() + $(window).height(),
              $animatables = $('.animatable');
          
          // Unbind scroll handler if we have no animatables
          if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
          }
          
          // Check all animatables and animate them if necessary
          $animatables.each(function(i) {
             var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
              $animatable.removeClass('animatable').addClass('animated');
            }
          });

        };
        
        // Hook doAnimations on scroll, and trigger a scroll
        $(window).on('scroll', doAnimations);
        $(window).trigger('scroll');

  });
  

  /*-- email area --*/
  var emailInput;

    $("#email-input").on("change", function() {
      emailInput = $(this).val();

      if (validateEmail(emailInput)) {
        $(this).css({
          color: "white",
          background: "#198048",
          border: "1px solid #FFF"
        });
      } else {
        $(this).css({
          color: "#96C348",
          background: "#198048",
          border: "1px solid #FFF"
        });

        // alert("not a valid email address");
      }
    });

    $("#subscribe-button").on("click", function(e) {
      var welcome = document.getElementById('hint');

      // e.preventDefault();
      if (validateEmail(emailInput)) {
        //alert("Email地址已傳送");
        //return false;
          welcome.innerHTML = 'Email地址已傳送';
          return false;
      } else {
        //alert('請正確填寫');
        welcome.innerHTML = '請檢查Email地址';
        return false;
      }
    });

    function validateEmail(email) {
      var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

      return $.trim(email).match(pattern) ? true : false;
    }
    
    

    
    /*-- Production Page --*/
    $("nav.for-production li").hover(function() {
        $this = $(this);
        $(".agg").css("background-image", "url(" + $(this).data("bg") + ")");
    });


    


  
}());