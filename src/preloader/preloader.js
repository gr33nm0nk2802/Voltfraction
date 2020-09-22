
function stopLoader(){
	$('.loader').fadeOut();
}

$(document).ready(function(){
	setTimeout(stopLoader,5000);
})

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(500).fadeOut("slow");

});