'use strict';
// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ['Jazz', 'Blues'];
// styles.push('Rock-and-Roll');
// // styles[1] = 'Classic';
// const indexOfBlues = styles.indexOf('Blues');
// if (indexOfBlues !== -1) {
//   styles[indexOfBlues] = 'Classic';
// }

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);
// //===================================
// // напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumSibling(array) {
//   const newArray = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     const currentValue = array[i] + array[i + 1];
//     newArray.push(currentValue);
//   }
//   return newArray;
// }
// console.log(sumSibling(someArr));

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"
// const logins = ['Peter', 'John', 'Igor', 'Sasha'];
// function checkLogin(arr) {
//   const login = prompt('Введіть логін');
//   // for (const item of arr) {
//   //   if (item === login) {
//   //     return 'Доступ дозволено';
//   //   }
//   // }
//   // return 'Користувач не знайдений';
//   return arr.includes(login) ? 'Доступ дозволено' : 'Користувач не знайдений';
// }
// console.log(checkLogin(logins));
// ===============
//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове
const names = ['Alla', 'Petro', 'Max', 'Olena', 'Boris'];
function add(name) {
  if (names.includes(name)) {
    return `${name} вже існує`;
  }
  names.push(name);
  return names;
}
function remove(name) {
  const index = names.indexOf(name);
  if (index === -1) {
    return `${name} не знайденно`;
  }
  names.splice(index, 1);

  return names;
}
function update(oldName, newName) {
  const index = names.indexOf(oldName);
  if (index === -1) {
    return `${oldName} не знайденно`;
  }
  // names[index] = newName;
  names.splice(index, 1, newName);
  return names;
}
console.log(add('Vova'));
console.log(remove('Max'));
console.log(update('Olena', 'Sasha'));
console.log(add('Boris'));
