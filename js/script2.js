// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Oct 2022
// This file contains the JS functions for index2.html
"use strict"
/**
 * This function gets users area of triangle with base and height.
 */

function submitII() {
  // input
  const base = parseInt(document.getElementById("base-value").value)
  const height = parseInt(document.getElementById("height-value").value)

  // process
  const areaBH = (base * height) / 2

  // output
  document.getElementById("areaBH").innerHTML = " The area is : " + areaBH + " ㎠ "
}
