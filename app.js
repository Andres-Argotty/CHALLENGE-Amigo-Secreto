// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Como buena práctica es necesario poner las variables arriba.

const inputAmigo=document.getElementById("amigo");
const listaAmigos=[]; // Array vacío para guardar los amigos.
const ulListaAmigos=document.getElementById("listaAmigos"); // Con esto vamos a mostrar la lista de amigos.
const ulResultado= document.getElementById("resultado"); 


function agregarAmigo() {

    if (!inputAmigo.value) {
        alert("Debes ingresar un nombre de amigo")
    }else{
        listaAmigos.push(inputAmigo.value);
        console.log(listaAmigos)

        ulListaAmigos.innerHTML+= `<li>${inputAmigo.value}</li>`
        // InnerHTML es una propiedad que permite obtener el contenido HTML de un elemento.
        // InnnerHTML funciona asignando un valor a la propiedad, se puede insertar texto, etiquetas HTML, etc.
        // Por ejemplo; ulListaAmigos.innerHTML+= `<li> Lista de amigos </li>`
    }
    limpiarCampos()
    return;
}

// La función limpiarCampo, limpia el input cuadno se ejecuta.

function limpiarCampos() {
    return inputAmigo.value="";
}

function sortearAmigo() {
    // numero aleatorio que sirve para hacer el sorteo
    let numeroAleatorio= Math.floor(Math.random()*listaAmigos.length)
    const amigoSecreto= listaAmigos[numeroAleatorio];
    ulResultado.textContent="El amigo secreto es: "+ amigoSecreto    //Inyectamos solamente texto, con innerHTML podemos usar etiquetas HTML 
    return;
}





// Intento de función para mostrar los amigos en la lista :(
// function mostrarAmigos() {
//     for (let i = 0; i < listaAmigos.length; i++) {

//         let mostrarAmigos=document.createElement("li");
//         mostrarAmigos.textContent= listaAmigos[i];
//         ulListaAmigos.appendChild(mostrarAmigos);

//         console.log(listaAmigos[i])

//     }

//     return;
    
// }