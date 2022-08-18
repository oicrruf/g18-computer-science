let elefantes;

fetch("js/elephants.json")
  .then(response => response.json())
  .then((data) => {
    elefantes = data;
    dibujar();
});

let dibujar = ()=>{
    for(let i in elefantes){
        console.log(elefantes[i].name);

        let col = document.createElement("div");

        /*
        <div class="col col-lg-3">
            <div class="card">
                <img src="https://elephant-api.herokuapp.com/pictures/missing.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Balarama</h5>
                  <a href="#" class="btn btn-primary">Ver perfil</a>
                </div>
              </div>
          </div>*/


    }
}