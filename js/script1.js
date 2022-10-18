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
  const side = parseInt(document.getElementById("side-value").value)

  // process
  const areaS = (Math.sqrt(3) / 4) * (side ** 2)

  // output
  document.getElementById("areaS").innerHTML = " The area is : " + areaS + " ㎠ "
}
