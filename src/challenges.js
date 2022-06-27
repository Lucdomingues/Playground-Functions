// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;
function compareTrue(girafa, elefante, macaco) {
  if (girafa === true && elefante === true) {
    return true;
  } else if (girafa === false && elefante === true) {
    return false;
  } else if (girafa === false && elefante === false) {
    return false;
  } else if (girafa === true && elefante === false) {
    return false;
  }
}
compareTrue();
// Desafio 2
const base = 51;
const height = 1;
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
}
calcArea(base, height);
// Desafio 3
const frase = 'foguete';
function splitSentence(frase) {
  fraseSplit = frase.split(' ');
  return fraseSplit;
}
splitSentence(frase);
// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
