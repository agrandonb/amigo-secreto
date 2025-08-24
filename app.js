let nombresAmigos = [];
let textoPrincipal = document.querySelector("h2");
let lista = document.getElementById("listaAmigos");

function condicionInicial() {
    textoPrincipal;
    document.getElementById("amigo").value = "";
}

function agregarAmigos() {
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

function actualizarLista () {
    listaAmigos.innerHTML = "";
        
      for (let i = 0; i < nombresAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombresAmigos[i];
        lista.appendChild(li);
    }
}

