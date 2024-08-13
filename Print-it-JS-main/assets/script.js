const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const droite = document.getElementsByClassName('arrow_right');
const gauche = document.getElementsByClassName('arrow_left');
const texte = document.querySelector("#banner p");
// seleteur pour récupérer l'image
const image = document.querySelector(".banner-img");
const dots = document.querySelector(".dots");

let currentSlide = 0; // la slide actuelle c'est la 0

for (let i = 0; i < slides.length; i++) {
	// Création des dots dans la div
	const dot = document.createElement('span');
	dot.classList.add('dot');
	dots.appendChild(dot);
}

const allDots = document.getElementsByClassName('dot');
allDots[currentSlide].classList.add('dot_selected');

droite[0].addEventListener("click", nextSlide);
gauche[0].addEventListener("click", prevSlide);

function nextSlide() {
	currentSlide++;
	if (currentSlide == slides.length) {
		currentSlide = 0;
	}
	console.log("click flèche droite");
    changeSlide();

}

function prevSlide() {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
		console.log(currentSlide + ' ' + slides.length)
	}
	console.log("click flèche gauche");
    changeSlide();
}

function changeSlide() {
	console.log("click image");
	texte.innerHTML = slides[currentSlide].tagLine;
	image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	for (let i = 0; i < slides.length; i++) {
		allDots[i].classList.remove('dot_selected');
	}
	allDots[currentSlide].classList.add('dot_selected');
}

