(function($){
  "use strict"; // Start of use strict


  //  $("#advanced_search_select").on('change',function(){
     //   var getoptionstext = $("#advanced_search_select option:selected").text();
      //  $('.advanced_search_cus_select').text(getoptionstext);
    //});

   // $("#custumselect").on('change',function(){
     //   var getoptionstext = $("#custumselect option:selected").text();
   //     $('.cus_select').text(getoptionstext);
   // });

   // $("#countryselect").on('change',function(){
     //   var getoptionstext = $("#countryselect option:selected").text();
    //    $('.cus_country_select').text(getoptionstext);
  // });

   // $("#destinationselect").on('change',function(){
     //   var getoptionstext = $("#destinationselect option:selected").text();
    //    $('.cus_destination_select').text(getoptionstext);
   // });

  //  $("#cate_select").on('change',function(){
      //  var getoptionstext = $("#cate_select option:selected").text();
      //  console.log(getoptionstext);
     //   $('.cus_cate_select').text(getoptionstext);
   // });

   // $("#reg_select").on('change',function(){
      //  var getoptionstext = $("#reg_select option:selected").text();
    //    $('.cus_reg_select').text(getoptionstext);
   // });



    // same parts as templates loading
   // $(".subpage_sidebar").load("sub_page_sidebar.html");
   // $(".logo_search_bar").load("banner_menu_3.html");
    // $(".logo_search_bar_v2").load("banner_menu_3.html");
    // $(".logo_search_bar_v3").load("banner_menu_3.html");
    // $(".logo_search_bar").load("banner_menu_myanmar.html");
    // $(".subpage_sidebar1").load("subpage_sidebar1.html");
    // $(".subpage_sidebar").load("subpage_sidebar.html")

    // $(".highlights_bar").load("highlights_bar.html");
    //$("#highlights_bar_mm").load("highlights_bar_mm.html");
    // $("footer").load("footer_mm.html");
    //$("#footer_mm").load("footer_mm.html");
   // $("#popupbox").load("popup.html");

      // window.onload = function(){}
      // $(window).on('load',function(){})

      $(window).on('load', function () {

            $("#advanced_search_select").on('change',function(){
              var getoptionstext = $("#advanced_search_select option:selected").text();
              $('.advanced_search_cus_select').text(getoptionstext);
            });

            $("#countryselect").on('change',function(){
              var getoptionstext = $("#countryselect option:selected").text();
              $('.cus_country_select').text(getoptionstext);
            });

            $("#destinationselect").on('change',function(){
              var getoptionstext = $("#destinationselect option:selected").text();
              $('.cus_destination_select').text(getoptionstext);
            });

           /*  $("#cate_select").on('change',function(){
              var getoptionstext = $("#cate_select option:selected").text();
              alert(getoptionstext);
              $('.cus_cate_select').text(getoptionstext);
            });

            $("#reg_select").on('change',function(){
              var getoptionstext = $("#reg_select option:selected").text();
              $('.cus_reg_select').text(getoptionstext);
            });*/


          $(document).on("click", '#main_advanced_search', function() {
                      $("#main_advanced_search_wrapper").fadeToggle();
            });


            $(window).scroll(function() {

              if ($(this).scrollTop() > 1)
              {
                  $('.logo_search_bar').addClass("sticky");
                  $("#main_advanced_search_wrapper").removeClass('topmargin12');
              }
              else
              {
                  $('.logo_search_bar').removeClass("sticky");
                  $('.subpagebanner').addClass('topmargin12');
                  $("#main_advanced_search_wrapper").addClass('topmargin12');
                }
        });

          /* --------------------------------------------
              SEARCH
            --------------------------------------------- */
            //open search form

            // $('.cd-search-trigger').on('click', function(event){
            //   event.preventDefault();
            //   toggleSearch();
            // });


            // $('.navbar-toggle').click(function(){
            //   $(this).toggleClass('active');
            // });


            // function toggleSearch(type)
            // {
            //     if(type=="close")
            //     {
            //       //close serach
            //       $('.cd-search').removeClass('is-visible');
            //       $('.cd-search-trigger').removeClass('search-is-visible');
            //       $('.cd-overlay').removeClass('search-is-visible');
            //     } else
            //     {
            //       //toggle search visibility
            //       $('.cd-search').toggleClass('is-visible');
            //       $('.cd-search-trigger').toggleClass('search-is-visible');
            //       $('.cd-overlay').toggleClass('search-is-visible');
            //       ($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
            //     }
            // }
    });


/* --------------------------------------------
  DOCUMENT.READY
--------------------------------------------- */
$(document).ready(function(){
	 if( $('#selectoption').length ){
		 document.getElementById("selectoption").value = "NoSelection";
	 }
	 if( $('#mnp_home_emergencybox').length ){
		 $("#mnp_home_emergencybox").appendTo("footer");
	 }
	 
	$("#custumselect").on('change',function(){
              var getoptionstext = $("#custumselect option:selected").text();
              $('.cus_select').text(getoptionstext);
              var dataValue=document.getElementById('custumselect').value;
              var selector = '.emergencybox' + '.' + dataValue;
              $(selector).fadeIn();
            });
	/*SonDN4 fix loi emergency*/
	$("#selectoption").on('change',function(){
        var getoptionstext = $("#selectoption option:selected").text();
        $('.cus_select').text(getoptionstext);
        var dataValue=document.getElementById('selectoption').value;
        var selector = '.emergencybox' + '.' + dataValue;
        $(selector).fadeIn();
      });
	
	/*SonDN4 fix loi emergency khong tat duoc popup*/
	$(document).on("click", '.subscribepopup,.registerpopup,.loginpopup,.emergencybox', function(e) {

        if(e.target.className ==$(this).attr('class')){
            $(this).fadeOut();
        }
        document.getElementById('emergency-span').innerHTML= document.getElementById('emergency').value;
        document.getElementById("selectoption").value = "abcd";

    });
	
	/*SonDN4 fix loi emergency khong tat duoc popup*/
	$(document).on("click", '#cancel', function(e) {

        $(this).parent("div").parent('div').fadeOut();
        document.getElementById('emergency-span').innerHTML= document.getElementById('emergency').value;
        document.getElementById("selectoption").value = "abcd";

	});

	$("#cate_select").on('change',function(){
		var getoptionstext = $("#cate_select option:selected").text();
		$('.cus_cate_select').text(getoptionstext);
	});
	
	
	$("#reg_select").on('change',function(){
		var getoptionstext = $("#reg_select option:selected").text();
		$('.cus_reg_select').text(getoptionstext);
	});
	
	$(".search_cate_select").on('change',function(){
		var getoptionstext = $(this).find('option:selected').text();
		$(this).siblings('span.cus_search_reg_select').text(getoptionstext);
	});
	
	$(".search_reg_select").on('change',function(){
		var getoptionstext = $(this).find('option:selected').text();
		$(this).siblings('span.cus_search_reg_select').text(getoptionstext);
	});

  $("#advance_search").click(function(){
    $(".gov_service_hidesearch_form").fadeToggle();
  })

  /*$(".rating").starRating({
    minus: true // step minus button
  });*/


/* --------------------------------------------
    FUNCTIONS
  --------------------------------------------- */
 // initMenu();


  /* --------------------------------------------
   Home Page 3 columns rows Same Height
  --------------------------------------------- */
  var maxHeight = -1;

   $('.content .department_section').each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   // $('.content .department_section').each(function() {
   //   $(this).height(maxHeight);
   //   console.error(maxHeight)
   // });//test code


 /* --------------------------------------------
    HEADER MENU
  --------------------------------------------- */

  function initMenu()
  {
    'use strict';
     var $ = jQuery,
     body = $('body'),
     primary = '#main-menu';
     // console.log($);

      $(primary).on('click','.open-sub',function(){

          // event.preventDefault();
          var item = $(this).closest('li');
//          console.error(item);
          // [li.parent.open-sub.active, prevObject: init(1), context: li.parent.open-sub.active]

          if($(item).hasClass('active'))
          {
//              console.log($(item).children().last());
              $(item).children().last().slideUp(150);
              $(item).removeClass('active');
          }
          else
          {
              var li = $(this).closest('li').parent('ul').children('li');
              if($(li).is('.active'))
              {
                $(li).removeClass('active').children('ul').slideUp(150);
              }
              $(item).children().last().slideDown(150);
              $(item).addClass('active');
          }
      })
  }


/* --------------------------------------------
       Home main slider
    --------------------------------------------- */

$('.mainslider').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 600,
    cssEase: 'linear'
});

$('.pause').on('click', function() {
    $(this).hide();
    $('.play').show();
    $('.mainslider')
        .slick('slickPause');
});

$('.play').on('click', function() {
    $(this).hide();
    $('.pause').show();
    $('.mainslider')
        .slick('slickPlay')
});

/* --------------------------------------------
       Photo_video_gallery
    --------------------------------------------- */

$('.photo_video_gallery').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$('.new_details_slider,.where_tovisit_slider,.others_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$('.businessfaq').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

/* --------------------------------------------
       Visitor Landing slider
    --------------------------------------------- */

  $('.l2_visitor_landing_slider').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }]
    });

