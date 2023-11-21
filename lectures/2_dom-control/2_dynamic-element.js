let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before')
let inputbox = document.querySelector('input');

addBtn.addEventListener('click', function()
{
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputbox.value;
  ul.appendChild(li);
});

addBeforeBtn.addEventListener('click', function()
{
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');

  li.textContent = inputbox.value;
  ul.insertBefore(li, targetLi);
})

