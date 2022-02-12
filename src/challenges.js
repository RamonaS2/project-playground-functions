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
function concatName(array) {
  
  let primeiraArray = array[0];
  let ultimaArray = array[array.length-1] + ", ";
  let resultado = ultimaArray.concat(primeiraArray);

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoriaPontos = wins * 3;
     let pontos = ties + vitoriaPontos;

     return pontos;
}

// Desafio 6

function highestCount(numeros) {
  let maiorNum = Math.max(...numeros);
  maiorNum;
  let resultado = 0;

  for(let i = 0; i <= numeros.length; i += 1){
    if (numeros[i] === maiorNum){
      resultado = resultado + 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = 0;
  let scat1 = Math.abs(mouse - cat1);
  let scat2 = Math.abs(mouse - cat2); 
  
  
  if(scat1 < scat2){
    resultado = "cat1";
  } else if(scat2 < scat1){
   resultado = "cat2";
  } else if (scat1 === scat2){
    resultado = "os gatos trombam e o rato foge";
  }
  return resultado;
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
