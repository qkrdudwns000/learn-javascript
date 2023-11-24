'use strict'

// use strict : 선언되지도 않은 변수(암시적 변수)가 호출되는 것을 막기위함
number = 2;
console.log(number);

// let me = '박영준';
// console.log(me);
// me = '영준';
// console.log(me);

// const username = '영준팍';
// console.log(username);

// {
//   let a = '지역변수';
//   console.log('a: ', a);
//   {
//     let b = '지역변수2';
//     console.log('b: ',b);
//   }
// }

// function sum(a, b)
// {
//   let result = a + b;
//   return result;
// }

// console.log(sum(3,5));

//**  var 키워드는 스코프 안/밖, 스크립트 순서를 신경쓰지 않기에 요즘에 안쓰인다.
// console.log(number);
// {
//   var number = 2;
// }

// 함수 호이스팅 : 함수는 내부적으로 가장 최상단으로 끌어서 실행하는것
// let 으로 선언된 함수는 호이스팅이 발생하지 않음.
sum(1,2);
function sum(a, b)
{
  return a + b;
}

let print = function(){
  return 'hello';
}
console.log(print());
