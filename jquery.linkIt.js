/*
 *	Plugin Name: LinkIt
 *	Author: Trevor McGrath
 *	Version: 0.1.0
 *	License: MIT
 *
 */

 (function($){

 	$.fn.linkIt = function(options){

 		//Default Settings
 		var settings = $.extend({
 			href : null,
 			text : null,
 			target: '_blank'
 		}, options);

 		// Validate
 		if( settings.href === null) {
 			console.log("You need an href option for linkIt to work");
 			return this;	
 		}

 		return this.each(function(){
 			var object = $(this);

 			if(settings.text === null){
 				settings.text = object.text();
 			}

 			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
 		});


 	}

 }(jQuery));