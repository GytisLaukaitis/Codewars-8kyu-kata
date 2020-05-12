"use strict"

function noBoringZeros(n) {
    let str = n.toString()
    let arr = str.split('')
    if (arr[0] === '0'){
      return parseInt(arr.join(''))
    }
    for (let i = arr.length-1; i > 0; i--){
      if (arr[i] === '0' ){
        arr.splice(i,1)
      } else {
        return parseInt(arr.join(''))
      }
    }
  }