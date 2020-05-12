"use strict"

function solution (str){
    let atbulas = '';
    for ( let i = str.length -1 ; i>=0; i-- ) {
        atbulas = atbulas + str[i];
    }
    return atbulas;
    }