'use strict';
// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

//=================================

// / напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumSibling(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    const currentValue = array[i] + array[i + 1];
    newArray.push(currentValue);
  }
  return newArray;
}
 console.log(sumSibling(someArr));