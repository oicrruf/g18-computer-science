const modal = document.querySelector("#modal");
const rName = document.querySelector("#restaurant-name");
const rAddress = document.querySelector("#restaurant-address");
const rPhone = document.querySelector("#restaurant-phone");
const rImage = document.querySelector("#restaurant-image");
const btnFavorites = document.querySelector("#restaurant-add-favorites");
const favoriteStorage = localStorage.getItem("@favoritos");
let restaurants = [];

const cargarFavoritos = () => {
  // console.log(JSON.parse(favoriteStorage));

  // let favoritoIcono = document.querySelectorAll("[data-favorite]")
  let favoritoIcono = document.querySelectorAll(".mdi.mdi-star.mdi-18px");
  let starsArray = Array.from(favoritoIcono);
  
  starsArray.forEach((elem) => {
    if (favoriteStorage.indexOf(elem.getAttribute("data-favorite")) !== -1) {
      elem.classList.toggle("is-invisible");
    }
  });
};

let render = (restaurantsArr) => {
  document.querySelector("#results").innerHTML = "";

  for (let i in restaurantsArr) {
    let col = document.createElement("div");
    col.classList.add("column", "is-4-desktop", "is-6-tablet");

    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", restaurantsArr[i].id);

    card.innerHTML = `<div class="card-image" >
                <figure class="image is-16by9">
                    <img src="${restaurantsArr[i].image}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <span class="tag is-danger">${restaurantsArr[i].restauranttype}</span>
                <div class="is-flex is-justify-content-space-between is-align-items-center">
                    <div class="content mb-0">
                        <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${restaurantsArr[i].businessname}</p>
                        <p class="mb-0 is-size-7">${restaurantsArr[i].location}</p>
                    </div>
                    <div class="ranking has-text-right">
                        <span class="icon-text">
                            <span  class="icon has-text-success">
                            <i data-favorite="${restaurantsArr[i].id}" class="mdi mdi-star mdi-18px is-invisible"></i>
                            </span> 
                            <span>${restaurantsArr[i].reviews}</span>
                        </span>
                    </div>
                </div>
            </div>
            `;

    card.addEventListener("click", () => mostrarModal(card.dataset.id));

    col.append(card);
    document.querySelector("#results").append(col);
  }

  cargarFavoritos();
};

// canteen, bukka, japanese, eatery

const llenarModal = (restaurant) => {
  // https://foodbukka.herokuapp.com/api/v1/restaurant/62f7182f4a757000045561cf

  const { businessname, address, phone, image } = restaurant.data;

  rName.innerText = businessname;
  rAddress.innerText = address;
  rPhone.innerText = phone;
  rImage.setAttribute("src", image);
};

const mostrarModal = (id) => {
  // modal.classList.add('mi-clase-3')
  // modal.classList.remove('mi-clase-1')

  rName.innerText = "";
  rAddress.innerText = "";
  rPhone.innerText = "";
  btnFavorites.setAttribute("id", id);

  modal.classList.toggle("is-active");
  // document.querySelector("#restaurant-name").innerText = name;

  if (id !== undefined) {
    fetch(`https://foodbukka.herokuapp.com/api/v1/restaurant/${id}`)
      .then((response) => response.json())
      .then((data) => {
        llenarModal(data);
      });
  }
};

// const coffeeWhitSugar = ()=> {}
// const cafeConAzucar = ()=> {}

// Todos los restaurantes
fetch("https://foodbukka.herokuapp.com/api/v1/restaurant")
  .then((response) => response.json())
  .then((data) => {
    restaurants = data.Result;

    render(restaurants);
  });
