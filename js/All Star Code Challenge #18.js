"use strict"

function strCount(str, letter){  
    let naujas = 0;
    for (let i = 0; i <str.length; i++) 
        if ( str[i] === letter){
         naujas++   
        } 
     return naujas;
    } 