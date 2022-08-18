let elefantes;

fetch("js/elephants.json")
  .then(response => response.json())
  .then((data) => {
    elefantes = data;
    dibujar();
});

let dibujar = () => {

    document.querySelector("#resultados").innerHTML="";

    for(let i in elefantes){
        console.log(elefantes[i]);

        let col = document.createElement("div");
        col.classList.add("col","col-lg-3");

        let card = document.createElement("div");
        card.classList.add("card","mt-5");

        let img = document.createElement("img")
        img.src=elefantes[i].image;
        img.classList.add("card-img-top");

        card.append(img);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let h5 = document.createElement("h5");
        h5.classList.add("card-title")
        h5.innerHTML=elefantes[i].name;
        cardBody.append(h5);

        let a = document.createElement("a");
        a.setAttribute("href","#")
        a.classList.add("btn","btn-primary");
        a.innerHTML="Ver Perfil";
        a.setAttribute("data-note",elefantes[i].note);
        a.dataset.name=elefantes[i].name;

        a.addEventListener("click",function(evt){
            evt.preventDefault();
            alert(`${evt.target.dataset.name}: ${evt.target.dataset.note}`);
        });


        cardBody.append(a);

        card.append(cardBody)
        col.append(card);

        document.querySelector("#resultados").append(col);


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