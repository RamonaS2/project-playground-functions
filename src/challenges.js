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
function fizzBuzz(array) {
  // / 3 = "fizz"
  // / 5 = 'buzz'
  // / 3 && 5 = 'fizzbuzz'
  // se n for / 3 e 5 = 'bug!'
let arrNum = [];

  for(let i = 0; i <= array.length; i += 1){
    if(array[i] %3 === 0){
      arrNum.push("fizz", );
    } else if(array[i] %5 === 0){
      arrNum.push("buzz", );
    } else if (array[i] %3 === 0 && array[i] %5 === 0){
      arrNum.push("fizzbuzz", );
    } else if (array[i] %3 !== 0 && array[i] %5 !== 0){
      arrNum.push("bug!");
    }
  }
  return arrNum;
}

// Desafio 9
function encode(string) {

for(index = 0; index <= string.length; index += 1){
  if (string[index] === 'a'){
    string = string.replace(/a/g, "1");
    
  } else if (string[index] === 'e'){
    string = string.replace(/e/g, "2");
    
  } else if(string[index] === 'i'){
    string = string.replace(/i/g, "3");
    
  } else if (string[index] === 'o'){
   string = string.replace(/o/g, "4");
  
  }else if (string[index] === 'u'){
    string = string.replace(/u/g, "5");
    
  } 
}
return string;
}
function decode(string){
  for (let i = 0; i <= string.length; i +=1){
    if(string[i] === '1'){
      string = string.replace(/1/g, 'a');
    } else if(string[i] === '2'){
      string = string.replace(/2/g, 'e');
    } else if (string[i] === '3'){
      string = string.replace(/3/g, 'i');
    } else if(string[i] === '4'){
      string = string.replace(/4/g, 'o');
    } else if(string[i] === '5'){
      string = string.replace(/5/g, 'u');
    }
  }
  return string; 
}

// Desafio 10
function techList() {
  // seu c??digo aqui
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
