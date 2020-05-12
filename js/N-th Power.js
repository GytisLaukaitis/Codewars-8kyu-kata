"use strict"

function index(array, n){
    if (array.length-1-n<0) return -1
    return Math.pow(array[n],n)
  }