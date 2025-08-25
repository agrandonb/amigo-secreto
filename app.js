let nombresAmigos = [];
let textoPrincipal = document.querySelector("h2");
let lista = document.getElementById("listaAmigos");


function condicionInicial() {
    textoPrincipal;
    document.getElementById("amigo").value = "";
}

function agregarAmigo() {
        let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        textoPrincipal.innerText = "Por favor, inserte un nombre";
    } else {
        nombresAmigos.push(nombre);
        textoPrincipal.innerText = "Amigo agregado correctamente";
        actualizarLista();
        condicionInicial();
    }
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
        
    for (let n = 0;n < nombresAmigos.length; n++) {
        let li = document.createElement("li");
        li.textContent = nombresAmigos[n];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let nombreAleatorio = nombresAmigos[indiceAleatorio]
    
    if (nombresAmigos.length === 0) {
        document.getElementById("resultado").disabled = true;
        textoPrincipal.innerText = "No hay amigos ingresados";
    } else {
        document.getElementById("resultado").disabled = false;
        nombreAleatorio;
        textoPrincipal.innerHTML = `Tu amigo/a secreto/a es ${nombreAleatorio}`;
    }
}
