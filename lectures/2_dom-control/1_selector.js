// 1) get 메서드
let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트', items[0]);

let tags = document.getElementsByTagName('li');
console.log(tags);

// HTML 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2: ', h2);

let item = document.querySelector('.item');
console.log('query item: ', item);

let allItem = document.querySelectorAll('.item');
console.log(allItem);

h2.textContent = '운동!!!';
// h2.innerHTML = '<span>운동@@@</span>';

//직접할당
//document.querySelector('body').innerHTML = '<span>운동</span>'; 

let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요!');
input.setAttribute('required', '');
input.removeAttribute('placeholder');
input.removeAttribute('required');


let helloItem = document.querySelector('.hello');
// helloItem.style.color = 'white';
// helloItem.style.backgroundColor = 'black'

helloItem.classList.add('dark', 'one');
helloItem.classList.remove('one');
