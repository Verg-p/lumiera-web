// ===============================
// MENÚ HAMBURGUESA LUMIERA
// ===============================

const hamburguesa = document.querySelector(".hamburguesa");
const menuMovil = document.querySelector(".menu-movil");

// Abrir y cerrar el menú

hamburguesa.addEventListener("click", () => {

    menuMovil.classList.toggle("activo");

});