(function($) {
    
var intro1 = $('.intro');
var intro2 = $('.desc');
var line = $('.intro-line');
var line2 = $('.intro-line2');
var info = $('.info');
var arrow = $('.scroll-down-btn');
var profile = $('.profile');
var main_header = $('main h1');

TweenLite.to( intro1, 1, {opacity:1 });
TweenLite.from( intro2, 2, {opacity:1, delay : 2});
TweenLite.from( line, 2, {width:0});
TweenLite.to( line, 2, {opacity:1});

TweenLite.from( line2, 2, {width:0, delay : 2});
TweenLite.to( line2, 2, {opacity:1, delay : 2});
TweenLite.to( info, 2, {opacity:1, delay : 2});
TweenLite.to( profile, 2, {opacity:1, delay : 2});
TweenLite.from( main_header, 1, {fontSize : 1 });
/*TweenMax.to( arrow, 1, {bottom:"+=1",  opacity:1, ease:Linear.easeNone, repeat:-1, delay : 4 , yoyo:true});
TweenMax.to( arrow, 1, {bottom:"-=15",  opacity:1, ease:Linear.easeNone, repeat:-1, delay : 4 , yoyo:true});*/
 

})(jQuery);



/*------ Nav scroll function -------*/
jQuery(document).ready(function($) {
 $(window).scroll(function() {
        var nav = $('nav');
        var scrollTop = $(window).scrollTop();
        console.log("The scroll top", scrollTop); 
        
           
            if ( scrollTop > 100 ) {    
               nav.addClass('black-nav');
            }
        
            if ( scrollTop < 100 ) {
               nav.removeClass('black-nav');
            } 
        
    });

  });
