const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function opennav() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
}
console.log();
function close1() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", function () {
  if (navbar.classList.contains("opened")) {
    close1();
  } else {
    opennav();
  }
});

const navbarMenu = navbar.querySelector("#navmenu");

navbarMenu.addEventListener("click", close1);
