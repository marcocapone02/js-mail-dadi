/*

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

let result = document.getElementById("result")

let btn = document.getElementById("btn")

btn.addEventListener("click",
    function() {
const user = Math.ceil(Math.random() * 6);
const computer = Math.ceil(Math.random() * 6);

console.log(user, computer);
let message;
if(user > computer){
  document.getElementById(`result`).innerHTML = `<p>Tu: ${user} <br> Ospite:  ${computer}<br> HAI VINTO!&#128515;</p>`
}else if(user < computer){
  document.getElementById(`result`).innerHTML = `<p>Tu: ${user} <br> Ospite:  ${computer}<br> HAI PERSO&#128546;</p>`
}else{
  document.getElementById(`result`).innerHTML = `<p>Tu: ${user} <br> Ospite:  ${computer}<br> PAREGGIO&#128588;</p>`
}
}
)