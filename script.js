//  Hamburger-meny från gamla filen 
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});
