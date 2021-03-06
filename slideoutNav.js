/**
	*"Slideout Nav" - Navigation Plugin
	* Developed by, Brandon Tiehen
	* NOTE: Edit your HTML classes or the classes/id's written in this script to match your needs.
	* jQuery required.
*/
var nav = function(){
	/* Push the body and the nav over by 285px over */
	$('.icon-menu').click(function(){
		$('.menu').animate({
			left: "0px"
		}, 500);
		
		$('body').animate({
			left: "285px"
		}, 500);
	});
	
	/* Then push them back */
	$('.icon-close').click(function(){
		$('.menu').animate({
			left: "-285px"
		}, 500);
		
		$('body').animate({
			left: "0px"
		}, 500);
	});
};
$(document).ready(nav);