/* --------------------------------------------
       Famous destination slider
    --------------------------------------------- */

  $('.famous_destionation_slider').slick({
         dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    /* --------------------------------------------
       Pop up overflow control for low height
    --------------------------------------------- */

    var popupheight = window.matchMedia("(max-height: 648px)");
    function popupheightCtrl()
    {
      if(popupheight.matches === true)
      {
          $(".loginform").css({
                'height': '85vh',
                'overflow': 'auto'});
      }
      else
      {
          $(".loginform").css('height','auto');
      }
    }
    popupheightCtrl(popupheight);
    popupheight.addListener(popupheightCtrl);


  // console.log($('.item.active:last-child').is(":visible"))
  // console.log($(".item.active > div:last-child").is(":visible"));


    /* --------------------------------------------
       Sticky nav bar
    --------------------------------------------- */

      $(window).scroll(function() {
    	  if($('#stickylogomenubar').length){
    		  var sticky = $('#stickylogomenubar');
              var stickyheight = $('#stickylogomenubar').outerHeight();
              $('#stickylogomenubar').parent().css('min-height', $('#stickylogomenubar').outerHeight());
              // Use the wrapper's top
              if (sticky.parent().position().top - $(window).scrollTop() < 100)
              {

                    if (!sticky.data('fixed'))
                    {
                      sticky.css({
                        'position': 'fixed',
                        'z-index': '1000',
                        // 'background-image': 'url(images/flag.png)',
                        'left': '0',
                        'right': '0'
                      })
                      sticky.data('fixed', true);
                 }

                 // ---------

                  $("#main_advanced_search_wrapper").css({
                  'position': 'fixed',
                  'top': stickyheight
                 });
              }
              else if (sticky.data('fixed'))
              {
                  sticky.css({
                    'position': 'static',
                    'top': 'auto'
                  })
                  sticky.data('fixed', false);
              }

              // ---------resize and scroll state-------

              $(window).resize(function(){
                // console.log($(window).innerWidth());
                var current_window_width = $(window).innerWidth();
                // if(current_window_width <= 480){
                //   alert(current_window_width);
                // }
              })
    	  }        
        });

      // console.log($(window).scroll);


    /*    $(window).resize(function(){
            if($(window).outerWidth()<=1024){   
            	 if($('#stickylogomenubar').length){
            		 var sticky = $('#stickylogomenubar');
                     sticky.css({
                                   'position': 'fixed',
                                   'z-index': '1000',
                                   'background-image': 'url(/o/new-mnp-theme/images/mm-flag.png)',
                                   'background-size': '54%',
                                   'background-position': 'right 40px center',
                                   'background-color': '#fff',
                                   'background-repeat': 'no-repeat',
                                   'left': '0',
                                   'right': '0'
                                 })
            	 }
            }
        });*/



        /* --------------------------------------------
            Loading sub template
        --------------------------------------------- */

        window.onload = function()
        {
            initMenu();

            $('.navbar-toggle').click(function(){
              $(this).toggleClass('active');
            });


                $(document).on("click", '#login', function() {
              $('.loginpopup').fadeIn();
            });


            $(document).on("click", '#register,#goregister_popup', function() {
                    $('.registerpopup').fadeIn();
            });


                $(document).on("click", '#goregister_popup', function() {
              $('.loginpopup').fadeOut();
            });


            $(document).on("click", '#gosignin_popup', function() {
              $('.registerpopup').fadeOut();
              $('.loginpopup').fadeIn();
            });

            $(document).on("keypress", '#searchbtn', function(e) {
                // var code = e.keyCode ? e.keyCode : e.which;
                if (e.keyCode == 13) {
                    window.location = "result.html";
                }
            });

            $(document).on("click", '#searchclick', function(e) {
                // var code = e.keyCode ? e.keyCode : e.which;

                    window.location = "result.html";

            });

            $(document).on("click", '#dirsearch', function(e) {
                // var code = e.keyCode ? e.keyCode : e.which;

                window.location = "gov_directory.html";

            });

            $(document).on("keypress", '#workdirectory', function(e) {
                // var code = e.keyCode ? e.keyCode : e.which;
                if (e.keyCode == 13) {
                    window.location = "gov_directory.html";
                }
            });


            //
            // $(document).on("click", '.loginpopup', function(e) {
            //
            //     if(e.target.className ==$(this).attr('class')){
            //         $(this).fadeOut();
            //     }
            //
            // });
            //
            // $(document).on("click", '.registerpopup', function(e) {
            //
            //     if(e.target.className ==$(this).attr('class')){
            //         $(this).fadeOut();
            //     }
            //
            // });
            

//            $(document).on("change", '#custumselect', function(e) {
//
//                $('.emergencybox').fadeIn();
//                // alert("ok");
//
//            });




            // $('.loginform').parent().click(function(){
            //   $(this).fadeOut();
            // }).children().click(function(){
            //     return false;
            // });
            //
            // $('#subscribe_btn').click(function(){
            //   $('.subscribepopup').fadeIn();
            // });

            $(document).on("click", '#subscribe_btn', function() {
                $('.subscribepopup').fadeIn();
            });
            // $('.subscribe_btn').parent().click(function(){
            //   $(this).fadeOut();
            // }).children().click(function(){
            //     return false;
            // });


            $(document).on("click", '#forgotuserid_pwd', function() {
              $('.forgotuserid_pwd_popup').fadeIn();
              $('.loginpopup').fadeOut();
            });


            $(".panel-default .custom_toggle").click(function(){
              if($(this).hasClass('nobefore')){
                  $(this).removeClass('nobefore');
              }else{
                $(".panel-default .custom_toggle").removeClass('nobefore');
                $(this).addClass('nobefore');
              }
            });

            $(".panel-default").click(function(){
              $(this).toggleClass('nobefore').siblings().removeClass('nobefore');
            })

             $("#location_bymap").click(function(){
              $('.map_popup').fadeIn();
            });

            // $("#govdirectorymap").parent().click(function(){$(this).toggleClass('nobefore').siblings
            //   console.log("hit")
            // })

            $("#govdirectorymap").parent().click(function(){
              $(this).fadeOut();
            }).children().click(function(){
              return false;
            });

            // $("#main_advanced_search").click(function(){
            //   $("#main_advanced_search_wrapper").fadeToggle();
            // });


            /* --------------------------------------------
                Font Size Increase/Decrease
            --------------------------------------------- */
            // SonDN4 fix change fontsize page
            var offset = 0 ;
            $("#increasefontSize").on("click",function(){
         	   if(offset <= 6){
         		  offset = offset + 1
         		  var p = $("#content").find("p,h1,h2,h3,h4,h5,h6,li,span,a")
                  for(var i=0;i<p.length;i++)
                  {
               	   style = window.getComputedStyle(p[i], null).getPropertyValue('font-size');
               	   currentSize = parseFloat(style);
               	   p[i].style.fontSize = (currentSize + 1) + 'px';
                   }
         	   }
               
              });

            // SonDN4 fix change fontsize page
             $("#normalfontSize").on("click",function(){
            	  var p = $("#content").find("p,h1,h2,h3,h4,h5,h6,li,span,a")
                  for(var i=0;i<p.length;i++)
                  {
                	  style = window.getComputedStyle(p[i], null).getPropertyValue('font-size');
               	   	  currentSize = parseFloat(style);
               	   	  p[i].style.fontSize = (currentSize - offset)  + 'px';
                  }
                 offset = 0 ;
              });

             // SonDN4 fix change fontsize page
              $("#decreasefontSize").on("click",function(){
                if(offset >= -4){
                	offset = offset - 1
                	var p = $("#content").find("p,h1,h2,h3,h4,h5,h6,li,span,a")
                    for(var i=0;i<p.length;i++)
                    {  
                     style = window.getComputedStyle(p[i], null).getPropertyValue('font-size');
                 	   currentSize = parseFloat(style);
                 	   p[i].style.fontSize = (currentSize - 1) + 'px';
                    }
                }
                
              });
        }

        //window.onload end


        /* --------------------------------------------
                Photo & Video Gallery
        --------------------------------------------- */
        if($('.popup-gallery').length){
            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>Myanmar</small>';
                    }
                }
            });
        }
    if($('.popup-youtube').length) {
        //youtube link will come in www.youtube.com/watch?12adsfjas without http://
        $('.popup-youtube').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });
    }
    
    /*if($('.open-popup-link').length) {
    	 $('.open-popup-link').magnificPopup({
    		  items: {
    		      src: $('#mnp-video-popup'),
    		      type: 'inline',
    		      midClick: true,
    		      mainClass: 'custom-popup-class'
    		  }
    	});
    	 
    	 
    }*/
        /* --------------------------------------------
                Calendar Plugin
        --------------------------------------------- */

    if($('#calendar').length) {

        $('#calendar').fullCalendar({
            fixedWeekCount: false,
            header: {
              right: 'prev,next'
            },
            defaultDate: '2017-10-12',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true
            , // allow "more" link when too many events
            events: [
              {
                title: 'Lorem Ipsum Dolor Sit Amet Non Insonp ',
                start: '2017-10-27',
              }
              // ,
              // {
              //   title: 'Long Event',
              //   start: '2017-10-07',
              //   end: '2017-10-10'
              // },
              // {
              //   id: 999,
              //   title: 'Repeating Event',
              //   start: '2017-10-09T16:00:00'
              // },
              // {
              //   id: 999,
              //   title: 'Repeating Event',
              //   start: '2017-10-16T16:00:00'
              // },
              // {
              //   title: 'Conference',
              //   start: '2017-10-11',
              //   end: '2017-10-13'
              // },
              // {
              //   title: 'Meeting',
              //   start: '2017-10-12T10:30:00',
              //   end: '2017-10-12T12:30:00'
              // },
              // {
              //   title: 'Lunch',
              //   start: '2017-10-12T12:00:00'
              // },
              // {
              //   title: 'Meeting',
              //   start: '2017-10-12T14:30:00'
              // },
              // {
              //   title: 'Happy Hour',
              //   start: '2017-10-12T17:30:00'
              // },
              // {
              //   title: 'Dinner',
              //   start: '2017-10-12T20:00:00'
              // },
              // {
              //   title: 'Birthday Party',
              //   start: '2017-10-13T07:00:00'
              // },
              // {
              //   title: 'Click for Google',
              //   url: 'http://google.com/',
              //   start: '2017-10-28'
              // }
             ]
         });

    }

    if($('#calendar').length) {

        $('#calendar').fullCalendar('option', 'contentHeight', 600);
    }
   });

  //ready end

})(jQuery);

