"use strict"

String.prototype.isUpperCase = function() {
    if (String(this) === this.toUpperCase()) { 
      return true;
    }
    else {
      return false;
    }
    }