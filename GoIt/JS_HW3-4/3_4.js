var test = document.createElement('div');
test.classList = 'form-group';
test.classList.add('.col-md-12');

// var header = document.querySelector('test');
var header = document.createElement('form-group');
header.classList = 'form-group';
header.innerHTML = '<h1>Тест по програмированию</h1>';
test.style.textAlign = 'center';


var question = document.querySelector('form-group');
var question1 = document.createElement('question');
question1.classList = 'question';
question1.innerHTML = '<h3>Вопрос №1</h3>';
// question1.style.textAlign = 'left';

// var checkbox1 = document.querySelector('question1');
var checkbox1 = document.createElement('checkbox');
checkbox1.classList = 'checkbox';
// checkbox.classList.add('.question1');
checkbox1.innerHTML = '<input type="checkbox" value="">Вариант ответа №1';
// checkbox.style.textAlign = 'left';

var checkbox2 = document.createElement('checkbox');
checkbox2.classList = 'checkbox';
checkbox2.innerHTML = '<input type="checkbox" value="">Вариант ответа №2';
// checkbox2.style.textAlign = 'left';

var checkbox3 = document.createElement('checkbox');
checkbox3.classList = 'checkbox';
checkbox3.innerHTML = '<input type="checkbox" value="">Вариант ответа №3';
// checkbox3.style.textAlign = 'left';


var question2 = document.querySelector('form-group');
var question2 = document.createElement('question');
question2.classList = 'question';
question2.innerHTML = '<h3>Вопрос №2</h3>';
// question2.style.textAlign = 'left';

// var checkbox1 = document.querySelector('question1');
var checkbox4 = document.createElement('checkbox');
checkbox4.classList = 'checkbox';
// checkbox.classList.add('.question1');
checkbox4.innerHTML = '<input type="checkbox" value="">Вариант ответа №1';
// checkbox.style.textAlign = 'left';

var checkbox5 = document.createElement('checkbox');
checkbox5.classList = 'checkbox';
checkbox5.innerHTML = '<input type="checkbox" value="">Вариант ответа №2';
// checkbox2.style.textAlign = 'left';

var checkbox6 = document.createElement('checkbox');
checkbox6.classList = 'checkbox';
checkbox6.innerHTML = '<input type="checkbox" value="">Вариант ответа №3';
// checkbox3.style.textAlign = 'left';


var question3 = document.querySelector('form-group');
var question3 = document.createElement('question');
question3.classList = 'question';
question3.innerHTML = '<h3>Вопрос №3</h3>';
// question3.style.textAlign = 'left';

// var checkbox1 = document.querySelector('question1');
var checkbox7 = document.createElement('checkbox');
checkbox7.classList = 'checkbox';
// checkbox.classList.add('.question1');
checkbox7.innerHTML = '<input type="checkbox" value="">Вариант ответа №1';
// checkbox.style.textAlign = 'left';

var checkbox8 = document.createElement('checkbox');
checkbox8.classList = 'checkbox';
checkbox8.innerHTML = '<input type="checkbox" value="">Вариант ответа №2';
// checkbox2.style.textAlign = 'left';

var checkbox9 = document.createElement('checkbox');
checkbox9.classList = 'checkbox';
checkbox9.innerHTML = '<input type="checkbox" value="">Вариант ответа №3';
// checkbox3.style.textAlign = 'left';


var button = document.querySelector('form-group');
var button = document.createElement('button');
button.classList = 'btn';
button.innerHTML = 'Проверить мои результаты';


var body = document.querySelector('body');
body.appendChild(test);
// test.appendChild(form-group);
test.appendChild(header);
test.appendChild(question1);
test.appendChild(checkbox1);
test.appendChild(checkbox2);
test.appendChild(checkbox3);
test.appendChild(question2);
test.appendChild(checkbox4);
test.appendChild(checkbox5);
test.appendChild(checkbox6);
test.appendChild(question3);
test.appendChild(checkbox7);
test.appendChild(checkbox8);
test.appendChild(checkbox9);
test.appendChild(button);