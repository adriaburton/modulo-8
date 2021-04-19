var nombre = { A: "2", D: "1", R: "1", I: "1", N: "1" };

console.log(nombre);

let letras = Object.entries(nombre);

document.getElementById("result").innerHTML = letras;
