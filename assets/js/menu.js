const headerNav = document.querySelector(".header_nav");
const headerToggle = document.querySelector("#headerToggle");

// header_nav에 show 붙으면 보이게 하는 법
headerToggle.addEventListener("click", () => {
  headerNav.classList.toggle("show");
});
