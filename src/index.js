import Typed from "typed.js";
// Hamburger Menu
function onToggleMenu(icon) {
  icon.name = icon.name === "menu-outline" ? "close-outline" : "menu-outline";
  const nav = document.querySelector("ul");
  nav.classList.toggle("top-[6%]");
}

const Typed = document.querySelector(".typing");

// const typed = new Typed(".typing", {
//   strings: ["Web Developer", "Web Designer", "Freelancer"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true,
//   loopCount: Infinity,
// });


