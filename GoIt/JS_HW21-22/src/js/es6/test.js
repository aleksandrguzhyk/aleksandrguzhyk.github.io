"use strict";

function pow(a, b) {
  let result = 1;

  for (let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
}

const a = prompt("введите целое цисло", "");
const b = prompt("введите степень", "");

if (a <= 0) {
  alert ('Степень ' + a + ' не поддерживается, введите целое число, введите больше 0');
} else {
  console.log( pow(a, b) );
}
