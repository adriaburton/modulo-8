var nombre = ["A", "D", "R", "3", "I", "A", "N"];
var regVocales = /[aeiou]/i;
var regNumeros = /[0-9]/;
var nombreCompleto = "ADRIAN";
console.log("Partimos del nombre " + nombreCompleto);
for (var i = 0; i < nombre.length; i++) {
  console.log;
  if (regVocales.test(nombre[i])) {
    console.log("He encontrado la VOCAL: " + nombre[i]);
  } else if (regNumeros.test(nombre[i])) {
    console.log("Los nombres de persona no contienen numero: " + nombre[i]);
  } else {
    console.log("He encontrado la CONSONANTE: " + nombre[i]);
  }
}
