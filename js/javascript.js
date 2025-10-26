// Lesson 2

// 1

// let test = 1;
// if (test > 0) {
//   console.log(true);   true
// } else {
//     console.log(false);
// }

// let test = 0;
// if (test > 0) {
//   console.log(true);   false
//   true;
// } else {
//   console.log(false);
// }

// let test = -3;
// if (test > 0) {
//   console.log(true);   false
//   true;
// } else {
//   console.log(false);
// }

// 2

// let a = "test"
// if ( a === 'test') {
//   console.log(true);  true
// } else {
//   console.log(false);
// }

// let a = 'test';
// if ("qwerty" === 'test') {
//   console.log(true);         false
//   true;
// } else {
//   console.log(false);
// }

// let a = 'test';
// if ("true" === 'test') {
//   console.log(true);         false
//   true;
// } else {
//   console.log(false);
// }

// 3

// let number = 1
// if (number > 10) {
//   console.log(-5);  answer:5
// } else {
//   console.log(+5);
// }

// let number = 10;
// if (number > 10) {
//   console.log(-5);  answer:5
// } else {
//   console.log(+5);
// }

// let number = 13;
// if (number > 10) {
//   console.log(-5);  answer:-5
// } else {
//   console.log(+5);
// }

// 4

// const monts = Number(
//   prompt('Введіть число від 1-12, щоб побачити відповідний місяць року')
// );
// let name;

// switch (monts) {
//   case 1:
//     name = 'Січень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 2:
//     name = 'Лютий';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 3:
//     name = 'Березень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 4:
//     name = 'Квітень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 5:
//     name = 'Травень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 6:
//     name = 'Червень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 7:
//     name = 'Липень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 8:
//     name = 'Серпень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 9:
//     name = 'Вересень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 10:
//     name = 'Жовтень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 11:
//     name = 'Листопад';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   case 11:
//     name = 'Грудень';
//     alert(`Ваш місяць: ${name}`);
//     break;
//   default:
//     alert('Невірне число');
// }

// 5

// const number = prompt('Введіть тризначне число');
// let total = 0;

// for (let i = 0; i < number.length; i++) {
//   total += Number(number[i]);
// }
// alert(`Сума цифр:${total}`);
