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

const miniaturas = document.querySelector("#miniaturas");
const flechaIzquierda = document.querySelector(".flecha-izquierda");
const flechaDerecha = document.querySelector(".flecha-derecha");

let imagenes = [];
let imagenActual = 0;

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
            <li>✔ Personalizable en color y aroma.</li>
            <li>✔ Disponible con tull, caja de regalo o backing card personalizable.</li>
        `;

        crearMiniaturas();

        modal.classList.add("activo");

    });

});

// ===============================
// MINIATURAS
// ===============================

function crearMiniaturas(){

    miniaturas.innerHTML = "";

    imagenes.forEach((imagen, indice)=>{

        const mini = document.createElement("img");

        mini.src = imagen;

        if(indice === imagenActual){

            mini.classList.add("activa");

        }

        mini.addEventListener("click",()=>{

            imagenActual = indice;

            modalImagen.src = imagenes[imagenActual];

            actualizarMiniaturas();

        });

        miniaturas.appendChild(mini);

    });

}

function actualizarMiniaturas(){

    document.querySelectorAll(".miniaturas img").forEach((img, indice)=>{

        img.classList.toggle("activa", indice === imagenActual);

    });

}

// ===============================
// CAMBIAR IMAGEN
// ===============================

function siguienteImagen(){

    imagenActual++;

    if(imagenActual >= imagenes.length){

        imagenActual = 0;

    }

    modalImagen.src = imagenes[imagenActual];

    actualizarMiniaturas();

}

function anteriorImagen(){

    imagenActual--;

    if(imagenActual < 0){

        imagenActual = imagenes.length - 1;

    }

    modalImagen.src = imagenes[imagenActual];

    actualizarMiniaturas();

}

// ===============================
// FLECHAS
// ===============================

flechaDerecha.addEventListener("click",(e)=>{

    e.stopPropagation();

    siguienteImagen();

});

flechaIzquierda.addEventListener("click",(e)=>{

    e.stopPropagation();

    anteriorImagen();

});

// ===============================
// SWIPE
// ===============================

let inicioX = 0;
let finX = 0;

modalImagen.addEventListener("touchstart",(e)=>{

    inicioX = e.changedTouches[0].screenX;

});

modalImagen.addEventListener("touchend",(e)=>{

    finX = e.changedTouches[0].screenX;

    if(inicioX - finX > 50){

        siguienteImagen();

    }

    if(finX - inicioX > 50){

        anteriorImagen();

    }

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