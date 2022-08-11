let n;
let resultado;

function calcular(){

    n = parseInt(document.querySelector("#numero").value);
    let r = document.querySelector("#resultados");

    for(let i=1; i<=n; i++){
        if(i % 2 == 0){
            r.innerHTML += '<div class="alert alert-warning">'+i+' es par</div>';
        }else{
            r.innerHTML += '<div class="alert alert-danger">'+i+' es impar</div>';
        }
    }
}

function reiniciar(){
    document.querySelector("#resultados").innerHTML = "";
    return true;
}

let button_reiniciar = document.querySelector("#button-reiniciar");
let button_enviar = document.querySelector("#button-enviar");

button_reiniciar.addEventListener("click",reiniciar)
button_enviar.addEventListener("click",calcular);

