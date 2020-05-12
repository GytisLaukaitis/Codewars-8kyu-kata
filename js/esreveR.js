"use strict"

reverse = function(array) {
    let naujas = [];
    for (let i = array.length - 1; i >= 0; i--) {
      naujas.push(array[i]);
    }
    return naujas;
  }