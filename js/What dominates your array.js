"use strict"

function dominator (arr) {
    const naujas = {};
  
    for (let i = 0; i < arr.length; i++) {
      naujas[arr[i]] = naujas[arr[i]] ? naujas[arr[i]] + 1: 1;
      if (naujas[arr[i]] > arr.length / 2) return arr[i];
    }
    return -1;
  }