// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const listElem = document.createElement('ol');
// const addBtnElem = document.createElement('button');
// const removeBtnElem = document.createElement('button');
// const inputElem = document.createElement('input');
// addBtnElem.textContent = 'Add';
// removeBtnElem.textContent = 'Remove';
// addBtnElem.addEventListener('click', () => {
//   const inputValue = inputElem.value.trim();
//   if (inputValue === '') {
//     return;
//   }
//   const listItem = document.createElement('li');
//   listItem.textContent = inputValue;
//   listElem.append(listItem);
//   if (listElem.children.length % 2 === 0) {
//     listItem.style.backgroundColor = 'yellow';
//   } else {
//     listItem.style.backgroundColor = 'blue';
//   }
//   inputElem.value = '';
// });

// removeBtnElem.addEventListener('click', () => {
//   if (listElem.lastChild) listElem.lastChild.remove();
// });

// document.body.append(inputElem, addBtnElem, removeBtnElem, listElem);

//====================================================

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   'width: 100px; height: 100px; border-width: 1px;',
//   'width: 100px; height: 100px; border-radius: 50%;',
//   'width: 150px; height: 100px; border-width: 1px;',
//   'width: 200px; height: 100px; border-radius: 100px / 50px; ',
//   'width: 150px; height: 100px; transform: skew(20deg)',
// ];
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const figureElem = document.createElement('div');
// function createFigureElem() {
//   figureElem.style.cssText = forms[randomither(forms.length)];
//   figureElem.style.backgroundColor = getRandomHexColor();
//   figureElem.style.position = 'absolute';
//   figureElem.style.top = `${randomither(100)}%`;
//   figureElem.style.left = `${randomither(100)}%`;
// }
// createFigureElem();
// document.body.append(figureElem);

// figureElem.addEventListener('click', createFigureElem);

//=========================================================

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// let boxSize = 50;
// const markUp = `<div class="box" style="width: ${boxSize}px; height: ${boxSize}px; background-color: tomato;"></div>
//     <button class="increase">Increase</button>
//     <button class="decrease">Decrease</button>`;

// document.body.insertAdjacentHTML('afterbegin', markUp);

// const box = document.querySelector('.box');
// const increase = document.querySelector('.increase');
// const decrease = document.querySelector('.decrease');

// increase.addEventListener('click', () => {
//   boxSize += 10;
//   box.style.width = `${boxSize}px`;
//   box.style.height = `${boxSize}px`;
// });

// decrease.addEventListener('click', () => {
//   if (boxSize > 10) {
//     boxSize -= 10;
//     box.style.width = `${boxSize}px`;
//     box.style.height = `${boxSize}px`;
//   }
// });

//===================================================

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const itemElems = document.querySelectorAll('.listItem');
// const btnElem = document.querySelector('#double');

// btnElem.addEventListener('click', () => {
//   itemElems.forEach(element => {
//     element.textContent *= 2;
//   });
// });

//================================================

/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

// const circles = document.querySelectorAll('.gridItem');

// circles.forEach(circle => {
//   circle.addEventListener('mouseenter', () => {
//     circle.classList.add('hide');
//   });
//   circle.addEventListener('mouseleave', () => {
//     circle.classList.remove('hide');
//   });
// });
//========================
// Завдання 14
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey
// const eventThumb = document.querySelector('.eventThumb');
// document.addEventListener('keydown', (e) => {
//     const markup = `<ul class="eventList">
//     <li class="eventCode">${e.code}</li>
//     <li class="eventKey">${e.key}</li>
//   </ul>`;
// eventThumb.insertAdjacentHTML("afterbegin", markup);
// });
// ==========================
// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".
const productTable = document.querySelector('#productTable');
const productDetails = document.querySelector('#productDetails');

productTable.addEventListener('click', (e) => {
if (e.target.nodeName !== 'TD') return;
const parent = e.target.parentNode;
const product = parent.firstElementChild.textContent;
const price = parent.lastElementChild.textContent;
productDetails.textContent = `Ви вибрали ${product} за ${price}`;
});

