"use strict"

function halvingSum(n) {
    let sk=0;
    while (n>=1){
    sk+=n;
    n=Math.floor((n*1)/2);
    }
    return sk;
} 