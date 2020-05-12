"use strict"

function multiplyAndFilter(array, multiplier){
    let naujas =[];
    for ( let i = 0; i<array.length; i++) {
    if (typeof array[i] == "number") {
    naujas.push(array[i] * multiplier);
    }
    }
   return naujas;
  } 