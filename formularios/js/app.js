let arreglo = [];

let agregar = (evt) => {
    evt.preventDefault();
    //console.log(evt.target);  
    const {nombre, numero, foto, peso} = evt.target;
    let pokemon ={
        "nombre": nombre.value,
        "numero": numero.value,
        "foto": foto.value,
        "peso": peso.value
    };

    arreglo.push(pokemon)
    evt.target.reset() // Es lo mismo que esto:     
    //document.querySelector("#formulario").reset()
    dibujar();
    //console.log(`Nombre: ${pokemon.nombre} con Numero: ${pokemon.numero} se ha agreado a la lista`);
}

let dibujar = () =>{

    document.querySelector("#resultados").innerHTML="";
    /*
    for(let i=0 ; i<arreglo.length ; i++){
        console.log(arreglo[i].nombre);
    }

    arreglo.forEach(function(element){
        console.log(element.nombre);
    })
    
    for(let element of arreglo){
        console.log(element.nombre);
    }*/

    for(let i in arreglo){
        let pokemon = arreglo[i];
        let media =document.createElement("article");
        media.classList.add("media", "has-background-white", "p-3");

        let card = `
            <figure class="media-left">
            <p class="image is-64x64">
                <img src="${pokemon.foto}">
            </p>
            </figure>
            <div class="media-content">
            <div class="content">
                <h4 class="mb-2"><strong>${pokemon.nombre}</strong> <small>${pokemon.numero}</small></h4>
                <p>${pokemon.peso} kg</p>
            </div>
            </div>
        `;

        media.innerHTML= card;

        document.querySelector("#resultados").append(media);
    }    

}

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



document.querySelector("#formulario").addEventListener("submit",agregar);


