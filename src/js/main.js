$(document).ready(()=> {
    console.log('jQuery is working');
    

});












/*
	new WOW().init();

	$('.slider').slick({
		//arrows: false,
		dots: true,
		prevArrow: $('.arr_prev'),
		nextArrow: $('.arr_next'),
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1
})



$(function () {
      $('.SendEmail').click(function (event) {
        var email = 'sample@gmail.com';
        var subject = 'Test';
        var emailBody = document.getElementsByName('body');
        var attach = 'path';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
            "?attach="+attach;
      });
    });




// my FULL PAGE________________

var divs = $('.section');
    var dir = 'up'; // wheel scroll direction
    var div = 0; // current div
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            dir = 'down';
        } else {
            dir = 'up';
        }
        // find currently visible div :
        div = -1;
        divs.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
        if (dir == 'up' && div > 0) {
            div--;
        }
        if (dir == 'down' && div < divs.length) {
            div++;
        }
        //console.log(div, dir, divs.length);
        $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 500);
        return false;
    });
    $(window).resize(function () {
       if(divs.eq(div) != "undefined"){
       	$('html,body').scrollTop(divs.eq(div).offset().top)};
    });
  
*/
