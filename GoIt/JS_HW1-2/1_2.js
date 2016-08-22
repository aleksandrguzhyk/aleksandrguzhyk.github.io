<<<<<<< HEAD
var names = [5];
for (var i = 0; i < 5; i++) {
    var name = prompt('Введите имя ' + (i + 1) + ': ');
    if (name === '') {
        break;
    }
    else {
        names[i] = name;
    }
}

var userName = prompt("Введите ваше имя: ");
if (!compareNames(userName)) {
    alert("Error!\nUser not found");
}

function compareNames(name) {
    for (var i = 0, l = names.length; i < l; i++) {
        if (names[i] == name) {
            alert(name + ', вы успешно вошли');
            return true;
        }
    }
    return false;
}
=======
var names = [5];
for (var i = 0; i < 5; i++) {
    var name = prompt('Введите имя ' + (i + 1) + ': ');
    if (name === '') {
        break;
    }
    else {
        names[i] = name;
    }
}

var userName = prompt("Введите ваше имя: ");
if (!compareNames(userName)) {
    alert("Error!\nUser not found");
}

function compareNames(name) {
    for (var i = 0, l = names.length; i < l; i++) {
        if (names[i] == name) {
            alert(name + ', вы успешно вошли');
            return true;
        }
    }
    return false;
}
>>>>>>> 8f26ab5a9066e8dfe26057e8f80fbf8deaf29a48
