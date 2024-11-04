// selector
const toggleMenu = document.querySelector(".menu__nav");
const closeMenu = document.querySelector(".close-btn");
const menu__overlay = document.querySelector(".menu__overlay");
const header__nav = document.querySelector(".header__nav");

// listener
toggleMenu.addEventListener("click", () => {
	menu__overlay.classList.toggle("active");
	document.querySelector(".close-btn").classList.toggle("active");
	document.querySelector(".menu__nav").classList.toggle("active");
	document.querySelector(".background-dim").classList.toggle("active");
	document.body.classList.toggle("no-scroll");
});

closeMenu.addEventListener("click", () => {
	menu__overlay.classList.toggle("active");
	document.querySelector(".close-btn").classList.toggle("active");
	document.querySelector(".menu__nav").classList.toggle("active");
	document.querySelector(".background-dim").classList.toggle("active");
	document.body.classList.toggle("no-scroll");
});

// remove menu at higher viewport

function viewPorthandling() {
	if (window.innerWidth > 760) {
		header__nav.classList.remove("menu__overlay");
		header__nav.classList.remove("active");
		document.querySelector(".background-dim").classList.remove("active");
		document.querySelector(".menu__nav").classList.remove("active");
		document.querySelector(".close-btn").classList.remove("active");
	} else {
		header__nav.classList.add("menu__overlay");
	}
}
window.addEventListener("resize", viewPorthandling);
// call it once on page load to set initial state
viewPorthandling();
