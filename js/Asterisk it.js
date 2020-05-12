"use strict"

function asteriscIt(n) {
    if (typeof n =='number') {
        n = ''+ n;
    } if (typeof n == "object"){
         n = n.join('');
    }
     let skaicius = '';
 for ( let i = 0;i < n.length; i++){
     skaicius += n[i];
     if (n[i] % 2 == 0 && n[i+1] % 2 == 0) {
         skaicius +=  '*';
     } 
 }   
    return skaicius;
 }

 console.log(asteriscIt(14646867231), '14*6*4*6*8*67231');
 