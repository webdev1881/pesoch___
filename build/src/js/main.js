	console.log("js is working...");

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
  
/*
window.onload = function(){
	getFrameContents()	
}
function getFrameContents(){
   var iFrame =  document.getElementById('frmFile');
   var iFrameBody;
   if ( iFrame.contentDocument ) 
   { // FF
     iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
   }
   else if ( iFrame.contentWindow ) 
   { // IE
     iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
   }
    alert(iFrameBody.innerHTML);
 }


//var a = document.getElementById("frmFile");
 function statsget() {
   var uname = 'CertainPerformance';
   fetch(`https://intranet.yugcontract.ua/mis/motivation/participants/get_list/?module_id=101&_dc=1534850931714&page=1&start=0&limit=150&sort=%5B%7B%22property%22%3A%22extra1%22%2C%22direction%22%3A%22DESC%22%7D%5D`)
   
     .then(res => res.json())
     .then(resJSON => {
     		{ mode: 'no-cors' }
       // interact with resJSON here
       console.log(resJSON);
     });
 }
 statsget();

*/


//console.log(a+".#"+document.body.innerHTML)



//var a = document.getElementById("frmFile");
//var a = document.createRange();
//console.log(a.contentWindow.document.body)


  	









