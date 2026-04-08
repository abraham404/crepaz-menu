import menus from './menus.js';

const overlay = document.getElementById("overlay");
const images = document.querySelectorAll(".img-menu");
const menuExpandido = document.getElementById("menuExpandido");

// 🔹 Abrir menú dinámico
images.forEach(img => {
  img.addEventListener("click", () => {

    const tipo = img.dataset.menu;
    const lista = menus[tipo];
    
    if (!lista) return;

    let html = `<h3>${tipo.toUpperCase()}</h3>`;

    lista.forEach(item => {
      html += `
        <div class="platillo">
          <div class="nombre">${item.nombre}</div>
          <div class="precio">${item.precio}</div>
          
          <div class="contador">
            <button class="menos">-</button>
            <span class="cantidad">0</span>
            <button class="mas">+</button>
          </div>
        </div>
      `;
    });

    // 🔥 Insertar HTML
    menuExpandido.innerHTML = html;

    // 🔥 AHORA sí existen los elementos → agregar eventos
    const platillos = menuExpandido.querySelectorAll(".platillo");

    platillos.forEach(p => {
      const menos = p.querySelector(".menos");
      const mas = p.querySelector(".mas");
      const cantidad = p.querySelector(".cantidad");

      let count = 0;

      mas.addEventListener("click", (e) => {
        e.stopPropagation();
        count++;
        cantidad.textContent = count;
        p.classList.add("seleccionado");
      });

      menos.addEventListener("click", (e) => {
        e.stopPropagation();
        if (count > 0) count--;
        cantidad.textContent = count;

        if (count === 0) {
          p.classList.remove("seleccionado");
        }
      });

      // 🔹 click en todo el platillo (opcional)
      p.addEventListener("click", () => {
        if (count === 0) {
          count = 1;
          cantidad.textContent = count;
          p.classList.add("seleccionado");
        }
      });
    });

    // Mostrar overlay
    menuExpandido.classList.add("activo");
    overlay.classList.add("activo");
  });
});

// 🔹 Cerrar
overlay.addEventListener("click", () => {
  menuExpandido.classList.remove("activo");
  overlay.classList.remove("activo");
});