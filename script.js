//Hamburger section

const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.getElementById("nav-links");
const socialIcons = document.getElementById("social-icons");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  socialIcons.classList.toggle("show");
  hamburger.classList.add("hide");
  closeIcon.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("show");
  socialIcons.classList.remove("show");
  closeIcon.classList.remove("show");
  hamburger.classList.remove("hide");
});

//Contact alert section

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    document.getElementById("contact-form").reset();
  });
