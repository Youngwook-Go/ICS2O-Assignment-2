// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Oct 2022
// This file contains the JS functions for index1.html

"use strict"
/**
 * This function gets users area of triangle with side length.
 */

function submitI() {
  // input
  const side = parseFloat(document.getElementById("side-value").value)

  // process
  const areaSide = (Math.sqrt(3) / 4) * side ** 2

  // output
  document.getElementById("areaSide").innerHTML =
    "Area of the triangle is: " + areaSide.toFixed(2) + " cm²"
}
