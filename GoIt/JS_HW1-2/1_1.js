function pow(a, b) {
  var result = 1;

  for (var i = 0; i < b; i++) {
    result *= a;
  }

  return result;
}

var a = prompt("введите целое цисло", "");
var b = prompt("введите степень", "");

if (a <= 0) {
  alert ('Степень ' + a + ' не поддерживается, введите целое число, введите больше 0');
} else {
  console.log( pow(a, b) );
}
