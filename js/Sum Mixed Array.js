"use strict"

function sumMix(x){
    let total = 0;
    for(let i = 0; i < x.length; i++){
      total += parseInt(x[i]);
    }
    return total;
  }