"use strict"

function myLanguages(results) {
    let sortable = [];
    let returned = []
    for (var keys in results) {
      if(results[keys] >= 60) {
        sortable.push([keys, results[keys]]);
      }
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    for (let i = 0; i < sortable.length; i++) {
      for (let j = 0; j < sortable[i].length; j++) {
        if (typeof sortable[i][j] !== 'number') {
        returned.push(sortable[i][j])
        }
      }
    }
    return returned
  }