"use strict";
// const gas = document.querySelectorAll(".gas");

// for (let i = 0; i < gas.length; i++) {
//   gas[i].onclick = function () {
//     let value = document.querySelector(".gallas").value;
//     let number = this.getAttribute("data");

//     document.querySelector(".out").innerHTML = value * number;
//   };
// }



// let a = document.createElement('div');
// a.innerHTML = 'hello';
// a.classList.add('two');

// document.querySelector('.test').appendChild(a)

// console.log(a);



// Home Work 20 tasks

// 01
const b1 = document.querySelector('.b-1');
const f1 = ()=>{
  const out1 = document.querySelector('.out-1');
  out1.style.width = '200px';
  out1.style.height = '40px';

}
b1.onclick = f1;


// 02
 document.querySelector('.b-3').onclick = function f3(){
document.querySelector('.out-3').classList.remove('bg-3')
 }
const b31 = document.querySelector('.b-31').onclick= function f4() {
document.querySelector('.out-3').classList.add('bg-3')

 }
const b4 = document.querySelector('.b-4').onclick= function f5() {
document.querySelector('.out-4').classList.toggle('bg-4')

}


const b6 = document.querySelector('.b-5').onclick= function f6() {
  document.querySelector('.out-5').textContent = document.querySelector('.out-4').classList.contains('bg-4')
  }


document.querySelector('.b-8').onclick = function f8 (){
 const out8 = document.querySelectorAll('.out-8');

 for(let i = 0; i<out8.length;i++){
  out8[i].classList.toggle('b-8')
 }
};


let out9 = document.querySelectorAll('.out-9');

for(let i =0; i<out9.length;i++){
  out9[i].onclick = function f9(){
    this.classList.add('bg-9')
  }
}


document.querySelector('.b-12').onclick = function f12 (){


let divBlock = document.createElement('div');
  divBlock.classList.add('bg-12');
  divBlock.innerHTML = '12';

  document.querySelector('.out-12').appendChild(divBlock);
}



document.querySelector('.b-13').onclick = function f13 (){
  let divBlock = document.createElement('div');
  divBlock.innerHTML='pushMe';
  divBlock.className='bg-13';
  divBlock.onclick = function f13_1(){
    alert('pushme')
  }

  document.querySelector('.out-13').appendChild(divBlock);

}





document.querySelector('.b-14').onclick = function f14 (){
  let divBlock = document.createElement('div');
  divBlock.innerHTML=14;
  divBlock.className='bg-14';
  divBlock.onclick = function f13_1(){
    alert('pushme')
  }

  document.querySelector('.out-14').prepend(divBlock);

}


