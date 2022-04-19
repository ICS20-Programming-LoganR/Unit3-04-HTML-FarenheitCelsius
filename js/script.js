// Created by: Logan Rodriguez
// Created on: Apr 2022
// This file contains the JS functions for index.html

function convert () {
  //function for determining the answer

  //get the temperature in farenheit from the text field
  let Farenheit = parseFloat(document.getElementById("farenheit").value)
  //Display the answer
  document.getElementById('answer').innerHTML = "The temperature in celcius is " + (5/9 * (Farenheit - 32)).toFixed(3) + "°C"
}