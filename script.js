//Hamburger section

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const socialIcons = document.getElementById("social-icons");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  socialIcons.classList.toggle("show");
});

//Contact alert section

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    document.getElementById("contact-form").reset();
  });
