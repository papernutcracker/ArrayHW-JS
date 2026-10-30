// 1.1
// const car = {
//   manufacturer: "Toyota",
//   model: "Camry",
//   year: 2021,
//   averageSpeed: 100,

//   displayInfo() {
//     console.log(`Виробник: ${this.manufacturer}, Модель: ${this.model}, Рік: ${this.year}, Середня швидкість: ${this.averageSpeed} км/год`);
//   },

//   calculateTime(distance) {
//     let driveTime = distance / this.averageSpeed;
//     let breaks = Math.floor(driveTime / 4);
//     if (driveTime % 4 === 0 && breaks > 0) {
//       breaks -= 1;
//     }
//     return driveTime + breaks;
//   }
// };

// car.displayInfo();
// console.log(`Час на 500 км: ${car.calculateTime(500)} год`);

// 1.2
// const fractionMethods = {
//   gcd(a, b) {
//     return b ? this.gcd(b, a % b) : Math.abs(a);
//   },

//   reduce(fraction) {
//     const divisor = this.gcd(fraction.numerator, fraction.denominator);
//     return {
//       numerator: fraction.numerator / divisor,
//       denominator: fraction.denominator / divisor
//     };
//   },

//   add(f1, f2) {
//     return this.reduce({
//       numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
//       denominator: f1.denominator * f2.denominator
//     });
//   },

//   subtract(f1, f2) {
//     return this.reduce({
//       numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
//       denominator: f1.denominator * f2.denominator
//     });
//   },

//   multiply(f1, f2) {
//     return this.reduce({
//       numerator: f1.numerator * f2.numerator,
//       denominator: f1.denominator * f2.denominator
//     });
//   },

//   divide(f1, f2) {
//     return this.reduce({
//       numerator: f1.numerator * f2.denominator,
//       denominator: f1.denominator * f2.numerator
//     });
//   }
// };

// const fraction1 = { numerator: 1, denominator: 2 };
// const fraction2 = { numerator: 1, denominator: 3 };
// console.log(fractionMethods.add(fraction1, fraction2)); 

//1.3
// const timeObject = {
//   hours: 20,
//   minutes: 30,
//   seconds: 45,

//   displayTime() {
//     const h = String(this.hours).padStart(2, '0');
//     const m = String(this.minutes).padStart(2, '0');
//     const s = String(this.seconds).padStart(2, '0');
//     console.log(`${h}:${m}:${s}`);
//   },

//   normalizeTime() {
//     let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
    
//     if (totalSeconds < 0) {
//       totalSeconds = (24 * 3600) + (totalSeconds % (24 * 3600));
//     }
    
//     this.hours = Math.floor(totalSeconds / 3600) % 24;
//     this.minutes = Math.floor((totalSeconds % 3600) / 60);
//     this.seconds = totalSeconds % 60;
//   },

//   addSeconds(secs) {
//     this.seconds += secs;
//     this.normalizeTime();
//   },

//   addMinutes(mins) {
//     this.minutes += mins;
//     this.normalizeTime();
//   },

//   addHours(hrs) {
//     this.hours += hrs;
//     this.normalizeTime();
//   }
// };

// timeObject.addSeconds(30); 
// timeObject.displayTime();

//2.1
// let shoppingList = [
//   { name: "Молоко", quantity: 2, isBought: false },
//   { name: "Хліб", quantity: 1, isBought: true },
//   { name: "Яблука", quantity: 5, isBought: false }
// ];

// function displayShoppingList() {
//   const sorted = [...shoppingList].sort((a, b) => a.isBought - b.isBought);
//   console.log("Список покупок:", sorted);
// }

// function addItem(name, quantity) {
//   const existingItem = shoppingList.find(item => item.name === name);
//   if (existingItem) {
//     existingItem.quantity += quantity;
//   } else {
//     shoppingList.push({ name, quantity, isBought: false });
//   }
// }

// function buyItem(name) {
//   const item = shoppingList.find(item => item.name === name);
//   if (item) {
//     item.isBought = true;
//   }
// }

// displayShoppingList();

//2.2
// const receipt = [
//   { name: "Шоколад", quantity: 3, price: 40 },
//   { name: "Кава", quantity: 1, price: 150 },
//   { name: "Чай", quantity: 2, price: 60 }
// ];

// function displayReceipt() {
//   console.log("--- Чек ---");
//   receipt.forEach(item => {
//     console.log(`${item.name} - ${item.quantity} шт. x ${item.price} грн = ${item.quantity * item.price} грн`);
//   });
// }

// function getTotalSum() {
//   return receipt.reduce((sum, item) => sum + (item.quantity * item.price), 0);
// }

// function getMostExpensiveItem() {
//   return receipt.reduce((prev, current) => (prev.price * prev.quantity > current.price * current.quantity) ? prev : current);
// }

// function getAveragePrice() {
//   const totalItems = receipt.reduce((sum, item) => sum + item.quantity, 0);
//   return getTotalSum() / totalItems;
// }

// displayReceipt();
// console.log(`Загальна сума: ${getTotalSum()} грн`);
// console.log("Найдорожча покупка:", getMostExpensiveItem());
// console.log(`Середня вартість одного товару: ${getAveragePrice()} грн\n`);

//2.3
// const cssStyles = [
//   { name: "color", value: "red" },
//   { name: "font-size", value: "24px" },
//   { name: "text-align", value: "center" },
//   { name: "text-decoration", value: "underline" }
// ];

// function writeStyledTextToConsole(stylesArray, text) {
//   const styleString = stylesArray.map(style => `${style.name}: ${style.value}`).join('; ');
//   console.log("--- CSS Стилі ---");
//   console.log(`<p style="${styleString}">${text}</p>\n`);
// }

// writeStyledTextToConsole(cssStyles, "Привіт, світе!");

//2.4
let auditoriums = [
  { name: "A101", capacity: 15, faculty: "Кібернетика" },
  { name: "B202", capacity: 20, faculty: "Інженерія" },
  { name: "C105", capacity: 12, faculty: "Кібернетика" },
  { name: "D303", capacity: 10, faculty: "Дизайн" }
];

const group = { name: "КН-21", studentsCount: 14, faculty: "Кібернетика" };

function displayAllAuditoriums() {
  console.log("Всі аудиторії:", auditoriums);
}

function getAuditoriumsByFaculty(facultyName) {
  return auditoriums.filter(aud => aud.faculty === facultyName);
}

function getAuditoriumsForGroup(groupObj) {
  return auditoriums.filter(aud => 
    aud.faculty === groupObj.faculty && aud.capacity >= groupObj.studentsCount
  );
}

function sortAuditoriumsByCapacity() {
  return [...auditoriums].sort((a, b) => a.capacity - b.capacity);
}

function sortAuditoriumsByName() {
  return [...auditoriums].sort((a, b) => a.name.localeCompare(b.name));
}

console.log("--- Аудиторії ---");
displayAllAuditoriums();
console.log("Аудиторії для Кібернетики:", getAuditoriumsByFaculty("Кібернетика"));
console.log("Аудиторії для групи КН-21:", getAuditoriumsForGroup(group));
console.log("Сортування за місцями:", sortAuditoriumsByCapacity());
console.log("Сортування за назвою:", sortAuditoriumsByName());