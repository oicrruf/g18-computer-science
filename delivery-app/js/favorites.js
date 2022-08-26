const favoritos = favoriteStorage === null ? [] : JSON.parse(favoriteStorage);

const anadirFavorito = (e) => {
  let { id } = e.target; // <- e.target.id

  if (favoritos.indexOf(id) === -1) {
    favoritos.push(id);
    localStorage.setItem("@favoritos", JSON.stringify(favoritos));
  }
};

// window.addEventListener("load", cargarFavoritos);

btnFavorites.addEventListener("click", anadirFavorito);
