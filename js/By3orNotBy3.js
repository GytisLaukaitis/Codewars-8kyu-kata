"use strict"

function divisibleByThree(str){
    let naujas = str.split('');
    let skaiciai =0;
    for (let i=0; i< naujas.length; i++){
        skaiciai += parseInt(naujas[i]);     
    } if (skaiciai % 3 == 0) {
        return true;
    } else {
        return false;
    }
}


console.log(divisibleByThree('123'), true, "Should return true if the sum of the given digits is divisible by 3.");