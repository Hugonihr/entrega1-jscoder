let frutasDisponibles = ["manzana", "banana", "naranja", "uva", "kiwi"];
function buscarFruta(frutaBuscada, listaFrutas) {
    for (let i = 0; i < listaFrutas.length; i++) {
        if (listaFrutas[i] === frutaBuscada.toLowerCase()) {
            return true;
        }
    }
    return false;
}
function mostrarFrutasDisponibles(listaFrutas) {
    alert("Frutas disponibles: \n" + listaFrutas.join(", "));
}
function agregarFruta(frutaNueva) {
    if (frutaNueva && !buscarFruta(frutaNueva, frutasDisponibles)) {
        frutasDisponibles.push(frutaNueva.toLowerCase());
        alert("Fruta agregada: " + frutaNueva);
    } else if (buscarFruta(frutaNueva, frutasDisponibles)) {
        alert("Esa fruta ya está en la lista.");
    } else {
        alert("No ingresaste una fruta válida.");
    }
}
let deseaBuscar = confirm("¿Deseas buscar una fruta en nuestra lista?");
while (deseaBuscar) {
    mostrarFrutasDisponibles(frutasDisponibles);
    let frutaIngresada = prompt("Ingresa el nombre de una fruta para buscar:");
    if (frutaIngresada) {
        let estaDisponible = buscarFruta(frutaIngresada, frutasDisponibles);
        if (estaDisponible) {
            alert("¡Sí! Tenemos " + frutaIngresada + " disponible.");
        } else {
            alert("Lo siento, no tenemos " + frutaIngresada + ".");

            let deseaAgregar = confirm("¿Quieres agregar esta fruta a la lista?");
            if (deseaAgregar) {
                agregarFruta(frutaIngresada);
            }
        }
    } else {
        alert("No ingresaste ninguna fruta.");
    }
    deseaBuscar = confirm("¿Quieres buscar otra fruta?");
}
console.log("Gracias por usar el buscador de frutas");