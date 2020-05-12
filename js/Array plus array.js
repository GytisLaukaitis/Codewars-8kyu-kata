"use strict"

function arrayPlusArray(arr1, arr2) {
    let total = 0;
    for (let i = 0; i < arr1.length; i++) {
       total += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
      total += arr2[j];
    }
      return total;
    }