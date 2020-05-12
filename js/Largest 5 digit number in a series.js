"use strict"

function solution(digits){
    let arr = (digits);
      let largest = parseInt(arr.slice(0,5));
      for (var i = 1; i < arr.length; i++) {
      if (arr.slice(i,i+5) > largest) {
          largest = parseInt(arr.slice(i,i+5));
        }
      }
        return largest;
    }