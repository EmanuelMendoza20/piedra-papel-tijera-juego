let puntosUsuario = 0
let puntosPC = 0

let instrucciones = document.querySelector("#instrucciones")
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto")
let elegiTuArma =document.querySelector("#elegi-tu-arma")

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionComputadora = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
    
});

reiniciar.addEventListener("click", reiniciarJuego);

function iniciarTurno(e) {
        
        let eleccionPC = Math.floor(Math.random() * 3)
        
        let eleccionUsuario = e.currentTarget.id;
        //console.log(eleccionUsuario)
        
        // piedra = 0
        // papel = 1
        // tijera = 2


        //Eleccion Computadora

        if (eleccionPC === 0){
            eleccionPC = "piedra 🌑"
        }else if (eleccionPC === 1){
                eleccionPC = "papel 📋"
            }else if (eleccionPC === 2){
                eleccionPC = "tijera ✂"
            }

        console.log("PC: " + eleccionPC)
        console.log("Usuario: " + eleccionUsuario)

        //reglas del juego

        //piedra vence a tijera
        //tijera vence a papel
        //papel vence a piedra
        //si son iguales es empate

        if (
            (eleccionUsuario === "piedra 🌑" &&  eleccionPC === "tijera ✂") ||
            (eleccionUsuario === "tijera ✂" && eleccionPC === "papel 📋") ||
            (eleccionUsuario === "papel 📋" && eleccionPC === "piedra 🌑")
        ){
            ganaUsuario();
        } else if (
            (eleccionPC === "piedra 🌑" &&  eleccionUsuario === "tijera ✂") ||
            (eleccionPC === "tijera ✂" && eleccionUsuario === "papel 📋") ||
            (eleccionPC === "papel 📋" && eleccionUsuario === "piedra 🌑")
        ){
            ganaPC();
        }else {
            empate();
        }

        mensaje.classList.remove("disabled")
        contenedorEleccionUsuario.innerText = eleccionUsuario;
        contenedorEleccionComputadora.innerText = eleccionPC
        
        if (puntosUsuario === 5 || puntosPC === 5){
            if (puntosUsuario === 5){
                instrucciones.innerText = "¡FELICIDADES!\n😎GANASTE EL JUEGO😎"
            }

            if (puntosPC === 5){
                instrucciones.innerText = "¡PERDISTE!\n🤖COMPUTADORA GANA EL JUEGO🤖"
            }
        }

        reiniciar.classList.remove("disabled")
        reiniciar.addEventListener("click, reiniciarJuego");
}


function ganaUsuario(){
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Genial, ganaste un punto! ✨"
}

function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡Ouch, la computadora gana un punto! 🤖"
}

function empate(){
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reiniciarJuego(){
    puntosPC = 0;
    puntosUsuario = 0;

    contenedorPuntosPC.innerText = puntosPC;
    contenedorPuntosUsuario.innerText = puntosUsuario;

    instrucciones.innerText = "¡Genial, juguemos otra vez!\n 🦾El primero en llegar a cinco gana.🦾"
}



/* elegiTuArma.style.display ="none" 

/* mensaje.style.display ="none" */
