// 1) Написать функцию, которая проверяет является ли строка палиндромом;

// var result;
// function isPalidrom(str) {
//   var newStr = "";
//   str = str.toLowerCase();
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//     if (str == newStr) {
//       result = "It is palidrom";
//     } else {
//       result = "Not palidrom";
//     }
//   }
//   return result;
// }

// console.log(isPalidrom('madam'));

    // isPalindrome('дед доход');

//  function validation(str) {
//      if (typeof str !== 'string'){
//          return 'incorrect';

//      }
//      if (str.length <= 2 && str.length >=20){
//          return 'invalid';
//      }
//      if (str[0] !== str[0].toUpperCase()){
//          return 'invalid';
//      }
//      var minUpper = 65;
//      var maxupper = 90;
//      var minLower = 97;
//      var maxLower = 122;


//         var a = [' ', '?', ':', '-', '!', '.'];


//  }
// var result;
//  function sumOfarguments(str, number){
//      if ((typeof(number) === 'number') && (number % 15 === 0)){
//          number *= -1;
//          result = +str + number;
//          console.log(result);
//      }
//      else {
//          console.log('false');
//      }
//      console.log(typeof result);
//  }

//  sumOfarguments('45', 15);


// function stars(col, row) {
//   for(var i = 1; i <= row; i++) {
//       console.log('*');
//     for(var j = 1; j <= col; j++){
//         if (i > j) {
//           console.log('*');
//         }
//       }
      
//     }
// }

// /*stars();*/

// /*1) Написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция
//  принимает в качестве параметра, с такими условиями:
// вывод three вместо чисел, кратных 3;
// вывод five вместо чисел, кратных 5;
// вывод threeFive вместо чисел, кратных как 3, так и 5.
// Пример
// YourFuncName(5)
// Результат
// // 1
// // 2
// // three
// // 4
// // five*/

// function findNumber(num) {
//   for( var i = 1; i <= num; i++) {
//     if ((i % 3 === 0) & (i % 5 === 0)) {
//       console.log("threeFive");
//     }
//     else if (i % 5 === 0) {
//       console.log("five");
//     }
//     else if (i % 3 === 0) {
//       console.log("three");
//     }
//     else {
//       console.log(i);
//     }
    
//   }
  
// }

// console.log(findNumber(15));

// /*Нужно выйти из цикла, изменив только две отмеченные строки. 
// Результат в консоли сейчас останавливается на 19 19. Должен на 15 14.
// for (let i = 0; i < 20; i++) { //! Эту строку можно изменить
//  for (let j = 0; j < 20; j++) {
//  if (i === 15 && j === 15) {
//  //! Эту строку можно изменить
//  }
//  console.log(i, j);
//  }
// }
// */

//   for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
//   for (let j = 0; j < 20; j++) {
//   if (i === 15 && j === 15) {
//     break;
//   //! Эту строку можно изменить
//   }
//   console.log(i, j);
//   }
// }

// mark: for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
//   for (let j = 0; j < 20; j++) {
//   if (i === 15 && j === 15) {
//     break mark;
//   //! Эту строку можно изменить
//   }
//   console.log(i, j);
//   }
// }
// /*3) Нужно написать функцию, которая проверяет, являются ли две строки анаграммами,
//  причем регистр букв не имеет значения. Учитываются лишь символы; 
//  пробелы или знаки препинания в расчет не берутся.
// Анаграмма- слово, которое содержит все буквы другого
//  слова в том же количестве, но ином порядке*/
// function checkAnagramm (str1, str2){
//    for(var i = 0; i < str1.length; i++){
//        for(var k = 0; k < str2.length; k++){
//            if ((str1[i] === str2[k]) && (str1 !== str2)){
//                console.log("Ваше слово анограмма");
//            } else {
//              console.log("Ваше слово не анограмма");
//            }
//            console.log(str1);
//            console.log(str2);
//        } 
//    }
//  }

// console.log(checkAnagramm("amma", "mara"));



// // 1)Cоздать функцию, которая возвращает true или false, в зависимости от того,
// // может ли сумма любых двух чисел из массива быть равной заданному значению.

// // Другими словами, есть ли в массиве два целых числа x и y, которые при сложении равны указанному значению?

// // Пример А

// // Если нам дали массив [1, 2, 4, 9] и значение 8, функция вернет false, 
// //потому что никакие два числа из массива не могут дать 8 в сумме.

// // Пример Б

// // Но если это массив [1, 2, 4, 4] и значение 8, функция должна вернуть true, потому что 4 + 4 = 8.
// var arr = [1, 2, 4, 9];
// function sumOfelem(sum) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//           if (arr[i] + arr[j] === sum) {
//             return true;
//           }
//         }
//       }
//       return false;

