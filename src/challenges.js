// Desafio 1
function compareTrue(fofoca1, fofoca2) {
  let resultado = fofoca1 && fofoca2;
  
  if(fofoca1 === true && fofoca2 === true){
    console.log(true);
  } else {
    console.log(false);
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height;

  return area / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");

  return array;
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
