var typed = new Typed(".multitext", {
  strings: [
    " A Student",
    " A Web Developer",
    " A Beginner",
    " A Coder",
    " A Geek",
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 900,
  loop: true,
});

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
