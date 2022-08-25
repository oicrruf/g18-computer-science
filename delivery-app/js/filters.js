let buscar = (evt) => {
  //evt.preventDefault();
  let name = document.querySelector("#inputBusqueda").value.toLowerCase();
  let filtrados = restaurants.filter((restaurant) => {
    //let restaurant_minus= restaurant.businessname.toLowerCase()
    return restaurant.businessname.toLowerCase().includes(name);
  });
  render(filtrados);
};

let buscarCategoria = (category) => {
  let filtro = restaurants.filter((restaurant) => {
    return restaurant.restauranttype == category;
  });
  render(filtro);
};

let reviews = () =>{
  let filtro = restaurants.filter((restaurant) => {
    return restaurant.reviews>=50;
  });
  render(filtro);
}

//document.querySelector("#busqueda").addEventListener("submit", buscar);
document.querySelector("#busqueda button").addEventListener("click", buscar);
// keydown, keyup, keypress
document.querySelector("#inputBusqueda").addEventListener("keyup", buscar);

document.querySelector("#eatery").addEventListener("click", function () {
  buscarCategoria("eatery");
});

document
  .querySelector("#japanese")
  .addEventListener("click", () => buscarCategoria("japanese"));

document
  .querySelector("#canteen")
  .addEventListener("click", () => buscarCategoria("canteen"));

document
  .querySelector("#bukka")
  .addEventListener("click", () => buscarCategoria("bukka"));

document.querySelector("#todos").addEventListener("click", function () {
  render(restaurants);
});

document.querySelector("#fifty").addEventListener("click",reviews)

document.querySelector("#alfabeto").addEventListener("click",()=>{
  restaurants.sort(function(a,b){
    return a.businessname > b.businessname ? 1 : -1;
    /* El operador ? significa:
    if(a.businessname > b.businessname)
        return 1;
    else
        return -1;*/
  });
  render(restaurants);
})

document.querySelector("#popular").addEventListener("click",()=>{
  restaurants.sort((a,b)=>a.reviews<b.reviews?1:-1);
  render(restaurants);
});
