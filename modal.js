const btns = document.querySelectorAll('.product');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modals_block');
const closeBTN = document.querySelector('.modal_close');

btns.forEach((el)=>{
	el.addEventListener('click',(e)=>{
		let path =e.currentTarget.getAttribute('data-path');
		modals.forEach((el)=>{
			el.classList.remove('modal--visible');
		});
		scrollController.disabledScroll();
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});
// Закрытие модального окна 
modalOverlay.addEventListener('click',(e)=>{
	if (e.target ==modalOverlay){
	scrollController.enabledScroll();	
	modalOverlay.classList.remove('modal-overlay--visible');
	modals.forEach((el)=>{
		el.classList.remove('modal--visible');
	});
	}
});
closeBTN.addEventListener('click',(e)=>{
	scrollController.enabledScroll();	
	modalOverlay.classList.remove('modal-overlay--visible');
	modals.forEach((el)=>{
		el.classList.remove('modal--visible');
	});
});

window.addEventListener('keydown', (e)=>{
	if (e.key === "Escape"){
		scrollController.enabledScroll();	
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el)=>{
			el.classList.remove('modal--visible');
		})
	}
})
document.getElementById("close-my-modal").addEventListener("click", function(){
	document.getElementById("my-modal").classList.remove("open");
})