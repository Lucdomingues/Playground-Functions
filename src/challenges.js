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
const nomes = ['captain', 'my', 'captain'];
function concatName(nomes) {
  primeiroElemento = nomes[0];
  ultimoElemento = nomes[nomes.length - 1];
  concatenacao = ultimoElemento + ', ' + primeiroElemento;
  return concatenacao;
}
concatName(nomes);
// Desafio 5
const wins = 1;
const ties = 2;
function footballPoints(wins, ties) {
  vitoria = wins * 3;
  totalDePontos = vitoria + ties;
  return totalDePontos;
}
footballPoints(wins, ties);
// Desafio 6
const numeros = [9, 1, 2, 3, 9, 5, 7];
function highestCount(numeros) {
  let contador = 0;
  maiorNumero = Math.max.apply(null, numeros);
  for (index = 0; index < numeros.length; index += 1) {
    if (maiorNumero == numeros[index]) {
      contador += 1;
    }
  }
  return contador;
}
highestCount(numeros);
console.log(highestCount(numeros));
// Desafio 7
const mouse = 0;
const cat1 = 0;
const cat2 = 0;
function catAndMouse(mouse, cat1, cat2) {}

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
