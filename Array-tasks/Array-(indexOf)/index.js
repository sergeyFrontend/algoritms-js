// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью indexOf и ищет
// данный элемент в массиве a1. Выводит в out-1 результат работы
const a1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15, 16, 17, 18, 19, 20,
];
const f1 = () => {
  let valueInput = +document.querySelector(".i-1").value;
  let out = a1.indexOf(valueInput);
  document.querySelector(".out-1").textContent = out;
};

// TASK 02

// По нажатию b-2 выполняется функция f2. Функция считывает значение из
// i-2 и с помощью indexOf и ищет данный элемент в массиве a2. Выводит в
// out-2 false, если такого элемента нет в массиве, и ИНДЕКС элемента
// если есть.

const a2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15, 16, 17, 18, 19, 20,
];

const f2 = () => {
  let valueInput2 = +document.querySelector(".i-2").value;
  let out = a2.indexOf(valueInput2);
  if (out === -1) {
    document.querySelector(".out-2").textContent = false;
  } else {
    document.querySelector(".out-2").textContent = out;
  }
};

// TASK 03

// По нажатию b-3 выполняется функция f3. Функция считывает значение из
// i-3 и с помощью indexOf и ищет данный элемент в массиве a3. Выводит в
// out-3 false, если такого элемента нет в массиве, и true если есть.

const a3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15, 16, 17, 18, 19, 20,
];

const f3 = () => {
  let valueInput3 = +document.querySelector(".i-3").value;
  let out = a3.indexOf(valueInput3);
  if (out === -1) {
    document.querySelector(".out-3").textContent = false;
  } else {
    document.querySelector(".out-3").textContent = true;
  }
};

//TASK 04

// По нажатию b-4 выполняется функция f4. Функция принимает 2 параметра,
// первый - массив, второй элемент. Функция должна с помощью indexOf
// найти и вывести в out-4 индекс искомого элемента в массиве a4 или -1
// если элемента в массиве нет. Протестируйте задачу на строке '2' и
// числе 2. Сделайте выводы.

const a4 = [1, "1", 2, "2", "3"];

const f4 = (arr, index) => {
  let out = arr.indexOf(index);
  if (out === -1) {
    document.querySelector(".out-4").textContent = -1;
  } else if (index !== -1) {
    document.querySelector(".out-4").innerHTML = out;
  }
};

//TASK 05
// По нажатию b-5 выполняется функция f5. Функция считывает значение из
// i-5-1 и индекс с которого начинается поиск в массиве с i-5-2 и с
// помощью indexOf и ищет данный элемент в массиве a5 c позиции указанной
// в i-5-2. Выводит в out-5 индекс если он есть в массиве, или -1 если

const a5 = [1, 2, 34, 55, 66, 77, 88, 33, 44, 55, 22, 66];

const f5 = () => {
  let value = +document.querySelector(".i-5-1").value;
  let index = +document.querySelector(".i-5-2").value;

  let out = a5.indexOf(value, index);

  if (out === -1) {
    document.querySelector(".out-5").textContent = -1;
  } else if (index !== -1) {
    document.querySelector(".out-5").innerHTML = out;
  }
};

//TASK 06

// По нажатию b-6 выполняется функция f6. Функция считывает значение из
// i-6 и с помощью indexOf и ищет данный элемент в СТРОКЕ a6. Выводит в
// out-6 результат поиска.

const a6 = "helloWorldAndSergey";

const f6 = () => {
  let value = document.querySelector(".i-6").value;
  let out = a6.indexOf(value);

  document.querySelector(".out-6").innerHTML = out;
};

// TASK 07

// По нажатию b-7 выполняется функция f7. Функция принимает 2 параметра,
// первый массив, второй - искомое число. Функция должна эмулировать
// работу метода indexOf с помощью цикла. Что понимается под эмуляцией?
// Мы не используем метод indexOf, а циклом перебираем массив и с помощью
// if решаем задачу. Функция должна только либо выводить в out-7 число
// -1, если искомого числа нет в массиве, или индекс числа в массиве.

const a7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const f7 = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (elem == arr[i]) {
      document.querySelector(".out-7").innerHTML = i;
      break;
    } else if (i == arr.length - 1) {
      document.querySelector(".out-7").innerHTML = -1;
    }
  }
};

//TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна получить число
// из i-8 и с помощью цикла и indexOf найти все индексы данного числа в
// массиве a8. Индексы должны быть добавлены в res08. Результат (res08)
// выведите в out-8. Если число не встречается в массиве, то res08 должен
// быть пустым.

const a8 = [1, 2, 4, 5, 6, 7, 8, 9, 10];

const f8 = () => {
  const res8 = [];
  let value = +document.querySelector(".i-8").value;

  for (let i = 0; i < a8.length - 1; i++) {
    if (value === a8[i]) {
      res8.push(i);
    }
  }

  document.querySelector(".out-8").innerHTML = res8;
};

//TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна получить число
// из i-9 и с помощью цикла и indexOf вывести в out-9 все индексы
// вложенных в a9 массивов содержащие указанное число. Вывод через
// пробел. Если совпадений нет - выводите пустую строку.

const a9 = [
  [55, 22, 33],
  [3, 4, 22, 7],
  [66, 2, 12, 55],
  [142, 12, 7, 15],
  [45, 12, 67, 32],
];

const f9 = () => {
  let value = +document.querySelector(".i-9").value;
  let out = "";

  for (let i in a9) {
    let match = a9[i].indexOf(value);
    if (match !== -1) {
      out += i + " ";
    }
  }
  document.querySelector(".out-9").textContent = out;
};

const a10 = [1, "11", 2, "22", 3, "33"];

const f10 = (arr, elem) => {
  let out = "";
  for (let i = 0; i < arr.length - 1; i++) {
    if (elem == arr[i]) {
      return (out = i);
    }
  }
  if (out === "") {
    return -1;
  }
};

document.querySelector(".b-1").addEventListener("click", f1);
document.querySelector(".b-2").addEventListener("click", f2);
document.querySelector(".b-3").addEventListener("click", f3);
document.querySelector(".b-4").addEventListener("click", () => {
  // f4(a4, '2'); // изучите какой индекс вывело. Разберитесь почему
  f4(a4, "2"); // изучите какой индекс вывело. Разберитесь почему
});

document.querySelector(".b-5").addEventListener("click", f5);
document.querySelector(".b-6").addEventListener("click", f6);
document.querySelector(".b-7").addEventListener("click", () => {
  let number = +document.querySelector(".i-7").value;
  f7(a7, number);
});

document.querySelector(".b-8").addEventListener("click", f8);
document.querySelector(".b-9").addEventListener("click", f9);
document.querySelector(".b-10").addEventListener("click", () => {
  document.querySelector(".out-10").innerHTML = f10(a10, "22");
});
