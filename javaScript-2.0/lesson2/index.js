"use strict";

let a = 6;
let b = "Hello";

console.log(a);

const inputIn = document.querySelector(".input-in");
const btn = document.querySelector("button");

btn.onclick = function () {
  let value = +inputIn.value;
  console.log(value + 10);
};
