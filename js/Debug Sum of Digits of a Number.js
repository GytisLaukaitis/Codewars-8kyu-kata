"use strict";


function getSumOfDigits(integer) {
    let sum = 0;
    let digits = (integer).toString();
    for(let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
    return sum;
  }



  console.log(getSumOfDigits(123), 6);