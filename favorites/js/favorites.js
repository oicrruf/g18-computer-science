let favorites = [];
let favoritesStorage = localStorage.getItem("@favorites");

if (favoritesStorage) {
  favorites = JSON.parse(favoritesStorage);
}

const saveFavorites = (event) => {
  let button = event.target;

  if (button.getAttribute("data-type") === "favorites") {
    let id = button.getAttribute("id");

    favorites.push(id);
    button.innerText = "❤️";

    localStorage.setItem("@favorites", JSON.stringify(favorites));
  }
};

const reloadFavorites = () => {
  let storage = JSON.parse(favoritesStorage);
  let buttons = Array.from(
    document.querySelectorAll('[data-type*="favorites"]')
  );

  buttons.forEach((button, i) => {
    storage.forEach((s) => {
      if (buttons[i].getAttribute("id") == s) {
        button.innerText = "❤️";
      }
    });
  });
};

resultados.addEventListener("click", saveFavorites);
reloadFavorites()

// const removeFavorites = () => {
//   let storage = JSON.parse(favoritesStorage);
//   let buttons = Array.from(
//     document.querySelectorAll(".button.is-block.is-small.is-pulled-right")
//   );

//   buttons.forEach((button, i) => {
//     storage.forEach((s) => {
//       if (buttons[i].getAttribute("id") == storage.indexOf(s)) {
//         button.innerText = "❤️";
//       }
//     });
//   });
// };