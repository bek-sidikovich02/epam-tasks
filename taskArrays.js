// 1

// const movies = ['Gladiator', 'Teminator', 'Mission impossible'];

// for (let movie in movies) {
//   console.log(movies[movie]);
// }

// 2
// function afunction() {
//   var tempString = '["test"' + ', "test2"]';
//   var tempString2 = '["test", "test2"]';

//   console.log(JSON.parse(tempString)[0]); // output not 'test'
//   console.log(JSON.parse(tempString2)[0]); // output test
// }

// afunction();

// 3

// const namesFriends = ['Bek', 'Ben', 'Tom', 'Ann'];

// const foo = [];
// namesFriends.forEach((name) => {
//   return foo.push(name + ' ' + 'hello');
// });

// console.log(foo);

// 4

// const nums = [1, 3, 5, 7, '8'];
// const changeToBoolean = Boolean(nums);

// console.log(changeToBoolean);

// 5

// const sortNumbers = [1, 6, 7, 8, 3, 4, 5, 6];

// const descArr2 = sortNumbers.sort((a, b) => (a > b ? -1 : 1));
// console.log(descArr2);

// 5

// const numbersThree = [1, 6, 7, 8, 3, 4, 5, 6];

// const foo = numbersThree.filter((number) => number > 3);

// console.log(foo);

// 6

// function findPosition(arr, idx){
//     return arr.indexOf(idx);
//  }

// 7

// let a = 1,
//   n = 10;

// //
// while (a < n) {
//   console.log(a);
//   a += 1;
// }

// 8

// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// 9

// for (var i = 10; i >= 0; i--) {
//     if (i % 2 != 0) {
//       console.log(i)
//     }
//   }
