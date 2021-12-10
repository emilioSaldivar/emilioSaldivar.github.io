let animado = document.querySelectorAll(".animado");//seleccionamos el contenedor

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;// cantidad de scroll que hay en la pantalla
    for (var i = 0; i < animado.length; i++){//por cada elemento
        let alturaAnimado = animado[i].offsetTop;//la altura desde la parte superior hasta el elemento
        if( alturaAnimado - 450 < scrollTop ){//para mostrar hasta llegar a la altura
            if(i < animado.length-2){
                animado[i].style.opacity = 1;
                animado[i].classList.add("mostrarDesdeArriba");
            }else{// se muestran los dos ultimos elemntos que son los proyectos webs
                animado[i].style.opacity = 1;
                animado[i].classList.add("mostrarDesdeIzquierda");
            }
        }
    }
}


window.addEventListener("scroll", mostrarScroll);