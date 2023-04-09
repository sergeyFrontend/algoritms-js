"use strict";

// const a = [1,3,4,5,6,7,8,10];
// const b = [1,2,4,5,9,7,8,110];

// console.log(a.length);

// console.log(a.push(14));

// console.log(a);

// a.pop();
// console.log(a);

// a.splice(3,3,'h1');

// console.log(a);

//homeWork 20 tasks

//01
// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем
// его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то
// давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший
// способ оптимизировать код.

const showArr = (domElem, arr) => {
  let out = "";

  for (let i = 0; i < arr.length; i++) {
    out += arr[i] + " ";
    document.querySelector(domElem).textContent = out;
  }
};

const d1 = [33, "best", 66, "best"];

const f1 = () => {
  let i1 = document.querySelector(".i-1").value;
  d1.push(i1);
  showArr(".out-1", d1);
};

document.querySelector(".b-1").onclick = f1;

const f2 = () => {
  d1.pop();
  showArr(".out-2", d1);
};

document.querySelector(".b-2").onclick = f2;

const f3 = () => {
  d1.shift();
  showArr(".out-3", d1);
};

document.querySelector(".b-3").onclick = f3;

const f4 = () => {
  let i4 = document.querySelector(".i-4").value;
  d1.push(i4);
  showArr(".out-4", d1);
};

document.querySelector(".b-4").onclick = f4;

const f5 = () => {
  let i5 = document.querySelector(".i-5").value;

  d1.unshift(" " + i5);
  showArr(".out-5", d1);
};

document.querySelector(".b-5").onclick = f5;

const d6 = ["test", 5, 12];

const f6 = () => {
  let i6 = document.querySelector(".i-6").value;

  d6[d6.length - 1] += i6;

  showArr(".out-6", d6);
};

document.querySelector(".b-6").onclick = f6;

const d7 = ["china", "india", "brazil", "japan", "egypt"];

const f7 = () => {
  d7.splice(d7.length - 1, 1);

  showArr(".out-7", d7);
};

document.querySelector(".b-7").onclick = f7;

const d8 = [2, "4", 12, 67, "hello"];

const f8 = () => {
  let i8 = document.querySelector(".i-8").value;
  d8.splice(0, 1, i8, d8[0]);

  showArr(".out-8", d8);
};

document.querySelector(".b-8").onclick = f8;

const d9 = [100, 200, 300, 400, 700, 121];

const f9 = () => {
  d9.splice(0, 1);

  showArr(".out-9", d9);
};

document.querySelector(".b-9").onclick = f9;

const d10 = [3, 14, 15, 92, 6];

const f10 = () => {
  d10.reverse();

  showArr(".out-10", d10);
};

document.querySelector(".b-10").onclick = f10;

const d11 = [2, 3, 4, 5, 6, 7];

const f11 = () => {
  let i11 = +document.querySelector(".i-11").value;
  let out11 = document.querySelector(".out-11");

  out11.textContent = d11.indexOf(i11, 0);
};

document.querySelector(".b-11").onclick = f11;

const d12 = [6, 62, 60, 70, 1, 5];

const f12 = () => {
  let i12 = document.querySelector(".i-12").value;

  let result = -1;

  for (let i = 0; i < d12.length; i++) {
    if (d12[i] == i12) {
      result = i;
      break;
    }
  }
  document.querySelector(".out-12").textContent = result;
};

document.querySelector(".b-12").onclick = f12;
