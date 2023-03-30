/*

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

1. Creo una lista di email

2. Con il prompt faccio inserire la email e la salvo in una const

3. Verificare se è presente in elenco(ciclo l'elenco e controllo gli elementi)

4. Se presente effettuare l'accesso

*/


function check(){
  let emailVerify = document.getElementById(`emailVerify`).value;

  let email = [
      `mario@email.com`,
      `giovanni@email.com`,
      `luca@email.com`,
      `marco@email.com`,
      `luigi@email.com`,
  ]

  let listaEmail = false;

  for(let n = 0; n < email.length; n++){
      if(email[n]==emailVerify){
        listaEmail = true;
      }
  }

  if(listaEmail==true){
      document.getElementById(`access`).innerHTML = `<p>Accesso consentito</p>`
  } else{
      document.getElementById(`access`).innerHTML = `<p>Accesso negato</p>`
  }
}
