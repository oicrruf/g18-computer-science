const btnPila = document.querySelector("#pila");
const resultados = document.querySelector("#resultados");

let arreglo = [...pokemon];

let agregar = (evt) => {
  evt.preventDefault();
  //console.log(evt.target);
  const { nombre, numero, foto, peso } = evt.target;
  let pokemon = {
    nombre: nombre.value,
    numero: numero.value,
    foto: foto.value,
    peso: peso.value,
  };

  arreglo.push(pokemon);
  evt.target.reset(); // Es lo mismo que esto:
  //document.querySelector("#formulario").reset()
  dibujar();
  //console.log(`Nombre: ${pokemon.nombre} con Numero: ${pokemon.numero} se ha agreado a la lista`);
};

let dibujar = () => {
  document.querySelector("#resultados").innerHTML = "";
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

  for (let i in arreglo) {
    let pokemon = arreglo[i];
    let card = `<article class="media has-background-white p-3">
            <figure class="media-left">
            <p class="image is-64x64">
                <img src="${pokemon.foto}">
            </p>
            </figure>
            <div class="media-content">
            <div class="content">
                <h4 class="mb-2"><strong>${pokemon.nombre}</strong> <small>${pokemon.numero}</small></h4>
                <p>${pokemon.peso} kg</p>
                <button id="${i}" class="button is-success is-small" >Eliminar</button>
            </div>
            </div>
        </article>`;

    document.querySelector("#resultados").innerHTML += card;
  }
};

function agregar_old(evt) {
  evt.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let numero = document.querySelector("#numero").value;
  let foto = document.querySelector("#foto").value;
  let peso = parseFloat(document.querySelector("#peso").value);

  let pokemon = {
    nombre: nombre,
    numero: numero,
    foto: foto,
    peso: peso,
  };

  /* Esto tambien funciona
    let pokemon = {
        nombre,
        numero,
        foto,
        peso
    };*/

  console.log(
    `Nombre: ${pokemon.nombre} con Numero: ${pokemon.numero} se ha agreado a la lista`
  );
}

const eliminarPila = () => {
  arreglo.shift();
  dibujar();
};

const deletePokemon = (e) => {
  let id = e.target.getAttribute("id");
  // if(id !== null) {
  //   console.log(id);
  // }
  // id ? console.log(id): console.log('No tiene id');
  id && console.log(id);
};

document.querySelector("#formulario").addEventListener("submit", agregar);

btnPila.addEventListener("click", eliminarPila);
resultados.addEventListener("click", deletePokemon);

document.addEventListener("load", dibujar());
