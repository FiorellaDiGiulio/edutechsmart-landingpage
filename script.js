//  Hamburger-meny från gamla filen
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const btn = document.querySelector(".btn-secondary");
const modal = document.getElementById("modal");
const video = document.getElementById("video");
const closeBtn = document.getElementById("close");

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const role = document.getElementById("role");
const next = document.getElementById("next");
const testImg = document.getElementById("t-img");

const testimonials = [
  {
    quote:
      "We can train our staff in a way that is both effective and motivating.",
    author: "Ulrika Jönsson, STIL assistans",
    role: "Supervisor Partner and Resource Manager",
    image: "images/testimonials/ulrika.jpg",
  },
  {
    quote:
      "The courses are really good, saves time and studies can be made anywhere.",
    author: "Din & Min Omsorg",
    role: "",
    image: "images/testimonials/dinominomsorg.jpg",
  },
  {
    quote:
      "It's essential that our employees has knowledge about CPR. This can save the lives of guests and collegues.",
    author: "Umeå Folkets Hus",
    role: "",
    image: "images/testimonials/umea.png",
  },
  {
    quote:
      "This interactive educational method to teach CPR is really good, relevant and necessary!",
    author: "Anders Eriksson",
    role: "Cardiology Specialist, Senior Consultant",
    image: "images/testimonials/anders.jpg",
  },
  {
    quote:
      "From a business point of view, this game-engine based education combined with AI technology in a SaaS platform is brilliant.",
    author: "Egil Strunke",
    role: "Strategic Advisor",
    image: "images/testimonials/egil.jpeg",
  },
  {
    quote:
      "This is really spot on when it comes to timing for the healthcare sector. A format we have been dreaming of.",
    author: "Sofia Nilsson",
    role: "Expert Healthcare",
    image: "images/testimonials/sofia.jpg",
  },
];

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active"); // ändrat från "open" till "active"
});

/* Modal for playing video */
function openModal(e) {
  e.preventDefault();
  video.src = "https://www.youtube.com/embed/YNJCmB9kYBo?autoplay=1&mute=1";
  modal.style.display = "grid";
}

function closeModal() {
  modal.style.display = "none";
  video.src = ""; //
}
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  video.src = "";
});

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (!e.target.closest(".box")) closeModal();
});
/* Testimonials */
let i = 0;
function showTestimonial() {
  quote.textContent = testimonials[i].quote;
  author.textContent = testimonials[i].author;
  role.textContent = testimonials[i].role;
  testImg.src = testimonials[i].image;
  testImg.alt = testimonials[i].author || "testimonial";
}
showTestimonial();

next.addEventListener("click", () => {
  console.log(i);
  i = (i + 1) % testimonials.length;
  showTestimonial();
});
