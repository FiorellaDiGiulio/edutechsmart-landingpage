//  Hamburger-meny från gamla filen
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active"); // ändrat från "open" till "active"
});

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
    image: "images/testimonials/anders.png",
  },
  {
    quote:
      "From a business point of view, this game-engine based education combined with AI technology in a SaaS platform is brilliant.",
    author: "Egil Strunke",
    role: "Strategic Advisor",
    image: "images/testimonials/egil.png",
  },
  {
    quote:
      "This is really spot on when it comes to timing for the healthcare sector. A format we have been dreaming of.",
    author: "Sofia Nilsson",
    role: "Expert Healthcare",
    image: "images/testimonials/sofia.png",
  },
];
