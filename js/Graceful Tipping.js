"use strict" ;



function gracefulTipping(bill) {
    let skaicius = (bill  * 1.15) ;
    let koficient = Math.floor(skaicius).toString().length;
    let daugiklis = 5;
    for ( let i = 2; i < koficient; i++) {
    daugiklis *= 10;
    }
    if (koficient == 1) {
    daugiklis = 1;
     }
     console.log(daugiklis);
     var quotient = Math.floor(skaicius/daugiklis);
       console.log(skaicius);
    return (quotient +1)*daugiklis;
    }

