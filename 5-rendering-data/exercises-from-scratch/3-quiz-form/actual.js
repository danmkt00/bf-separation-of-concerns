'use strict';

const actual = ({ question, answers, correct, selected }) => {
  const form = document.createElement('form');

  const pEL = document.createElement('p');
  pEL.innerText = question;
  form.append(pEL);

  answers.forEach((answer, index) => {
    const inputEl = document.createElement('input');
    inputEl.type = 'radio';
    inputEl.name = 'answers';

    const text = document.createElement('text');
    text.innerText = answer;

    if (index === selected) {
      inputEl.checked = 'true';
      inputEl.setAttribute('checked', 'true');

      if (index === correct) {
        text.className = 'correct';
        text.innerText += ' √';
      } else {
        text.className = 'incorrect';
        text.innerText += ' ✖';
      }
    }

    form.append(inputEl, text, document.createElement('br'));
  });

  return form;
};
