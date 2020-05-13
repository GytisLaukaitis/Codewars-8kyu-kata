"use strict"

function mapVector(vector, circle1, circle2) {
    return [
    (vector[0]-circle1[0])/circle1[2]*circle2[2]+circle2[0],
    (vector[1]-circle1[1])/circle1[2]*circle2[2]+circle2[1],
    ];
  }