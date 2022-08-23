
let buscar = (evt) => {
    //evt.preventDefault();
    let name = document.querySelector("#inputBusqueda").value.toLowerCase();
    let filtrados =restaurants.filter((restaurant)=>{
        //let restaurant_minus= restaurant.businessname.toLowerCase()
        return restaurant.businessname.toLowerCase().includes(name);
    });
    render(filtrados);
} 

let buscarCategoria = ()=>{
    let filtro = restaurants.filter((restaurant)=>{
        return restaurant.restauranttype == "eatery"
    });
    render(filtro);
}

let buscarCategoria2 = ()=>{
    let filtro = restaurants.filter((restaurant)=>{
        return restaurant.restauranttype == "japanese"
    });
    render(filtro);
}


//document.querySelector("#busqueda").addEventListener("submit", buscar);
document.querySelector("#busqueda button").addEventListener("click", buscar);
// keydown, keyup, keypress
document.querySelector("#inputBusqueda").addEventListener("keyup",buscar)
document.querySelector("#eatery").addEventListener("click",buscarCategoria);
document.querySelector("#japanese").addEventListener("click",buscarCategoria2);
document.querySelector("#todos").addEventListener("click",function(){
    render(restaurants);
});