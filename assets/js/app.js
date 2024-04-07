const accordtion_title = document.querySelectorAll(".accordion-title");
const nav_menu = document.getElementById("nav_menu");
const show_btn = document.getElementById("show_btn");
const cross_btn = document.getElementById("cross_btn");
const header = document.getElementsByTagName("header")[0];

const menu_btn = document.querySelectorAll(".menu_btn");

accordtion_title.forEach((title) => {
  title.addEventListener("click", (e) => {
    title.nextElementSibling.classList.toggle("inactive");
    if (!title.nextElementSibling.classList.contains("inactive")) {
      title.querySelector(".accordtion_btn").innerHTML = "-";
      // title.parentElement.style.backgroundColor = "#b9ff66";
      title.parentElement.classList.toggle("apply-bg-green");
    } else {
      title.querySelector(".accordtion_btn").innerHTML = "+";
      // title.parentElement.style.backgroundColor = "#f3f3f3";
      title.parentElement.classList.toggle("apply-bg-green");
    }
  });

  if (!title.nextElementSibling.classList.contains("inactive")) {
    title.querySelector(".accordtion_btn").innerHTML = "-";
  }
});

menu_btn.forEach((menu) => {
  menu.addEventListener("click", () => {
    if (nav_menu.classList.contains("menu_toggle")) {
      show_btn.style.display = "block";
      cross_btn.style.display = "none";
    } else {
      cross_btn.style.display = "block";
      show_btn.style.display = "none";
    }
    nav_menu.classList.toggle("menu_toggle");
    header.classList.toggle("fixed_header");
  });
});

function functiondisable() {
  // To get the scroll position of current webpage
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

  // if scroll happens, set it to the previous value
  window.onscroll = function () {
    window.scrollTo(LeftScroll, TopScroll);
  };
}

function functionenable() {
  window.onscroll = function () {};
}
