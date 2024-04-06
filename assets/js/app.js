const accordtion_title = document.querySelectorAll(".accordion-title");
console.log(accordtion_title);

// console.log(accordtion_btn);

accordtion_title.forEach((title) => {
  title.addEventListener("click", (e) => {
    title.nextElementSibling.classList.toggle("inactive");
    if (!title.nextElementSibling.classList.contains("inactive")) {
      title.querySelector(".accordtion_btn").innerHTML = "-";
      title.parentElement.style.backgroundColor = "#b9ff66";
    } else {
      title.querySelector(".accordtion_btn").innerHTML = "+";
      title.parentElement.style.backgroundColor = "#f3f3f3";
    }
    // if (
    //   e.target.classList.contains("accordion-title") ||
    //   e.target.parentElement.parentElement.classList.contains("accordion-title")
    // ) {
    // }
    //  if()
  });
});
