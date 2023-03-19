const toggleMenu = document.getElementById("toggleMenu");
const floatingMenu = document.getElementById("floatingMenu");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    floatingMenu.classList.toggle("show");
});