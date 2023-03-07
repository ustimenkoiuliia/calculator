let result = document.querySelector('#result');
let expression = document.querySelector('#expression')
let btnAc = document.querySelector('.btn-ac')
let btnPlusMinus = document.querySelector('.btn-plus-minus')


let buttons = document.querySelectorAll('.btn');
for (let button of buttons) {
  button.addEventListener('click', showOnScreen)
}




function calc(number1, number2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 + number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
    case '%':
      result = percentage();
  }
}

function percentage(number1, number2) {
  return (number1 / 100) * number2;
}

function showOnScreen(pressedButton) {
  return screen.innerHtml = pressedButton.textContent;
}