// }

// // console.log(sum.every(element => element % 2 === 0));
// console.log(sumOfelem(8));

// // Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
// // Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]


// function simpleArr(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if(!Array.isArray(arr[i])){
//             newArr.push(arr[i]);
//         }
//         else {
//             newArr = newArr.concat(simpleArr(arr[i]));
//         }
//         console.log(newArr);
//     }
    
//     return newArr;
    
// }

// console.log(simpleArr([1, 2, 'asd', [3, 4, [5]]]));


// // )Напишите функцию, которая разделяет массив на части заданного размера.
// // Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
// var arr = [1, 2, 3, 4, 5 , 6];
// function spliceArr(arr , num) {
//     var newArr = [];
//     while (arr.length > 0) {
//         newArr.push(arr.splice(0, num));
//     }
//     return newArr;
// }

// console.log(spliceArr(arr , 4));

//module.exports = { isPalidrom , sumOfarguments };

// var obj1 = {
//   a : 1,
//   b: 2
// };
// var obj2 = {
//   c : 1,
//   b: 2
// };

// function objectMix(object1, object2) {
//   // for (Object.keys in object1 && Object.keys in object2 ) {
//   //   return Object;
//     var keysObj1 = Object.keys(object1);
//     // var keysObj2 = Object.keys(object2);
//     var newObj = {};
//     for (var i = 0 ; i < keysObj1.length; i ++) {
//         if (object1[keysObj1[i]] === object2[keysObj1[i]]){
//           newObj[keysObj1[i]] = object1[keysObj1[i]];
//         }
      
//     }
//     return newObj;
    
//    }

// console.log(objectMix(obj1 , obj2));


//)Напишите функцию, которая убирает повторяющиеся значения в массиве.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

// var arr = [1, 2, 3, 1, 2];
// var arrEnd = [];
// function removeArr(arr) {
//   for (var i = 0 ; i < arr.length; i ++){
//     for (var j = 0 ; j < arr.length; j ++){
//       if (arr[i] !== arr[j]){
//         arrEnd.push(arr[j]);
//       }
//     }
    
//   }
//   return arrEnd;
// }
// console.log(removeArr(arr));
// var a = function() {};
// console.log(typeof a);

// 2)Напишите функцию, которая делает глубокое сравнение объектов.

// Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true


// obj1 = { a: 1, b: { c: 1 } };
// obj2 = { a: 1, b: { c: 1 }, c: 56 };

// function getDeep(object1, object2) {
//   var result = false;

//   if (Object.keys(object1).length !== Object.keys(object2).length) return false;

//   for (var key in object1) {
//     if (typeof object1[key] === "object" && typeof object2[key] === "object") {
//       var temp = getDeep(object1[key], object2[key]);
//       if (temp) {
//         result = temp;
//       } else {
//         return false;
//       }
//     } else if (object1[key] === object2[key]) {
//       result = true;
//     } else {
//       return false;
//     }
//   }
//   return result;
// }
// console.log(getDeep(obj1, obj2));

// 1)Реализуйте класс MyString, который будет иметь следующие методы: 
//метод reverse(), 
// который параметром принимает строку, а возвращает ее в перевернутом виде,
// метод ucFirst(), 
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и
// метод ucWords,
//  который принимает строку и делает заглавной первую букву каждого слова этой строки.

// Наш класс должен работать так:
// function myString (str) {
//     this.str = str;
//     this.reverse = function reverse() {
//         var newStr = "";
//         for (var i = str.length - 1; i >= 0; i--){
//             newStr += str.charAt(i);
//         }
//         return newStr;
//     }
//     this.ucFirst = function ucFirst() {
        
//     }
//     this.ucWords = function ucWords() {
        
//     }
// }




// var str = new MyString(str);

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'


// function  MyString(str){
//     this.str = str;
//     this.reverse = function reverse(){
//         var newStr = '';
//         for (var i = this.str.length - 1; i >= 0; i--) {
//             newStr += this.str.charAt(i);
//         }
//         return newStr
//     }
//     this.ucFirst = function ucFirst(){
//         if(!str) return str;
//         return str[0].toUpperCase() + str.slice(1);
//     }
//     this.ucWords = function ucWords(){
//         var newString = '';
//         str = str.split(' ')
//         for(var i =0 ; i < str.length;i++){
//             str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);   
//         }

//         return str.join(' ')
    
//     }
// }

// var str = new MyString(str);
// console.log(str.reverse('abcde'));
// console.log(str.ucFirst('abcde'));
// console.log(str.ucWords('abcde abcde abcde'));




