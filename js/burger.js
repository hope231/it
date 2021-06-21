$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger,.header__menu').toggleClass('active');
		$('body, html').toggleClass('lock');
	});
});