"use strict"

function getMinMax(arr){
    let naujas = [];
    let maz = Math.min(...arr);
    let did = Math.max(...arr);
    naujas.push(maz,did);
    return naujas;
   }