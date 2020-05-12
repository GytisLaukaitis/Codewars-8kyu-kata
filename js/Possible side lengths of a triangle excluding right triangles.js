"use strict"

function sideLen (x,y){
    let bigger =0;
    let shorter =0;
    if(x>y){
      bigger=x; shorter=y;
    }else{
      bigger=y; shorter=x;
    }
  answers = [];
    for(let i = bigger-shorter+1; i<x+y;i++){
        if(i>bigger){
          if( x*x + y*y != i*i){
        answers.push(i);
          }
        }else{
           if( shorter*shorter + i*i  != bigger*bigger){
            answers.push(i);
             }
         }
      }
      return answers;
  }