document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  const openMenu = () => {
    menu.classList.add("show");
  };

  const closeMenu = () => {
    menu.classList.remove("show");
  };

  const toggleMenu = () => {
    if (menu.classList.contains("show")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.addEventListener("click", function (e) {
    if (
      menu.classList.contains("show") &&
      !menu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });
});