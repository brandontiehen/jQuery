/**
	* "Image Floater" - Lightbox Plugin
	* Developed by, Brandon Tiehen
	* NOTE: Edit your HTML classes or the classes/id's written in this script to match your needs.
	* jQuery required.
	* Call function as $(selector).imageFloater();
*/
$.fn.imageFloater = function(){
	$('[class*="-lightbox"]').hide(0);
	$('[id*="-lb"]').on('click', function(){
		var $img = this.id;
		var selected = "." + $img + "-lightbox";
		$(selected).fadeIn(500);
	});
	$('[id*="close"]').click(function(){
		$('[class*="-lightbox"]').fadeOut(500);
	});
}