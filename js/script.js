document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".burger-icon");
    const header = document.querySelector(".header");

    burgerIcon.addEventListener("click", function () {
        header.classList.toggle("menu-open");
    });
});
