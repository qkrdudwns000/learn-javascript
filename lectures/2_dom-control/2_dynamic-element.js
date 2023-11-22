let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before')
let inputbox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#target-remove');

let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function()
{
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputbox.value;

  let btn = document.createElement('button');
  btn.addEventListener('click', removeParentNode);
  btn.textContent = 'X';
  btn.classList.add('remove-btn');
  li.appendChild(btn);
  ul.appendChild(li);

  ClearInputBox(inputbox);
});

addBeforeBtn.addEventListener('click', function()
{
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');

  li.textContent = inputbox.value;
  ul.insertBefore(li, targetLi);
})

removeTargetBtn.addEventListener('click',function()
{
  let targetLi = document.querySelector('li#target');
  targetLi.remove();

});

removeBtn.addEventListener('click', removeParentNode);

function ClearInputBox(box)
{
  box.value = '';
  box.focus();
}

function removeParentNode(event)
{
  event.target.parentNode.remove();
  ClearInputBox(inputbox);
}