'use strict';

const checkBtn = document.querySelector('.check');
const input = document.querySelector('.number-input');
const guestion = document.querySelector('.question');
const h1 = document.querySelector('.h1');
const startGues = document.querySelector('.guess-message');
let numberGues = guestion.innerText = Math.floor(Math.random()* 20) + 1;
const againBtn = document.querySelector('.again');
let point = document.querySelector('.score');
let point20 = Number(20);
let higScore = document.querySelector('.highscore');
let maxPoint = Number(0);



guestion.innerText = '???';
checkBtn.addEventListener('click', function(){
  if (Number(input.value) == Number(numberGues)){
    guestion.innerText = numberGues;
    h1.innerHTML = 'Вы угадали!!!';
    startGues.innerHTML = 'Вы угадали!!!';
    document.body.style.backgroundColor = 'green';
    guestion.style.width = '30rem';
    higScore.innerHTML = point20;
  }
  if (Number(input.value) > Number(numberGues)){
    startGues.innerHTML = 'Больше!!!';
    point.innerHTML = --point20;
  }
  if (Number(input.value) < Number(numberGues)){
    startGues.innerHTML = 'Меньше!!!';
    point.innerHTML = --point20;
  }
  if (point20 == 0){
    h1.innerHTML = 'Проиграли!!!';
    startGues.innerHTML = 'Проиграли!!!';
    document.body.style.backgroundColor = 'red';
    numberGues = guestion.innerText = Math.floor(Math.random()* 20) + 1;
  }

})
againBtn.addEventListener('click', function(){
  numberGues = guestion.innerText = Math.floor(Math.random()* 20) + 1;
  guestion.innerText = '???';
  h1.innerHTML = 'Угадай число!';
  startGues.innerHTML = 'Начни угадывать';
  document.body.style.backgroundColor = 'black';
  guestion.style.width = '25rem';
  point.innerHTML = '20';
  point20 = Number(20);

})

