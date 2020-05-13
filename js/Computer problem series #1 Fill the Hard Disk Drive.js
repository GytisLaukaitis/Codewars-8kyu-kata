"use strict"


function save(sizes, hd) {
    let Files = [];
    let Sizes = 0;
    for(let i = 0; i < sizes.length; i ++) {
      Sizes += sizes[i]
      if(Sizes <= hd) {
        Files.push(sizes[i]);
      }
    }
    return Files.length;
  }