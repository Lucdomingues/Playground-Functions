// Desafio 1

function compareTrue(girafa, elefante) {
  let value = 0;
  if (girafa === true && elefante === true) {
    value = true;
  } else if (girafa !== true || elefante !== true) {
    value = false;
  }
  return value;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSplit = frase.split(' ');
  return fraseSplit;
}

// Desafio 4

function concatName(nomes) {
  let primeiroElemento = nomes[0];
  let ultimoElemento = nomes[nomes.length - 1];
  let concatenacao = `${ultimoElemento}, ${primeiroElemento}`;
  return concatenacao;
}

// Desafio 5

function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let totalDePontos = vitoria + ties;
  return totalDePontos;
}

// Desafio 6
function highestCount(numeros) {
  let contador = 0;
  let maiorNumero = Math.max.apply(null, numeros);
  for (let índice = 0; índice < numeros.length; índice += 1) {
    if (maiorNumero === numeros[índice]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let ga1 = Math.abs(cat1 - mouse);
  let ga2 = Math.abs(cat2 - mouse);
  let result = 0;
  if (ga1 < ga2) {
    result = 'cat1';
  } else if (ga2 < ga1) {
    result = 'cat2';
  } else if (ga1 === mouse && ga2 === mouse) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let arr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
      arr.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      arr.push('buzz');
    } else if (array[i] % 3 === 0) {
      arr.push('fizz');
    } else {
      arr.push('bug!');
    }
  }
  return arr;
}
// Desafio 9
function encode(frase) {
  frase = frase.replaceAll('a', 1);
  frase = frase.replaceAll('e', 2);
  frase = frase.replaceAll('i', 3);
  frase = frase.replaceAll('o', 4);
  frase = frase.replaceAll('u', 5);
  return frase;
}
function decode(codFrase) {
  codFrase = codFrase.replaceAll(1, 'a');
  codFrase = codFrase.replaceAll(2, 'e');
  codFrase = codFrase.replaceAll(3, 'i');
  codFrase = codFrase.replaceAll(4, 'o');
  codFrase = codFrase.replaceAll(5, 'u');
  return codFrase;
}
decode('h3 th2r2');
console.log(decode('h3 th2r2'));
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
