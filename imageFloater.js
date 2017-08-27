/**
	* "Image Floater" - Lightbox Plugin - Version 1.1
	* Developed by, Brandon Tiehen
	* NOTE: Edit your HTML classes or the classes/id's written in this script to match your needs.  Also, call the function in the file where the script is located
	* jQuery required.
	* Call function as $(selector).imageFloater(); in your document.ready function.
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
	$(document).bind('keydown', function(e) { 
		if (e.which == 27){
			$('[class*="-lightbox"]').fadeOut(500);
		}
	});
}
//$(document).ready(function(){$(this).imageFloater();});


//-->

//HTML
/*

<div class="mainPage-lb-lightbox">
	<div class="row"><div class="col-10"><button id="close">&times;</button></div></div>
	<div class="row">
    	<div class="col-7">
        	<center><img src=""/></center><!--YOUR IMAGE HERE-->
        </div>
        <div class="col-3">
        	<h3><!--IMAGE TITLE--></h3>
            <hr width="75%"/>
            <p><!--IMAGE DESCRIPTION-->.</p>
        </div>
    </div>
</div>

*/

//-->

//CSS
/*

.row{clear:both !important; width:auto; margin:0 auto;}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .quarter, .third{float:left; max-height:100% !important;}.col-1{width:10%;}.col-2{width:20%;}.col-3{width:30%;}.col-4{width:40%;}.col-5{width:50%;}.col-6{width:60%;}.col-7{width:70%;}.col-8{width:80%;}.col-9{width:90%;}.col-10{max-width:100%; width:100%;}img[id*="-lb"]{transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-ms-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;-ms-transition:0.2s ease-in-out;filter:grayscale(100%);-webkit-filter:grayscale(100%);-o-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);cursor:pointer;}img[id*="-lb"]:hover{transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-ms-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;-ms-transition:0.2s ease-in-out;opacity:0.8;}[class*="-lightbox"]{width:100vw;height:100vh;overflow:hidden;position:fixed;top:0;background:rgba(0, 0, 0, 0.975);z-index:150;max-height:96%;max-width:96%;padding:2%;color:#FFF;}[class*="-lightbox"] h3{text-align:center;}#close{width:40px;height:40px;float:right;clear:both;font-size:1.5em;}@media all and (max-width:768px){.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .quarter, .third{float:auto !important; margin:0 auto !important; width:100%; max-width:100% !important; max-height:100% !important;}}


*/