/*
 * ---------------------------------------- *
 * Star Rating                              *
 * JavaScript                               *
 * v1.0                                     *
 * Matt O'Neill | www.matt-oneill.co.uk     *
 * ---------------------------------------- *
 */
/*SonDN4*/
/*(function ($) {
    $.fn.starRating = function (s) {
        return this.each(function () {
            var $ratingElement = $(this);
            $ratingElement.append("<ul />");
            var $ratingField = $(this).children("ul");
            for (var x = 0; x < $ratingElement.data("rating-max") ; x++) {
                $ratingField.append("<li>");
            }
            $ratingFieldItem = $ratingField.children();
            var rating = 0;
            $ratingFieldItem.on({
                click: function () {
                    if ($(this).index() + 1 != rating) {
                        rating = $(this).index() + 1;
                        $ratingElement.attr("data-val", rating);
                        $("li:lt(" + ($(this).index() + 1) + ")", $ratingField).addClass("active");
                        $("li:gt(" + ($(this).index()) + ")", $ratingField).removeClass("active");
                    }
                    else {
                        $(this).parent().children("li").removeClass("active");
                        $ratingElement.attr("data-val", null);
                        rating = 0;
                    }
                },
                mouseenter: function () {
                    $("li:lt(" + ($(this).index() + 1) + ")", $ratingField).addClass("hover");
                    $("li:gt(" + ($(this).index()) + ")", $ratingField).removeClass("hover");
                },
                mouseleave: function () {
                    $(this).parent().children("li:gt(" + ($(this).index()) + ")").removeClass("hover");
                }
            });
            $ratingField.on({
                mouseleave: function () {
                    $ratingFieldItem.removeClass("hover");
                }
            });
            if (s.minus) {
                $ratingElement.prepend("<span class='less'></span>");
                $("span.less", $ratingElement).on("click", function () {
                    $("li.active:last", $ratingField).removeClass("active");
                });
            }
        });
    };
}(jQuery));*/