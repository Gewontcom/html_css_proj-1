let burger = document.querySelector(".header-menu-icons-burger");
let cross = document.querySelector(".header-menu-icons-cross");
let menu = document.querySelector(".header-menu");

burger.addEventListener("click", function () {
  burger.style.display = "none";
  cross.style.display = "block";
  menu.style.display = "flex";
});

cross.addEventListener("click", function () {
  burger.style.display = "block";
  cross.style.display = "none";
  menu.style.display = "none";
});

const contentContainer = document.getElementById("content");

const routes = {
  "home": "pages/home.html",
  "about-us": "pages/about-us.html",
  "contact": "pages/contact.html",
  "portfolio": "pages/portfolio.html",
};

loadPage(routes["home"]);


function loadPage(page) {
  contentContainer.innerHTML = "";
  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      contentContainer.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading page:", error);
    });
}

function handleMenuClick(page) {
  const menuButtons = document.querySelectorAll(".header-menu-link");
  menuButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const selectedButton = document.getElementById(page);
  selectedButton.classList.add("active");

  loadPage(routes[page]);
}

function setupMenuLinks() {
  const menuButtons = document.querySelectorAll(".header-menu-link");
  menuButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); 
      const page = event.target.id;
      handleMenuClick(page);
    });
  });
}


setupMenuLinks();


