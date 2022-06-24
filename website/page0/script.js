'use strict';
// please do not delete the 'use strict' line above
const ourParagraph = document.createElement("p");
ourParagraph.textContent = "Go on, Press a button. You know you want too "
document.body.append(ourParagraph)

const button = document.querySelector("button")
const bod = document.querySelector("body")
const button1 = document.querySelector("#color-button1")
const button2 = document.querySelector("#color-button2")
const button3 = document.querySelector("#color-button3")
const button4 = document.querySelector("#color-button4")
const button5 = document.querySelector("#color-button5")
const button6 = document.querySelector("#color-button6")
const button7 = document.querySelector("#color-button7")
const button8 = document.querySelector("#color-button8")



 let color = "#";
let color1 = "#";
button.addEventListener("click", () => {
  color += ran
  bod.style.backgroundColor = color;

  const ran1 =  Math.random().toString(16).slice(2,8)
  color += ran
  button.style.backgroundColor = color;
})


button1.addEventListener("click", () => {

  let color = "#";
  const ran =  Math.random().toString(16).slice(2,8)
  color += ran
  bod.style.backgroundColor = color;


  let color1 = "#";
  const ran1 =  Math.random().toString(16).slice(2,8)
  color1 += ran1
  button1.style.backgroundColor = color1;
})


button2.addEventListener("click", () => {
  let color = "#";
  const ran =  Math.random().toString(16).slice(2,8)
  color += ran
  bod.style.backgroundColor = color;

  let color1 = "#";
  const ran1 =  Math.random().toString(16).slice(2,8)
  color1 += ran1
  button2.style.backgroundColor = color1;




})

button3.addEventListener("click", () => {


  let color = "#";
  const ran =  Math.random().toString(16).slice(2,8)
  color += ran
  bod.style.backgroundColor = color;


  let color1 = "#";
  const ran1 =  Math.random().toString(16).slice(2,8)
  color1 += ran1
  button3.style.backgroundColor = color1;




})




button4.addEventListener("click", () => {


  let color = "#";
  const ran =  Math.random().toString(16).slice(2,8)
  color += ran
  bod.style.backgroundColor = color;


  let color1 = "#";
  const ran1 =  Math.random().toString(16).slice(2,8)
  color1 += ran1
  button4.style.backgroundColor = color1;




})

button5.addEventListener("click", () => {


  let color = "#";
  const ran =  Math.random().toString(16).slice(2,8)
  color += ran
  bod.style.backgroundColor = color;


  let color1 = "#";
  const ran1 =  Math.random().toString(16).slice(2,8)
  color1 += ran1
  button5.style.backgroundColor = color1;




})

button6.addEventListener("click", () => {


  let color = "#";
  const ran =  Math.random().toString(16).slice(2,8)
  color += ran
  bod.style.backgroundColor = color;


  let color1 = "#";
  const ran1 =  Math.random().toString(16).slice(2,8)
  color1 += ran1
  button6.style.backgroundColor = color1;




})

button7.addEventListener("click", () => {


  let color = "#";
  const ran =  Math.random().toString(16).slice(2,8)
  color += ran
  bod.style.backgroundColor = color;


  let color1 = "#";
  const ran1 =  Math.random().toString(16).slice(2,8)
  color1 += ran1
  button7.style.backgroundColor = color1;




})

button8.addEventListener("click", () => {


  let color = "#";
  const ran =  Math.random().toString(16).slice(2,8)
  color += ran
  bod.style.backgroundColor = color;


  let color1 = "#";
  const ran1 =  Math.random().toString(16).slice(2,8)
  color1 += ran1
  button8.style.backgroundColor = color1;




})


  var count = 1;
  function myFunction() {
    document.getElementById("color-button").innerHTML = count++;
    }
    