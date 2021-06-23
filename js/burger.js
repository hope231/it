$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger,.header__menu,.header,.header__ico').toggleClass('active');
		$('body').toggleClass('lock');
	});
});