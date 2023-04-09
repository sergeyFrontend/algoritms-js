"use strict";

const btn = document.querySelector('button');
const input = document.querySelector('input');


btn.onclick = () => {
let val = +input.value;
  if( val == 40){
    console.log('welcome')
  }else{
    console.log('it is not correct');
  }

  input.value = ''
}