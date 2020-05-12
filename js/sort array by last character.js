"use strict"

function sortMe(arr) {
    let arr2 = arr.slice(0);
    return arr.sort(function(a,b){ return a.toString().slice(-1) < b.toString().slice(-1) ? -1 : (a.toString().slice(-1) === b.toString().slice(-1) ?  arr2.indexOf(a) - arr2.indexOf(b) : 1)});
  }