//alert('Этот сайт проигрывает музыку. Отключить можно в левом верхнем углу около имени')
let cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', function changeCursor(e){
	let X  = e.clientX;
	let Y = e.clientY;
	cursor.style.left = X -20  + 'px';
	cursor.style.top  = Y -20+ 'px';
});

let cross = document.querySelectorAll('.cross');
for(let i =0; i< cross.length;i++){
	cross[i].addEventListener('click', ()=>{
		portfolio.classList.remove('active')
		about.classList.remove('active')
		contact.classList.remove('active')
	})
}
let portfolio = document.querySelector('.portfolio')
let about = document.querySelector('.about')
let contact = document.querySelector('.contact')
let profLinks = document.querySelectorAll('#profBut')
for( let i = 0; i< profLinks.length; i++){
	profLinks[i].addEventListener('click', ()=>{
		if(profLinks[i].value == 'portfolio'){
			portfolio.classList.add('active')
		}
		if(profLinks[i].value == 'about'){
			about.classList.add('active')
		}
		if(profLinks[i].value == 'contact'){
			contact.classList.add('active')
		}
	})
}


let audio = document.getElementById('audio')
let sound = document.querySelector('.sound');

sound.addEventListener('click', ()=>{
	if(sound.classList.contains('active')){
		sound.classList.remove('active')
		sound.innerHTML = '<img src="./media/mute.png" alt="">'
		audio.volume = 0
	}else{
		sound.classList.add('active')
		sound.innerHTML = '<img src="./media/volume.png" alt="">'
		audio.volume = 0.3
		audio.play()
	}
})