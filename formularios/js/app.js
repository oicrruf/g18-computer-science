function agregar_old(evt){
    evt.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let numero = document.querySelector("#numero").value;
    let foto = document.querySelector("#foto").value;
    let peso = parseFloat(document.querySelector("#peso").value);

    let pokemon = {
        nombre: nombre,
        numero: numero,
        foto: foto,
        peso: peso
    };

    /* Esto tambien funciona
    let pokemon = {
        nombre,
        numero,
        foto,
        peso
    };*/

    console.log(`Nombre: ${pokemon.nombre} con Numero: ${pokemon.numero} se ha agreado a la lista`);
}


let agregar2 = (evt) => {
    evt.preventDefault();
    //console.log(evt.target);  
    const {nombre, numero, foto, peso} = evt.target;
    let pokemon ={
        "nombre": nombre.value,
        "numero": numero.value,
        "foto": foto.value,
        "peso": peso.value
    };
    console.log(`Nombre: ${pokemon.nombre} con Numero: ${pokemon.numero} se ha agreado a la lista`);
}

document.querySelector("#formulario").addEventListener("submit",agregar);


