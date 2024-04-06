const accordtion_title = document.querySelectorAll(".accordion-title");

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

  // mouseover bg change
  // if (title.nextElementSibling.classList.contains("inactive")) {
  //   title.addEventListener("mouseover", (e) => {
  //     title.parentElement.style.backgroundColor = "#b9ff66";
  //   });
  //   title.addEventListener("mouseout", () => {
  //     title.parentElement.style.backgroundColor = "#f3f3f3";
  //   });
  // } else {
  //   title.parentElement.style.backgroundColor = "#b9ff66";
  // }
  if (!title.nextElementSibling.classList.contains("inactive")) {
    title.querySelector(".accordtion_btn").innerHTML = "-";
    // title.parentElement.style.backgroundColor = "#b9ff66";
    // title.parentElement.classList.toggle("apply-bg-green");
  }
});
