'use strict';
const categoriesItems = document
  .querySelector('#categories')
  .querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const categoryElementQuantity = item.querySelectorAll('ul li').length;
  console.log(`Elements: ${categoryElementQuantity}`);
});
