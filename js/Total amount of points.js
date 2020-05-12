"use strict"

function points(games) {
    let pointsSum = 0;
    for (let i=0;i<games.length;i++) {
        let kekw = games[i][0];
        let antra = games[i][2];
      if ( kekw>antra ) {
          pointsSum += 3;
      } else if ( kekw == antra ) {
        pointsSum += 1;
      }
    }
    return pointsSum
  }