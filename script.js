const menuBtn = document.querySelector(".menu-btn");
const subMenu = document.querySelector(".submenu");

menuBtn.addEventListener("click", () => {
    subMenu.classList.toggle("show");
});