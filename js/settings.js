//  ====================================================================
//	Theme Name: Showcaser - Responsive Multipurpose Html Template
//	Theme URI: http://themeforest.net/user/responsiveexperts
//	Description: This javascript file is using as a settings file. This file includes the sub scripts for the javascripts used in this template.
//	Version: 1.0
//	Author: Responsive Experts
//	Author URI: http://themeforest.net/user/responsiveexperts
//	Tags:
//  ====================================================================

//	TABLE OF CONTENTS
//	---------------------------
//	 01. Preloader
//	 02. Masonry
//	 03. Menu Content
//   04. SideBar Content
//	 05. Home Slider
//   06. Image Popup

//  ====================================================================


(function() {
	"use strict";
	
	

	$(window).load(function() {
		
		// -------------------- 01. Preloader ---------------------
		// --------------------------------------------------------
		$("#loader").fadeOut();
		$("#mask").delay(1000).fadeOut("slow");
	
		// --------------------- 02. Masonry ----------------------
		// --------------------------------------------------------
		
		$('.grid').masonry({
		  // options
		  itemSelector: '.grid-item',
		});
	});
	
	// ------------------- 03. Menu Content  ------------------
	// --------------------------------------------------------
	$(document).ready(function() {
		$('.main-menu').find('ul').find('li').find('a').on('click touchstart',function() {
			$('.main-menu').find('ul').find('li').find('a').removeClass('active');
			$(this).addClass('active');
			var sect_id = $(this).attr('href');
			$('.inner-page').removeClass('active');
			$(sect_id).addClass('active');
			$('.sb-toggle-left').removeClass('active');
		});
		$('.close-btn-inner').on('click touchstart',function() {
			$('.main-menu').find('ul').find('li').find('a').removeClass('active');
			$('.inner-page').removeClass('active');
		});
		$('.read-more-link').on('click touchstart',function() {
			$('.inner-page').removeClass('active');
			var link_to_load = $(this).attr('href');
			$(link_to_load).addClass('active');
		});
	
	// --------------------- 04. SideBar Content -------------------
	// -------------------------------------------------------------
	

		$.slidebars({
			siteClose: false,
		});
		$('.sb-toggle-left').on('click touchstart',function(e) {
			$(this).toggleClass('active');
		});
	});
	
	// --------------------- 05. Home Slider ------------------
	// --------------------------------------------------------
	
	$(function() {
		Slider.init();
	});
	
	
	// -------------------- 06. Image Popup -------------------
	// --------------------------------------------------------
	
	$('.portfolio-content').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image'
	  // other options
	});
	

})(jQuery);


