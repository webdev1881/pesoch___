
    console.log('jQuery is working');
 

//___________________ ANIMATE SCROLL REPEATER

  WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
  };
  var wow = new WOW();
  wow.init();
  $('.wow').on('scrollSpy:exit', function() {
    $(this).css({
      'visibility': 'hidden',
      'animation-name': 'none'
    }).removeClass('animated');
    wow.addBox(this);
  }).scrollSpy();
//____________________________________________




//_________Money
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};
var money = function (n) {
    return n.toString().reverse().replace(/(\d{3})(?=\d)/g, '$1'+"&thinsp;").reverse();
};
console.log([money(1000), money(10000), money(100000), money(1000000)].join(' ~ '));


//Прокрутка к секции (по высоте)

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
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
