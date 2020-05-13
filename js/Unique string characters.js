"use strict"


function solve(a,b){
        let naujas = '';
        for (let i = 0; i < a.length; i += 1) {
          if (!(b.includes(a[i]))) {
            naujas += a[i];
          }
        }
        for (let i = 0; i < b.length; i += 1) {
          if (!(a.includes(b[i]))) {
            naujas += b[i];
          }
        }
        return naujas;
      };


console.log(solve("xyab","xzca"),"ybzc");