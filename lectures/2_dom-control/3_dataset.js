let h2 = document.querySelector('h2');
let img = document.querySelector('img');
h2.dataset.test = 'hello javascript!!';

let liList = document.querySelectorAll('li');
let selectedItem = document.querySelector('.selected-item');

for (i = 0; i <= 2; i++)
{
  liList[i].addEventListener('click', function(event)
  {
    selectedItem.textContent = event.target.textContent;
    img.setAttribute('src', event.target.dataset.img); 
  });
}