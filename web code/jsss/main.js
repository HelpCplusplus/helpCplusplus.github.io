function toggleMenu() {
    const menu = document.querySelector('.menu-list');
    const isVisible = getComputedStyle(menu).display === "block";

    menu.style.display = isVisible ? "none" : "block";
}
