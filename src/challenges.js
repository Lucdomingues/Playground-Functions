// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(girafa, elefante, macaco) {
  if (girafa == true && elefante == true) {
    return true;
  } else if (girafa == false && elefante == true) {
    return false;
  } else if (girafa == false && elefante == false) {
    return false;
  } else if (girafa == true && elefante == false) {
    return false;
  } else if (elefante == true && macaco == true) {
    return true;
  } else if (elefante == false && macaco == true) {
    return false;
  } else if (elefante == false && macaco == false) {
    return false;
  } else if (elefante == true && macaco == false) {
    return false;
  } else if (girafa == true && macaco == true) {
    return true;
  } else if (girafa == false && macaco == true) {
    return false;
  } else if (girafa == false && macaco == false) {
    return false;
  } else if (girafa == true && macaco == false) {
    return false;
  }
}
compareTrue(girafa, elefante, macaco);
console.log(compareTrue(girafa, macaco));

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

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
