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
