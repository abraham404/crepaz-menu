const menus = {
  enchiladas: [
    { nombre: "Enchiladas verdes", precio: "$120" },
    { nombre: "Enchiladas rojas", precio: "$130" },
    { nombre: "Enchiladas suizas", precio: "$150" }
  ],
  desayunos: [
    { nombre: "Hotcakes", precio: "$90" },
    { nombre: "Omelette", precio: "$110" },
    { nombre: "Chilaquiles", precio: "$100" }
  ],
  hot_dog: [
    { nombre: "Hot dog sencillo", precio: "$45" },
    { nombre: "Hot dog hawaiano con queso manchego y piña.", precio: "$90" },
    { nombre: "Hot dog con carne asada, deshebrada o de pierna de cerdo.", precio: "$110" },
    { nombre: "Hot dog con peperoni y queso manchego", precio: "$110" },
    { nombre: "Hot dog con chorizo y queso manchego", precio: "$110" },
    { nombre: "Hot dog con champiñones y queso manchego", precio: "$110" },

  ],

  jugos: [
    {nombre: "Naranja" , precio: "$85"},
    {nombre: "Zanahoria" , precio: "$85"},
    {nombre: "Naranja y zanahoria" , precio: "$85"},
    {nombre: "Verde (apio, piña, nopal y naranja)" , precio: "$85"},
    {nombre: "Drácula (papaya, betabel, naranja, piña)" , precio: "$85"},
    {nombre: "Vampiro(Naranja, zanahoria, apio, betabel)" , precio: "$85"},
    {nombre: "Tropical (Piña, papaya y naranja)" , precio: "$85"}

  ],

  licuados: [
    { nombre: "Chocolate", precio: "$85" },
    { nombre: "Plátano", precio: "$85" },
    { nombre: "Frese", precio: "$85" },
    { nombre: "Plátano con chocolate", precio: "$85" },
    { nombre: "Fresa con chocolate", precio: "$85" },
    { nombre: "Moras (fresa, frambuesa, zarzamora)", precio: "$100" },
    { nombre: "Vaso con leche", precio: "$55" },
    { nombre: "Agregar avena 35 grs al licuar por", precio: "$13" },
    { nombre: "(Malteada) Fresa, Vainilla o Chocolate", precio: "$100" },

    
  ],

  bebidas: [
    { nombre: "Refresco lata  355 ml", precio: "$40" },
    { nombre: "Refresco 600ml o Fuze tea 600ml", precio: "$45" },
    { nombre: "Agua mineral (topo chico 600ml)", precio: "$45" },
    { nombre: "Botella agua 600ml", precio: "$25" },
    { nombre: "Botella agua 1 lt", precio: "$30" },
    { nombre: "Limonada (natural o mineral) 473 ml", precio: "$75" },
    { nombre: "Naranjada (natural o mineral) 473 ml", precio: "$75" }
  ],

  cafe: [
    { nombre: "Regular Americano", precio: "$45 / $50 / $55" },
    { nombre: "Espresso (SENCILLO/DOBLE) ", precio: "$50 / $55" },
    { nombre: "Cappuccino  o Latte ", precio: "$70 / $80 / $90" },
    { nombre: "Cappuccino Caramelo o Vainlla", precio: "$80 / $90 / $100" },
    { nombre: "Cappuccino Nutella", precio: "$90 / $100 / $110" },
    { nombre: "Moka", precio: "$80 / $90 / $100" },
    { nombre: "Latte Vainilla o Latte Caramelo", precio: "$80 / $90 / $100" },
    { nombre: "Espresso Americano", precio: "$65" },
    { nombre: "Latte", precio: "$75" },
    { nombre: "Mocha o Latte Caramelo o Vainilla", precio: "$85" },

  ],
  chocolate: [
    { nombre: "Regular", precio: "$75 / $80 / $85" },
    { nombre: "Con Malvavisco", precio: "$85 / $90 / $95" },
    { nombre: "Con Crema Batida", precio: "$95 / $100 / $105" }
  ],

  te: [
    { nombre: "Especias", precio: "$100 / $110" },
    { nombre: "Vainilla", precio: "$100 / $110" },
    { nombre: "Manzana con canela", precio: "$100 / $110" }
  ],

  frappes: [
    { nombre: "Chicle (Bubble Gum)", precio: "$110" },
    { nombre: "Vainilla latte", precio: "$110" },
    { nombre: "Cookies and cream expresso", precio: "$110" },
    { nombre: "Choco-Menta", precio: "$110" },
    { nombre: "Chocolate blanco", precio: "$110" },
    { nombre: "Mocha", precio: "$110" },
    { nombre: "Cereza", precio: "$110" },

  ],

  smoothies: [
    { nombre: "Fresa", precio: "$110" },
    { nombre: "Mango", precio: "$110" },
    { nombre: "Plátano", precio: "$110" },
    { nombre: "Berries", precio: "$110" },
    { nombre: "Chocolate blanco", precio: "$110" },
    { nombre: "Mocha", precio: "$110" },
    { nombre: "Cereza", precio: "$110" },

  ],

};

const overlay = document.getElementById("overlay");
const images = document.querySelectorAll(".img-menu");
const menuExpandido = document.getElementById("menuExpandido");

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