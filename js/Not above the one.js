"use strict"


function binaryCleaner(arr) {

    let maziau = [];
    let daugiau = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1){
            daugiau.push(i);
        } else {
            maziau.push(arr[i]);
        }
    }
  return [maziau, daugiau];
}




