// 'use strict';
// // Створіть масив styles з елементами 'Джаз' і 'Блюз'
// //Додайте в кінець 'Рок-н-ролл'
// //Заменіть значення 'Блюз' на 'Класика'
// // Напишіть функцію logItems (array), яка приймає
// // масив і використовує цикл for, який для кожного елемента
// //буде виводити повідомлення у форматі:
// //<номер елемента> - <значення елемента>
// //Нумерація має починатись з 1

// // const styles = ['Jazz', 'Blues'];
// // styles.push('Rock-and-Roll');
// // // styles[1] = 'Classic';
// // const indexOfBlues = styles.indexOf('Blues');
// // if (indexOfBlues !== -1) {
// //   styles[indexOfBlues] = 'Classic';
// // }

// // function logItems(array) {
// //   for (let i = 0; i < array.length; i++) {
// //     console.log(`${i + 1} - ${array[i]}`);
// //   }
// // }

// // logItems(styles);
// // //===================================
// // // напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// // const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // function sumSibling(array) {
// //   const newArray = [];
// //   for (let i = 0; i < array.length - 1; i++) {
// //     const currentValue = array[i] + array[i + 1];
// //     newArray.push(currentValue);
// //   }
// //   return newArray;
// // }
// // console.log(sumSibling(someArr));

// // Напиши функцію, яка перебирає масив логінів і перевіряє
// // чи є ім'я введене в інпут у цьому масиві і у разі,
// // якщо є - виводить повідомлення "Доступ дозволено"
// // в іншому випадку - "Користувач не знайден"
// // const logins = ['Peter', 'John', 'Igor', 'Sasha'];
// // function checkLogin(arr) {
// //   const login = prompt('Введіть логін');
// //   // for (const item of arr) {
// //   //   if (item === login) {
// //   //     return 'Доступ дозволено';
// //   //   }
// //   // }
// //   // return 'Користувач не знайдений';
// //   return arr.includes(login) ? 'Доступ дозволено' : 'Користувач не знайдений';
// // }
// // console.log(checkLogin(logins));
// // ===============
// //Напишіть функції для роботи з масивом
// //add(name) додає ім'я до кінця колекції
// //remove(name) видаляє ім'я із колекції
// //update(oldName, newName) змінює ім'я на нове
// const names = ['Alla', 'Petro', 'Max', 'Olena', 'Boris'];
// function add(name) {
//   if (names.includes(name)) {
//     return `${name} вже існує`;
//   }
//   names.push(name);
//   return names;
// }
// function remove(name) {
//   const index = names.indexOf(name);
//   if (index === -1) {
//     return `${name} не знайденно`;
//   }
//   names.splice(index, 1);

//   return names;
// }
// function update(oldName, newName) {
//   const index = names.indexOf(oldName);
//   if (index === -1) {
//     return `${oldName} не знайденно`;
//   }
//   // names[index] = newName;
//   names.splice(index, 1, newName);
//   return names;
// }
// console.log(add('Vova'));
// console.log(remove('Max'));
// console.log(update('Olena', 'Sasha'));
// console.log(add('Boris'));

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of
// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

//3. Напишіть ф-цію calcTotalPrice(fruits, fruitName),
//яка приймає массив об'єктів і
//рядок з назвою фрукта.
//Функція рахує і повертає загальну вартість фрукта
//з таким ім'ям, ціною та кількістю з об'єкта
// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) totalPrice += fruit.price * fruit.quantity;
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(fruits, 'Яблуко'));

// Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)

// const calculator = {
//   read(a, b) {
//     this.valueA = a;
//     this.valueB = b;
//   },
//   sum() {
//     if (this.valueA && this.valueB) {
//       return this.valueA + this.valueB;
//     }
//     return 'not a number';
//   },
//   mult() {
//     if (this.valueA && this.valueB) {
//       return this.valueA * this.valueB;
//     }
//     return 'not a number';
//   },
// };
// // console.log(calculator.read(12, 13));
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator);
//============================================
//5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій
//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
//Кожна транзакція це об'єкт з властивостями id, type, amount
const account = {
  //поточний баланс рахунка
  balance: 0,
  //Історія транзакцій
  transactions: [],
  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },
  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
   const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
   transaction.id = Math.random();
  this.transactions.push(transaction);
  },
  
  //Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (amount > this.balance)
    return console.log("Недостатньо коштів на рахунку");
    this.balance -= amount;
    const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
    transaction.id = Math.random();
    this.transactions.push(transaction);
  },
  //Метод повертає поточний баланс
  getBalance() {},
  //Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {},
  //Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {},
};

account.deposit(100);
account.deposit(500);
account.deposit(1000);
account.withdraw(50);
account.withdraw(15000);


console.log(account);
