"use strict";


function sumOfMinimums(arr) {
   let naujas = 0;
   for ( let i=0 ; i < arr.length; i++){
   let minValue = [];
   minValue = (Math.min(...arr[i]));
   naujas += minValue;
   }
   return naujas;
   }


 