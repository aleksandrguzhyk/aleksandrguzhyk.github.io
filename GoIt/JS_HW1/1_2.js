var users = [];

  users[0] = prompt("введите имя 1");
  users[1] = prompt("введите имя 2");
  users[2] = prompt("введите имя 3");
  users[3] = prompt("введите имя 4");
  users[4] = prompt("введите имя 5");

console.log( users );

function names(name) {
  var users = 1;

  for (var i = 0; i < b; i++) {
    users = name;
  }

  return users;
}
var name = prompt("Введите Ваше имя");

if ( name == users[0] || name == users[1] || name == users[2] || name == users[3] || name == users[4] ) {
  alert ( name + ', вы успешно вошли' );
} else {
  alert ( name + ' нет в списке зарегистрированнх пользoвателей, введите правильное имя' );
}
