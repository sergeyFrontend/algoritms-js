"use strict";

// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью includes ищет данный
//элемент в массиве a1. Выводит в out-1 результат работы метода.

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const f1 = () => {
  let value = +document.querySelector(".i-1").value;
  let out = a1.includes(value);

  document.querySelector(".out-1").innerHTML = out;
};

// TASK 02

// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 и с помощью includes проверяет
//         наличие подобного элемента в массиве a2. Выводит в out-2 false, если такого элемента нет в массиве, и
//         ИНДЕКС элемента если есть.
//         Констатация наличия выполняется через includes. Нахождение индекса либо через indexOf или через цикл.
//         Сравните данную задачу с задачей 2 из юнита 1. Подумайте какой из методов: includes, indexOf более
//         удобен для данной задачи.
const a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const f2 = () => {
  let i2 = document.querySelector('.i-2').value;
  let out2 = document.querySelector('.out-2');
  let result = false;

  if (a2.includes(i2)) result = a2.indexOf(i2);
	out2.textContent = result;
};

//TASK 03
const a3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const f3 = () => {};

//TASK 04
const a4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const f4 = () => {};

//TASK 05
// const a5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const f5 = () => {};

document.querySelector(".b-1").addEventListener("click", f1);
document.querySelector(".b-2").addEventListener("click", f2);
document.querySelector(".b-3").addEventListener("click", f3);
document.querySelector(".b-4").addEventListener("click", f4);
