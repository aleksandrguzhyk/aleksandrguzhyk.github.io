'use strict';

const progTest = {
    title: 'ТЕСТ:',
    questions: ['Вопрос №1','Вопрос №2','Вопрос №3'],
    answers: [['Ответ №1', 'Ответ №2', 'Ответ №3'],
    ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    ['Ответ №1', 'Ответ №2', 'Ответ №3']],
    correctAnswers: ['0,1,0' , '0,1,0' , '0,0,1']
};

// write data to-, and read it from localStorage:
localStorage.setItem('test_tmpl',JSON.stringify(progTest));
const storageTest = localStorage.getItem('test_tmpl');
console.log(storageTest);
const storageTestObj = JSON.parse(storageTest);
console.log(storageTestObj);

// template rendering
const html = $(test_tmpl).html();
const content = tmpl(html, storageTestObj);
$('.wrapper').append(content);

// check unswers and show result
$("#checkres").click(function() {
  if($("#a00 input:checked").length==1 && $("#a11 input:checked").length==1 && $("#a22 input:checked").length==1)
    {$("#result").html('Поздравляем! Вы сдали тест');
     clearForm("quiz");
  } else {$("#result").html('Извините, Вы не сдали тест. Попробуйте еще разю');
          clearForm("quiz");
    }
});

// clear answers in form
function clearForm(name) {
  let delAnswer = $('input:checked');
  for (let i = 0; i < delAnswer.length; i++) {
        delAnswer[i].checked = false;
      }
};

localStorage.clear();
