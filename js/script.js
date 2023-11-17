
let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colore = prompt("Inserisci il tuo colore preferito");

let benvenuto = `Ciao ${nome} ${cognome} ${colore} 23`;

document.getElementById("ciao").innerHTML = benvenuto

console.log(benvenuto);