"use strict"

function getSum( a,b ){
    let naujas = 0;
if (a >= b){
  let n = a;
  a = b;
  b = n;
}
 for ( let i = a; i <= b ;i++){
       naujas += i;    
}
return naujas;
}

console.log(getSum(0,-10),-1);
