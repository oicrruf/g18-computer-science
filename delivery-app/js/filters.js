let buscar = (evt) => {
  //evt.preventDefault();
  let name = document.querySelector("#inputBusqueda").value.toLowerCase();
  let filtrados = restaurants.filter((restaurant) => {
    //let restaurant_minus= restaurant.businessname.toLowerCase()
    return restaurant.businessname.toLowerCase().includes(name);
  });
  render(filtrados);
};

let buscarCategoria = (type) => {

  let filtro = restaurants.filter((restaurant) => {
    return restaurant.restauranttype == type;
  });


  render(filtro);
};



//document.querySelector("#busqueda").addEventListener("submit", buscar);
document.querySelector("#busqueda button").addEventListener("click", buscar);
// keydown, keyup, keypress
document.querySelector("#inputBusqueda").addEventListener("keyup", buscar);

document
  .querySelector("#eatery")
  .addEventListener("click", () => buscarCategoria("eatery"));
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
