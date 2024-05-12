const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// Task 1
// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// *зробити функцію універсальною, щоб вона повертала
// масив будь-якої заданої властивості

// function getUserNames(users) {
//   return users.map(user => user.name);
// }
// console.log(getUserNames(users));

// function getUserByKey(users, key) {
//   return users.map(user => user[key]);
// }
// console.log(getUserByKey(users, 'balance'));

//==========================================================
// Отримати масив імен користувачів по полю (поле gender)
// console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// function getUsersWithGender(users, gender) {
//   //   return users.filter(user => user.gender === gender).map(user => user.name);
//   return users.reduce((names, user) => {
//     console.log(names);
//     if (user.gender === gender) {
//       return [...names, user.name];
//     } else {
//       return names;
//     }
//   }, []);
// }
// console.log(getUsersWithGender(users, 'male'));

// function getUsersWithGender(users, gender) {
//   return users.reduce(
//     (names, user) => (user.gender === gender ? [...names, user.name] : names),
//     [],
//   );
// }

// console.log(getUsersWithGender(users, 'male'));

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// function getSortedUniqueSkills(users) {
//   return users
//     .flatMap(user => user.skills)
//     .filter((skill, idx, arr) => arr.indexOf(skill) === idx)
//     .toSorted((a, b) => a.localeCompare(b));
// }

// console.table(getSortedUniqueSkills(users));
// =================================
//Створити статистику - об'єкт, у якому вказується кількість тегів
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const stats = {};
// tweets
//   .flatMap(tweet => tweet.tags)
//   .forEach(tag => {
//     console.log(stats[tag], stats);
//     if (!stats[tag]) {
//       stats[tag] = 1;
//     } else {
//       stats[tag] += 1;
//     }
//   });
// =================================
//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача
// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get getClientData() {
//     return {
//       clientLogin: this.#login,
//       clientEmail: this.#email,
//     };
//   }
//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const client = new Client('Puppy', 'animal@gmail.com');

// client.changeEmail = 'add@ghhj';
// console.log(client.getClientData);
// ====================
// task-3
//Класс ContactBook: Создайте класс Contact для представления контакта с полями name, email и phone.
//Затем реализуйте класс ContactBook, который будет хранить список контактов
//и предоставлять методы для добавления, удаления и поиска контактов.
// class Contact {
//   constructor(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//   }
//   createContact() {
//     return {
//       name: this.name,
//       email: this.email,
//       phone: this.phone,
//     };
//   }
// }
// class ContactBook extends Contact {
//   constructor() {
//     super();
//     this.contacts = [];
//   }
//   addContact(contact) {
//     this.contacts.push(contact);
//   }
//   removeContact(contactName) {
//     this.contacts = this.contacts.filter(
//       contact => contact.name !== contactName,
//     );
//   }
//   searchContact(contactName) {
//     const contact = this.contacts.find(contact => contact.name === contactName);
//     return contact ?? 'contact not found';
//   }
// }
// const contact1 = new Contact('Vova', 'dfghj@gmail', 3809643467);
// const contactBook = new ContactBook();
// contactBook.addContact(contact1.createContact());
// console.log(contactBook);

//Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priority,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

// class Notes {
//   static Priority = {
//     HIGHT: 'hight',
//     MIDDLE: 'middle',
//     LOW: 'low',
//   };
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(noteText) {
//     this.items = this.items.filter(item => item.text !== noteText);
//   }

//   updatePriority(noteText, newPriority) {
//     const note = this.items.find(item => item.text === noteText);
//     if (note) note.priority = newPriority;
//   }
// }

// const notes = new Notes();
// notes.addNote({ text: 'dfghjjk', priority: Notes.Priority.MIDDLE });
// notes.addNote({ text: 'hello', priority: Notes.Priority.LOW });
// notes.addNote({ text: 'bye-bye', priority: Notes.Priority.HIGHT });

// notes.removeNote('dfghjjk');
// notes.updatePriority('hello', Notes.Priority.MIDDLE);
// console.log(notes);

//Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
function askPassword(ok, fail) {
  let password = prompt('Password?');
  if (password === 'admin') ok();
  else fail();
}
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта

const user = {
  name: 'Olena',
  loginOk() {
    console.log(`${this.name} logged in`);
  },
  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
