'use strict';
//selecting elements
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const currentplayer = document.getElementById('current--0');
const currentdealer = document.getElementById('current--1');
const cardel = document.querySelector('.card');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
let activeplayer = 0;
let scores = [0, 0];
let wcard = [];
let currentscore = 0;
let endofgame = 0;
//start conditins
score0el.textContent = 0;
score1el.textContent = 0;
cardel.classList.add('hidden');
//get cards functinality
btnroll.addEventListener('click', function () {
  //genrating a random card
  wcard[0] = Math.trunc(Math.random() * 13) + 1;
  wcard[1] = Math.trunc(Math.random() * 4) + 1;
  console.log(wcard);
  //display card
  cardel.classList.remove('hidden');
  cardel.src = `${wcard[0]}_${wcard[1]}.png`;
  // if the card is picture
  if (wcard[0] === 11 || wcard[0] === 12 || wcard[0] === 13) {
    wcard[0] = 10;
  }
  // if the card is ace
  if (wcard[0] === 1) {
    let chooser = prompt('you got a ace please choose 1 or 11');
    if (Number(chooser) === 11) wcard[0] = 11;
  }

  //update the score
  currentscore = currentscore + wcard[0];
  scores[activeplayer] = scores[activeplayer] + wcard[0];
  document.getElementById(`current--${activeplayer}`).textContent =
    currentscore;
  scores[activeplayer] = currentscore;
  if (scores[0] >= 22) alert('such a looser');
  if (scores[1] > scores[0] && scores[1] < 22) alert('such a looser');
  if (scores[1] >= 22 && scores[0] < 22) alert('you win');
});
btnhold.addEventListener('click', function () {
  document.getElementById(`score--${activeplayer}`).textContent = currentscore;
  currentscore = 0;
  if (activeplayer) endofgame = 1;
  else activeplayer = 1;
  if (endofgame && scores[0] > scores[1] && 0 < scores[1] < 22)
    alert('you win!!!!');
});
console.log('scores');
btnnew.addEventListener('click', function () {
  alert('new game');
  activeplayer = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
});
