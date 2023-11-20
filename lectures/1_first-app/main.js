console.log("HELLO!!!");

//  경고창
// alert("위험해!")

let str = 'hello javascript';
let num = 30;
console.log('문자열 : ', str, num);

function SayHello()
{
  console.log("함수 호출");
  console.log("함수 호출2");
}

SayHello();

let obj = {
  num: 30, // 프로퍼티(속성)
  SayHello: function(){
    console.log("obj>함수 호출");
    console.log("obj>함수 호출2");
  },
};

console.log(obj.num);
obj.SayHello();