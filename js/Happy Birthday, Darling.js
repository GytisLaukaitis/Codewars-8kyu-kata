"use strict" ;


function womensAge(n) {
    let amzius = Math.floor(n / 2);
    let base = 0;
    if ( n % 2 != 0 ){
    base = 21;
    } else {
    base = 20;
    }
    return n + "? That's just " +base+ ", in base " +amzius+ "!";
    }