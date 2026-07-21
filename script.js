// ======================================
// LUMIERA
// JavaScript principal
// ======================================

// ===============================
// MENÚ HAMBURGUESA
// ===============================

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");

if (hamburguesa && menu) {

    hamburguesa.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("activo");

        });

    });

}

// ===============================
// MODAL PRODUCTOS
// ===============================

const modal = document.querySelector("#modalProducto");
const cerrarModal = document.querySelector(".cerrar-modal");
const tarjetas = document.querySelectorAll(".card-producto");

const modalImagen = document.querySelector("#modalImagen");
const modalTitulo = document.querySelector("#modalTitulo");
const modalDescripcion = document.querySelector("#modalDescripcion");
const modalLista = document.querySelector("#modalLista");
const modalPrecio = document.querySelector("#modalPrecio");

let imagenes = [];
let imagenActual = 0;

const miniaturas = document.querySelector("#miniaturas");
const flechaIzquierda = document.querySelector(".flecha-izquierda");
const flechaDerecha = document.querySelector(".flecha-derecha");

// ===============================
// ABRIR MODAL
// ===============================

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

if (tarjeta.dataset.imagenes) {

    imagenes = tarjeta.dataset.imagenes.split(",");

} else {

    imagenes = [tarjeta.dataset.imagen];

}

        imagenActual = 0;

        modalImagen.src = imagenes[0];

        modalTitulo.textContent = tarjeta.dataset.nombre;
        modalDescripcion.textContent = tarjeta.dataset.descripcion;
        modalPrecio.textContent = tarjeta.dataset.precio;

        modalLista.innerHTML = `
            <li>✔️ Personalizable en color y aroma.</li>
            <li>✔️ Disponible con tull, caja de regalo o backing card personalizable.</li>
        `;

        modal.classList.add("activo");

    });

});


// ===============================
// CERRAR MODAL
// ===============================

cerrarModal.addEventListener("click",()=>{

    modal.classList.remove("activo");

});

modal.addEventListener("click",(e)=>{

    if(e.target === modal){

        modal.classList.remove("activo");

    }

});
