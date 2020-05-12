"use strict"

function isValid(formula){
    let pirmas = false;
    let antras = false;
    let trecias = false;
    let ketvirtas = false;
    let penktas = false;
    let sestas = false;
    let septintas = false;
    let astuntas = false;

for (let i = 0; i < formula.length; i++){
    switch(formula[i]) {
      case 1: 
      pirmas = true;
      break;
      case 2:
      antras =true;
      break;
      case 3:
      trecias = true;
      break;
      case 4:
      ketvirtas = true;
      break;
      case 5:
      penktas = true;
      break;
      case 6:
      sestas = true;
      break;
      case 7:
      septintas = true;
      break;
      case 8:
      astuntas = true;
      break;
    }
  }
  if (pirmas && antras){
    return false;
  }
  if (trecias && ketvirtas){
    return false;
  }
  if (penktas && sestas){
    return true;
  }
  if ((penktas && !sestas) || (!penktas && sestas)){
    return false;
  }
  if ((septintas || astuntas) || (septintas && astuntas)){
    return true;
  }
  return false;
  }