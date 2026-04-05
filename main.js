import menus from './menus.js';

const overlay = document.getElementById("overlay");
const images = document.querySelectorAll(".img-menu");
const menuExpandido = document.getElementById("menuExpandido");

images.forEach(img => {
  img.addEventListener("click", () => {

    const tipo = img.dataset.menu;
    const lista = menus[tipo];

    if (!lista) return;

    let html = `<h3>${tipo.toUpperCase()}</h3>`;

    console.log(lista.length);

    lista.forEach(item => {
     html += `
      <div class="platillo">
        <div class="nombre">${item.nombre}</div>
        <div class="precio">${item.precio}</div>
      </div>
    `;
    });

    menuExpandido.innerHTML = html;
    menuExpandido.classList.add("activo");
    overlay.classList.add("activo");
  });
});

// cerrar
overlay.addEventListener("click", () => {
  menuExpandido.classList.remove("activo");
  overlay.classList.remove("activo");
});