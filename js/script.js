// toggle active
const navbarNav = document.querySelector(".navbar-nav");
//
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// setting navbar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.targer)) {
    navbarNav.classList.remove("active");
  }
});
