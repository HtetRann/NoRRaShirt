
$(document).ready(function(){
$('nav#primary-nav , div#featured-nav').click(function() {
    		$('nav#primary-nav').toggleClass('primary-nav-off primary-nav-on');
    		$('div#featured-nav').toggleClass('featured-nav-off featured-nav-on');
    	});
});