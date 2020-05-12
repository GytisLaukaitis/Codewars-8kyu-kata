"use strict"

String.prototype.toAlternatingCase = function () {
    let naujasTekstas ='';
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toLowerCase()) {
            naujasTekstas += this[i].toUpperCase();
        }
        else {
            naujasTekstas += this[i].toLowerCase();
        }
    }   
        return naujasTekstas;
  }