function toggleMenu(element) {
  const navList = document.querySelector(".nav-list");
  const isVisible = navList.classList.toggle("show");
  element.classList.toggle("active"); // Mengubah tampilan hamburger menjadi silang

  console.log("Hamburger clicked");
  console.log("Nav list is visible:", isVisible);
}

const toggleButton = document.getElementById("toggleDarkMode");
const body = document.body;

// Cek apakah dark mode diaktifkan sebelumnya
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggleButton.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleButton.classList.toggle("dark-mode");

  // Simpan preferensi pengguna
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});
