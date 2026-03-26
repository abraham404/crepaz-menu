/*
document.querySelectorAll('.img-menu').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('activa');
  });
});
*/

const overlay = document.getElementById("overlay");
const images = document.querySelectorAll(".img-menu");

images.forEach(img => {
  img.addEventListener("click", () => {

    if (img.classList.contains("activa")) {
      img.classList.remove("activa");
      overlay.classList.remove("activo");
    } else {
      document.querySelectorAll(".img-menu").forEach(i => i.classList.remove("activa"));
      img.classList.add("activa");
      overlay.classList.add("activo");
    }

  });
});

// Cerrar al tocar fondo
overlay.addEventListener("click", () => {
  document.querySelectorAll(".img-menu").forEach(i => i.classList.remove("activa"));
  overlay.classList.remove("activo");
});