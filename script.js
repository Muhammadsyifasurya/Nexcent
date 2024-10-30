function toggleMenu(element) {
  const navList = document.querySelector(".nav-list");
  const isVisible = navList.classList.toggle("show");
  element.classList.toggle("active"); // Mengubah tampilan hamburger menjadi silang

  console.log("Hamburger clicked");
  console.log("Nav list is visible:", isVisible);
}
