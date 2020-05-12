"use strict"

function abbrevName(name){
    let nameArray = name.split(' ');
    console.log(name.split(" "));
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }