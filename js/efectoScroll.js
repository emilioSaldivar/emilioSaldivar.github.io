let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].getBoundingClientRect().top + scrollTop;
        let windowHeight = window.innerHeight;

        if (alturaAnimado - windowHeight + 150 < scrollTop) {
            animado[i].style.opacity = 1;

            if (i < animado.length - 2) {
                animado[i].classList.add("mostrarDesdeArriba");
            } else {
                animado[i].classList.add("mostrarDesdeIzquierda");
            }
        }
    }
}

window.addEventListener("scroll", mostrarScroll);
window.addEventListener("resize", mostrarScroll);

// Ejecuta la función cuando la página cargue para inicializar las animaciones
document.addEventListener("DOMContentLoaded", mostrarScroll);
