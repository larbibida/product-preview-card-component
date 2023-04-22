let hid = document.querySelector('.payment');
let btn = document.querySelector('.card');
let button = document.querySelector('.button');
let hidd = document.querySelector('.all');
console.log(document.forms);
btn.addEventListener('click', () => {
  hidd.style.display = 'none';
  hid.style.display = 'flex';
})

button.addEventListener('click', () => {
  hidd.classList.add('hidden');
  hid.style.display = 'none';
  hidd.style.display = 'block';
}) 
