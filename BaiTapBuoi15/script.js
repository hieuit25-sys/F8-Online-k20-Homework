// let result = 0;
// for (let i = 0; i <= 5; i++) {
//  if (i % 2 === 0) continue;
//  result += i;
// }
// console.log(result);




// let value = 0;

// if (value) {
//  console.log('truthy');
// } else {
//  console.log('falsy');
// }




// let count = 0;
// outer: for (let i = 0; i < 3; i++) {
//  for (let j = 0; j < 3; j++) {
//  if (i === 1 && j === 1) break outer;
//  count++;
//  }
// }
// console.log(count);


// let a = '5';
// let b = 5;

// if (a == b) {
//  console.log('bằng nhau (==)');
// }
// if (a === b) {
//  console.log('bằng nhau (===)');
// }


// const user = null;
// const city = user?.address?.city ?? 'Unknown';
// console.log(city);


// let x = 1;
// let result = '';

// switch (x) {
//  case 1:
//  result += 'A';
//  case 2:
//  result += 'B';
//  case 3:
//  result += 'C';
//  break;
//  case 4:
//  result += 'D';
// }

// console.log(result);


// const nums = [1, 2, 3, 4, 5];
// let even = [];

// nums.forEach(n => {
//  if (n % 2 === 0) {
//  even.push(n);
//  }
// });

// console.log(even);


// let score = 75;
// let grade;

// if (score >= 90) {
//  grade = 'A';
// } else if (score >= 80) {
//  grade = 'B';
// } else if (score >= 70) {
//  grade = 'C';
// } else {
//  grade = 'D';
// }

// console.log(grade);


// const arr = [10, 20, 30];
// let total = 0;

// for (const val of arr) {
//  total += val;
// }

// console.log(total);


// let x = 0;
// let result = x || 'default';
// console.log(result);


// let count = 0;
// for (const char of 'hello') {
//  if (char === 'l') count++;
// }
// console.log(count);


// const arr = Array.from({ length: 4 }, (_, i) => i * 2);
// console.log(arr);


// let result = [];
// for (let i = 1; i <= 20; i++) {
//  if (i % 3 === 0 && i % 5 === 0) {
//  result.push('FizzBuzz');
//  } else if (i % 3 === 0) {
//  result.push('Fizz');
//  } else if (i % 5 === 0) {
//  result.push('Buzz');
//  }
// }
// console.log(result.length);


// let result = 0;
// for (let i = 0; i < 10; i++) {
//  if (i === 5) break;
//  result += i;
// }
// console.log(result);


// const matrix = [[1, 2], [3, 4], [5, 6]];
// let sum = 0;

// for (let i = 0; i < matrix.length; i++) {
//  for (let j = 0; j < matrix[i].length; j++) {
//  sum += matrix[i][j];
//  }
// }

// console.log(sum);


// let a = 5;
// let b = 10;

// if (a > 0 && b > 0) {
//  console.log('cả hai dương');
// } else {
//  console.log('có số không dương');
// }



// let a = 5;
// let b = 10;

// if (a > 0 && b > 0) {
//  console.log('cả hai dương');
// } else {
//  console.log('có số không dương');
// }


// let x = 15;
// let result;

// if (x > 10) {
//  if (x > 20) {
//  result = 'lớn';
//  } else {
//  result = 'trung bình';
//  }
// } else {
//  result = 'nhỏ';
// }

// console.log(result);


// let x = 0;
// let y = 5;

// if (x > 0 || y > 0) {
//  console.log('ít nhất một số dương');
// } else {
//  console.log('không có số dương');
// }


// let value = '42';

// if (typeof value === 'number') {
//  console.log('là số');
// } else if (typeof value === 'string') {
//  console.log('là chuỗi');
// } else {
//  console.log('khác');
// }


// let count = 0;
// for (let i = 0; i < 3; i++) {
//  for (let j = 0; j < 3; j++) {
//  count++;
//  }
// }
// console.log(count);


// let age = 18;
// let status = age >= 18 ? 'adult' : 'minor';
// console.log(status);


// let isLoggedIn = false;

// if (!isLoggedIn) {
//  console.log('Vui lòng đăng nhập');
// } else {
//  console.log('Chào mừng!');
// }



// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//  sum += i;
// }
// console.log(sum);


// let user = null;
// let name = user ?? 'Guest';
// console.log(name);


// let result = [];
// for (let i = 0; i <= 10; i += 3) {
//  result.push(i);
// }
// console.log(result);


// let day = 2;
// let name;

// switch (day) {
//  case 1:
//  name = 'Monday';
//  break;
//  case 2:
//  name = 'Tuesday';
//  break;
//  case 3:
//  name = 'Wednesday';
//  break;
//  default:
//  name = 'Unknown';
// }

// console.log(name);


// let i = 5;
// let count = 0;

// do {
//  count++;
//  i--;
// } while (i > 5);

// console.log(count);


// let count = 0;
// while (count < 3) {
//  count++;
// }
// console.log(count);


// const nums = [3, 1, 4, 1, 5, 9, 2, 6];
// const max = Math.max(...nums);
// const min = Math.min(...nums);
// const sum = nums.reduce((a, b) => a + b, 0);
// console.log(max, min, sum);


// const arr = new Array(3);
// console.log(arr);
// console.log(arr.length);


// const arr = [1, [2, 3], [4, [5, 6]]];
// console.log(arr.toString());
// console.log(arr.join(' | '));


// const arr = [3, 4, 5];
// const a = arr.push(6, 7);
// const b = arr.unshift(1, 2);
// console.log(a, b);
// console.log(arr);


// const arr1 = [1, 2, 3, 4];
// delete arr1[1];

// const arr2 = [1, 2, 3, 4];
// arr2.splice(1, 1);

