/*jshint esnext: true */
/*global window: false */
/*jshint browser: true */
/*globals $:false */

$(document).ready(function(){
	
	$('#navigation_bar a').click(function(){
		var $value = $(this).text();
		console.log("Successfully Clicked on the list option " + $value + " " +  $(this).attr("class"));
		$(this).addClass("active").siblings().removeClass("active");
		var $addedClass = $(this).attr("class");
		
		console.log("Successfully Clicked on the list option " + $value + " " +  $addedClass);
	});
});