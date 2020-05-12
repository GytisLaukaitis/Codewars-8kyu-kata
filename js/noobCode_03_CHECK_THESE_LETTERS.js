"use strict"

function letterCheck(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
      let x = false;
      for ( let i = 0 ; i < arr[1].length; i++){
         x = false;
        for ( let j = 0; j < arr[0].length; j++) {
          if (arr[0][j] == arr[1][i]){
            x = true;
            break;
          }
        }if ( !x ){
        return x;}
      }
      return x;
    }