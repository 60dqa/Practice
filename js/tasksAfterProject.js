//1) Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
function getDays(year , month) {
    monthNum =  new Date(Date.parse(month +" 1,"+year)).getMonth()+1
    return (new Date(year, monthNum, 0).getDate());
}


// getDays(2021 , 2)
// getDays(2021 , 'February')

//2) Через прототип расширьте встроенный объект Number методом isOdd(), 
//который возвращает true, если число нечетное. 

Number.prototype.isOdd = function () {
    if(this % 2 !== 0){
        return true;
    } else return false;
    
}
var a = 3;
console.log(a.isOdd());

// 3) Написать функцию every, которая будет принимать первым аргументом массив,
//  а вторым функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false).
//   Результатом функции должно быть логическое выражение true/false  в зависимости от того,
//  выполняется ли условие для каждого из элементов.

var every = function (arr, call){
    for(var i =0; i < arr.length; i++){
      if(!call(arr[i])){
        return false;
      }
    }
    return true;
  }
  
  console.log(every([2, 2, 4], function(num) {
    return  num % 2 === 0;
  }));

   module.exports = {getDays , every};