// console.log(arr1.length, arr2.length);
// console.log(arr1[1], arr2[1]);


// const data = [1, [2, 3], [4, [5, 6]]];
// const [a, [b, c], [d, [e, f]]] = data;
// console.log(a, c, e);


// const arr = [10, 20, 30, 40];
// const result = arr.map((val, idx, array) => {
//  return val + array[array.length - 1 - idx];
// });
// console.log(result);


// const products = [
//  { name: 'A', price: 100, inStock: true },
//  { name: 'B', price: 200, inStock: false },
//  { name: 'C', price: 150, inStock: true },
//  { name: 'D', price: 80, inStock: true }
// ];
// const result = products
//  .filter(p => p.inStock && p.price >= 100)
//  .map(p => p.name);
// console.log(result);


// const arr = [1, 2, 3];
// const result1 = arr.forEach(x => x * 2);
// const result2 = arr.map(x => x * 2);
// console.log(result1);
// console.log(result2);


// const arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3);
// console.log(arr);


// const arr = [1, 2, 3, 2, 1];
// console.log(arr.indexOf(2));
// console.log(arr.lastIndexOf(2));
// console.log(arr.indexOf(2, -3));


// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(matrix[1][2]);
// console.log(matrix[2][0]);


// const users = [
//  { id: 1, name: 'Alice' },
//  { id: 2, name: 'Bob' },
//  { id: 3, name: 'Charlie' }
// ];
// const found = users.find(u => u.id === 2);
// const idx = users.findIndex(u => u.name === 'Dave');
// console.log(found, idx);


// const a = [1, 2];
// const b = [3, 4];
// const c = [5, 6];

// const r1 = a.concat(b, c);
// const r2 = [...a, ...b, ...c];
// const r3 = a.concat([b, c]);

// console.log(r1);
// console.log(r2);
// console.log(r3);


// const arr = [1, 2, 3, 2, 4, 3, 5];
// const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log(duplicates);


// const arr = [[1, 2], [3, 4], [5, 6]];
// const result = arr.reduceRight((acc, curr) => acc.concat(curr), []);
// console.log(result);


// const str = 'Hello 🌍';
// const arr1 = str.split('');
// const arr2 = [...str];
// const arr3 = Array.from(str);
// console.log(arr1.length);
// console.log(arr2.length);
// console.log(arr3.length);


// const nums = [10, 9, 2, 21, 3, 100];
// const sorted1 = [...nums].sort();
// const sorted2 = [...nums].sort((a, b) => a - b);
// console.log(sorted1);
// console.log(sorted2);


const words = ['one', 'two', 'three', 'four', 'five'];
const grouped = words.reduce((acc, word) => {
 const len = word.length; // 3, 3, 5, 4, 4
 acc[len] = acc[len] ? [...acc[len], word] : [word];
 return acc;
}, {});
console.log(grouped);


// const arr = [1, [2, [3, [4, [5]]]]];
// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));


// const fruits = ['apple', 'banana', 'cherry'];
// for (const [index, value] of fruits.entries()) {
//  if (index % 2 === 0) console.log(value);
// }


// const empty = [];
// console.log(empty.some(x => x > 0));
// console.log(empty.every(x => x > 0));


// const people = [
//  { name: 'Alice', age: 30 },
//  { name: 'Bob', age: 25 },
//  { name: 'Charlie', age: 30 },
//  { name: 'Dave', age: 25 }
// ];
// people.sort((a, b) => a.age - b.age);
// console.log(people.map(p => p.name));


// const arr = ['a', 'b', 'c', 'd'];
// const str1 = arr.join('-');
// const str2 = arr.join('');
// const back = str1.split('-');
// console.log(str1, str2, back.length);


// const arr = [1, 2, 3, 4, 5];
// const a = arr.slice(1, 3);
// const b = arr.slice(-2);
// const c = arr.slice(2, -1);
// console.log(a, b, c);
// console.log(arr.length);


// const arr = [1, 2, 3, 4, 5];
// arr.fill(0, 2, 4);
// console.log(arr);

// const matrix = new Array(3).fill([]);
// matrix[0].push(1);
// console.log(matrix);


// const sentences = ['Hello World', 'Foo Bar'];
// const words = sentences.flatMap(s => s.split(' '));
// console.log(words);
// console.log(words.length);


// const pairs = [['a', 1], ['b', 2], ['c', 3]];
// const obj = pairs.reduce((acc, [key, val]) => {
//  acc[key] = val;
//  return acc;
// }, {});
// console.log(obj);
// console.log(Object.keys(obj).length);


// const result1 = Array.from({ length: 5 }, (_, i) => i * 2);
// const result2 = Array.from('hello');
// const result3 = Array.from(new Set([1, 2, 2, 3, 3]));
// console.log(result1);
// console.log(result2.length);
// console.log(result3);


// const data = [[1, 2], [3, 4], [5, 6]];
// const result = data.reduce((acc, curr) => acc + curr.reduce((a, b) => a + b, 0), 0);
// console.log(result);


// const params = [
//  ['name', 'Alice'],
//  ['age', '30'],
//  ['city', 'Hanoi']
// ];
// const query = params
//  .map(([key, val]) => `${key}=${val}`)
//  .join('&');
// console.log(query);


// const original = [{ x: 1 }, { x: 2 }];
// const copy = [...original];
// copy[0].x = 99;
// copy.push({ x: 3 });
// console.log(original.length);
// console.log(original[0].x);


// const arr = [1, NaN, 3, undefined, null];
// console.log(arr.includes(NaN));
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(undefined));


// const arr = [1, 2, 3, 4, 5];
// const removed = arr.splice(1, 2, 'a', 'b', 'c');
// console.log(arr);
// console.log(removed);
