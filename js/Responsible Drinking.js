"use strict"
function hydrate(s) {
    let gerimai = 0;
    for (let i = 0; i < s.length; i++) {
      if (parseInt(s[i]) > 0) {
        gerimai += +s[i];
      }
    }
    return gerimai > 1 ? `${gerimai} glasses of water`: '1 glass of water'
  }



    console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");