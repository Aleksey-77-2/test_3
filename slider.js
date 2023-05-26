const swiper = new Swiper('.swiper', {
	// Основная настройка
	direction: 'horizontal',
	loop: true,
	speed: 500,
	effect:'fade',
	followFinger:true,
	// Пагинация (точки)
	pagination: {
	  el: '.swiper-pagination',
	},
 
	//Кнопки вперед назад
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	// Автоматическое перелистование слайдов
	autoplay:{
		delay:5000,  
		// Звдержка перед перелистованием 1с = 1000м/с
		disableOnInteraction:false,
		pauseOnMouseEnter:true,
	}
 });