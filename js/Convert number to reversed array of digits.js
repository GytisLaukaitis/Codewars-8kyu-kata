"use strict"

function digitize(n) {
    let pradinis = (""+n).split('');
    let atbulas = [];
    for (let i = pradinis.length - 1; i >= 0; i--) {
      atbulas[i] = parseInt(pradinis.shift());
    }
    return atbulas;
    }