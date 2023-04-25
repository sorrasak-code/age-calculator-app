// input
const dayIn = document.querySelector('#day')
const monthIn = document.querySelector('#month')
const yearIn = document.querySelector('#year')
//output
const dayOut = document.querySelector('#DD')
const monthOut = document.querySelector('#MM')
const yearOut = document.querySelector('#YY')

//submitBtn
const submit = document.getElementById("submit-btn");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31,28,31,30,31,30,31,31,30,31,30,31]
function check() {
  const inputs = document.querySelectorAll('input');
  let validator = true ;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = 'red';
      parent.querySelector('small').innerHTML = 'this field is required.';
      validator = false;
    } else if (monthIn.value > 12){
      monthIn.style.borderColor = 'red';
      monthIn.parentElement.querySelector('small').innerHTML = 'must be valid month.';
      validator = false;
    } else if (dayIn.value > 31){
      dayIn.style.borderColor = 'red';
      dayIn.parentElement.querySelector('small').innerHTML = 'must be valid day.';
      validator = false;
    } else if (yearIn.value > year) {
      yearIn.style.borderColor = 'red';
      yearIn.parentElement.querySelector('small').innerHTML = 'must be valid year.'
    } else{
      i.style.borderColor = 'black';
      parent.querySelector('small').innerHTML = '';
      validator = true;
    }
  });
  return validator;
}

function Submit(e) {
  e.preventDefault();
  if (check()) {
    if (dayIn.value > day) {
      day = day + months[month - 1];
      month = month - 1 ;
    }
    if (monthIn.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayIn.value;
    const m = month - monthIn.value;
    const y = year - yearIn.value;

    dayOut.innerHTML = d;
    monthOut.innerHTML = m;
    yearOut.innerHTML = y;
  }
}

submit.addEventListener('click', Submit);


