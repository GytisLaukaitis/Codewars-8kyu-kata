"use strict"

function betterThanAverage(classPoints, yourPoints) {
    let taskai = 0;
    for (let i=0 ; i<classPoints.length; i++) {
      taskai = taskai + classPoints[i];
    }
    if(taskai/classPoints.length < yourPoints) {
      return true;
    } else {
    return false;
    }
   }