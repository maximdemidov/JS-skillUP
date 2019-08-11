// // const someKey = 'asdfasdfasdfasdfasdf';

// // const tempObj = {
// //   foo: 'bar',
// // };

// // const tempObj2 = {
// //   someKey: 'some value',
// // };

// // const obj = {
// //   [someKey]: 'asdfas',
// //   'first \n Name': 'Andrey',
// //   lastName: 'Cherepaha',
// //   [JSON.stringify(tempObj)]: 'Object value',
// //   [JSON.stringify(tempObj2)]: 'Object value | safdasdfasdf',
// // };

// // console.log(obj);

// // const producer = 'manufacture';

// // const filter = {
// //   [producer]: null,
// //   date: null,
// //   diagonal: null,
// // };

// // filter.diagonal = '> 40';
// // filter[producer] = 'LG';

// // const arr = [1,2,3,3,4,5,5,67,78,8,9];
// // arr[100] = 2234234;

// // const students = [
// //   { firstName: 'Vasya' },
// //   { firstName: 'Vasya1' },
// //   { firstName: 'Vasya2' },
// //   { firstName: 'Vasya3' },
// // ];

// // const howIsHereToday = [
// //   false,
// //   false,
// //   false,
// //   false,
// // ]

// // howIsHereToday[1] = true;

// // arr.push(); // добавляет элемент
// // arr.pop(); // убирает элемент и возвращает его;

// // console.log(arr);

// // delete filter[producer];

// // console.log(filter);






// // Function declaration
// // function getNumbersAndSum() {
// //   const a = +prompt('Insert a');
// //   const b = +prompt('Insert b');
// //   const result = a + b;

// //   return result;
// // }

// // Function definition
// const getNumbersAndSum = function () {
//   const a = +prompt('Insert a');
//   const b = +prompt('Insert b');
//   const result = a + b;

//   return result;
// };

// // const sum = getNumbersAndSum();

// // console.log(sum, sum + 10);

// const var3 = 'sadfasdf';

// // Self-execution function
// (function () {
//   const var1 = 'asdfasdf';
//   const var2 = '234234234';

//   const var4 = 'asdfasdfasdfasdfasdfasdfsadf';


//   function someFunc() {
//     const var4 = 'popoop';

//     console.log(var1, var2, var3, var4);
//   }

//   someFunc();


//   //console.log(var1, var2, var3, var4);
// })();

// //console.log(var1, var2, var3);

// // Arrow function
// //const sumFunc = (a, b) => a + b;



// function sumFunc() {
//   let sum = 0;

//   for (let number of arguments) {
//     sum = sum + number;
//   }

//   console.log(sum);

//   return sum;
// }

// // sumFunc(4, 5);
// // sumFunc(345);
// // sumFunc(1, 2, 3);
// // sumFunc();

// // function sumTwoNumbers(a = 0, b = 0) {
// //   console.log(a, b, arguments);
// //   return a + b;
// // }

// // console.log(sumTwoNumbers(1,2));
// // console.log(sumTwoNumbers(1, undefined));
// // console.log(sumTwoNumbers(undefined, 1));


// const showAll = (...args) => {
//   console.log(...args);
// }

// showAll(1);
// showAll(1,2,3);

// const arr = [1,1,12,2,23,324];
// showAll(...arr);

// const arr1 = [1,2,3];
// const arr2 = [5,6,7];
// const arr3 = [...arr1, 4, ...arr2];

// const obj1 = { foo: 'bar', sameKey: '1' };
// const obj2 = { foo2: 'bar2', sameKey: '2' };
// const obj3 = {
//   sameKey: '3',
//   ...obj1,
//   ...obj2,
//   customKey: 'customValue',
// };

// const obj4 = Object.assign(
//   { sameKey: '3' },
//   obj1,
//   obj2,
//   { customKey: 'customValue'}
// );

// const { sameKey, customKey, ...nextObj } = obj3;
// const nextObj3 = { ...obj3 };
// delete nextObj3.sameKey;
// delete nextObj3.customKey;

// const [first, second, ...nextArr] = [1,2,3,4,5,6,7];
// //console.log(first, second, nextArr);

// //console.log(nextObj, nextObj3);


// //console.log(sameKey, customKey);

// function helloUser({ firstName = 'Anonymous', lastName = '' }) {
//   console.log('Hello ' + firstName + ' ' + lastName + '!');
// }

// helloUser({
//   id: 'adfasfasdf',
//   email: 'asdfasdf@sadf.asd',
//   //firstName: 'Andrey',
//   //lastName: 'Cherepaha',
// });