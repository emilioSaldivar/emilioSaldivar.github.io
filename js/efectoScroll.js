let animado = document.querySelectorAll(".animado");//seleccionamos el contenedor

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;// cantidad de scroll que bajamos
    for (var i = 0; i < animado.length; i++){//por cada elemento
        let alturaAnimado = animado[i].offsetTop;//la altura desde la parte superior hasta el elemento
        if( alturaAnimado - 450 < scrollTop ){//para mostrar hasta llegar a la altura
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarDesdeArriba");
        }
    }
}


window.addEventListener("scroll", mostrarScroll);