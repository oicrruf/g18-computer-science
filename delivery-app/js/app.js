let restaurants=[];

fetch("https://foodbukka.herokuapp.com/api/v1/restaurant")
.then((response)=>response.json())
.then((data)=>{
    restaurants=data.Result;
    render(restaurants);
});


let render = (restaurantsArr) => {

    document.querySelector("#results").innerHTML="";

    for(let i in restaurantsArr){

        let col = document.createElement("div");
        col.classList.add("column", "is-4-desktop", "is-6-tablet");

        let card=document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id",restaurantsArr[i].id);

        card.innerHTML=`<div class="card-image">
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
                            <span class="icon has-text-success"><i class="mdi mdi-star mdi-18px"></i></span> 
                            <span>${restaurantsArr[i].reviews}</span>
                        </span>
                    </div>
                </div>
            </div>`;

        col.append(card);
        document.querySelector("#results").append(col);

    }
}


