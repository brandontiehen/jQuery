/**
	* Navigue - Responsive Navigation Plugin - Version 1.0
	* Copyright (c) Brandon Tiehen
	* Creation Date: February 17th, 2016
	* The software is provided as is and may be used for personal use (with attribution / credit to the developer (Brandon Tiehen)); heavily commented for easier understanding and instruction.
	* Edits and modifications may be made to the class and ID selectors in order to make it compatable with your website. However, this software may not be downloaded and sold at a price.
	* To call function, declare the document.ready function and within that, call $(selector).navigue();
*/
$.fn.navigue - function(){
	$(".mobile-nav").hide(); //Hide mobile navigation
	$("#mobile-nav-list").hide();//Hide the UL nested within .mobile-nav
	$("span[id='nav-caption']").hide();//Hide "Navigation" caption
	$(".default-nav").hide(); //Hide default navigation
	$(".default-nav").fadeIn(1000); //Fade in Default nav with the content
	if($(window).width() < 800){//If window is less than 800px, then...
		$(".default-nav").hide(); //hide default navigation
		$(".mobile-nav").show(); //Show mobile navigation
	}
	$(window).resize(function(){ //Declares function when window is resized DOWN
		if($(this).width() < 800){//If window is less than 800px wide, then do...
			$(".default-nav").hide(); //hide default navigation
			$(".mobile-nav").show(); //Show mobile navigation
		}
	});
	$(window).resize(function(){ //Declares function when window is resized UP
		if($(this).width() >= 800){ //If window size is greater than or equal to 800px, then do...
			$(".mobile-nav").hide();//hide the mobile nav
			$(".default-nav").show();//shot the default nav
		}
	});
	$("#mobile-button").click(function(){//When #mobile-button is clicked, make a function saying to do...
		$("#mobile-nav-list").toggle(500);//Slide Nav in and Out / Easy Dropdown
	});
	$(window).resize(function(){//Precaution for in case mobile nav doesn't hide on resize. (Optional feature)
		if($(this).width() >= 800){//If window is greater than or equal to 800px on resize or load, then hide mobile nav and show default nav
			$("mobile-nav-list").hide();
			$(".default-nav").show(); //Show Default nav
		}
	});
	$(window).resize(function(){//When screen width is at, or resized to 640px >, then use this function
		if($(this).width() <= 640){//If width <= 640, then
			$("span[id='nav-caption']").show();//show the nav caption
		}
		else{
			if($(this).width() > 640){//otherwise
				$("span[id='nav-caption']").hide();//hide it
			}
		}
	});
};