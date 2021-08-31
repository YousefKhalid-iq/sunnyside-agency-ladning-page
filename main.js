const list = document.querySelector(".hamburger-container");
const active = document.querySelector(".menu-container");

list.addEventListener("click", function () {
	active.classList.toggle("press");
});