"use strict"

function arrayMadness(a, b) {
    let sumA = 0;
      let sumB = 0;
      for (let i=0; i<a.length;i++) {
        let kvadratas = a[i] ** 2;
        sumA = sumA + kvadratas;
      }
      for (let s=0;s<b.length;s++) {
        let kubas = b[s] ** 3;
        sumB = sumB + kubas;
      }
      if(sumA>sumB) {
        return true;
      }
      return false;
    }