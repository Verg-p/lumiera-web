// ===============================
// MENÚ HAMBURGUESA LUMIERA
// ===============================

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");

// Abrir y cerrar menú

hamburguesa.addEventListener("click", () => {

    menu.classList.toggle("activo");

});

// Cerrar al pulsar un enlace

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("activo");

    });

     });

// ===============================
// MODAL PRODUCTO
// ===============================

const modal = document.querySelector("#modalProducto");

const abrirModal = document.querySelector(".overlay-producto");

const cerrarModal = document.querySelector(".cerrar-modal");

// Abrir

abrirModal.addEventListener("click", () => {

    modal.classList.add("activo");

});

// Cerrar con la X

cerrarModal.addEventListener("click", () => {

    modal.classList.remove("activo");

});

// Cerrar haciendo clic fuera

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("activo");

    }

});
