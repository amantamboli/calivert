
function scrollToComponent(componentId) {
    var element = document.getElementById(componentId);

    if (element) {
      var offset = 65; // Adjust this value based on your preference
      var targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      toggleNavbar();
    }
  }

function toggleNavbar() {
    var navbar = document.querySelector('.navbars');
    navbar.classList.toggle('collapsed');

    var menuIcon = document.getElementById("menuIcon");
    if (navbar.classList.contains('collapsed')) {
      menuIcon.classList.add("fa-times");
      menuIcon.classList.remove("fa-bars");

    } else {
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");

    }
}