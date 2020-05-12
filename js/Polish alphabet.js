"use strict"

function correctPolishLetters (string) {
    let splitStr = string.split('');
     answer = [];
     for (let i = 0; i < string.length; i++) {
       if(splitStr[i] === 'ą'){
         answer.push('a');
       } else if (splitStr[i] === 'ć'){
         answer.push('c');
       } else if (splitStr[i] === 'ę'){
         answer.push('e');
       } else if (splitStr[i] === 'ł'){
         answer.push('l');
       } else if (splitStr[i] === 'ń'){
         answer.push('n');
       } else if (splitStr[i] === 'ó'){
         answer.push('o');
       } else if (splitStr[i] === 'ś'){
         answer.push('s');
       } else if (splitStr[i] === 'ź'){
         answer.push('z');
       } else if (splitStr[i] === 'ż'){
         answer.push('z');
       } else {
       answer.push(splitStr[i])
       }
     }
     return answer.join('');
   }