let rectangle = document.querySelector('#rectangle')
let body = document.querySelector('body');

rectangle.addEventListener('mousedown', function(event)
{
  //console.log('mousedown');
  //client - 브라우저 기준
  console.log('clientX : ', event.clientX, 'clientY : ', event.clientY);
  //page - 페이지(스크롤 포함) 기준 (전체웹문서)
  console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);
  //해당 요소의 다양한 위치,크기를 알수 있음
  console.log(event.target.getBoundingClientRect());
})
// rectangle.addEventListener('mouseup', function()
// {
//   console.log('mouseup');
// })

// rectangle.addEventListener('mouseenter', function()
// {
//   console.log('mouseenter');
// })
// rectangle.addEventListener('mouseleave', function()
// {
//   console.log('mouseleave');
// })
// rectangle.addEventListener('mousemove', function()
// {
//   console.log('mousemove');
// })

body.addEventListener('click', function(event)
{
  console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);
  let div = document.createElement('div');
  div.classList.add('circle');
  div.style.left = (event.pageX - 25) + 'px';
  div.style.top = (event.pageY - 25) + 'px';
  body.append(div);
});