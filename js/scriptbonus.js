var MioNome = prompt("Inserisci il tuo Nome: ");


while (MioNome == "") {
  alert("Devi Inserire il tuo Nome, non può rimanere vuoto!");
  var MioNome = prompt("Inserisci il tuo Nome: ");
}

var MioCognome = prompt("Inserisci il tuo Cognome: ");

while ( MioCognome == "") {
  alert("Devi Inserire il tuo Cognome, non può rimanere vuoto!");
  var MioCognome = prompt("Inserisci il tuo Cognome: ");
}

var MioColore = prompt("Inserisci il tuo colore preferito: ");

while ( MioColore == "") {
  alert("Devi Inserire il tuo colore preferito, non può rimanere vuoto!");
  var MioColore = prompt("Inserisci il tuo colore preferito: ");
}
document.getElementById("password-gen").innerHTML =(MioNome + MioCognome + MioColore + 19);
