let menuBtn = document.querySelector("#menu");
let mobileMenu = document.querySelector(".mLinks");
let closeBtn = document.querySelector(".close");
menuBtn.addEventListener("click", () => {
	let z = mobileMenu.classList;
	let c = closeBtn.classList;
	z.toggle("mLinksOpen");
	c.toggle("closeMenu");
});
closeBtn.addEventListener("click", () => {
	let q = mobileMenu.classList;
	let u = closeBtn.classList;
	q.toggle("mLinksOpen");
	u.toggle("closeMenu");
});