let number1 = '';
let number2 = '';
let operator = '';
let finish = false;
const screen = document.querySelector('.screen')

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let operators = ['+', '-', '/', 'X', '%'];

let btnReset = document.querySelector('.btn-ac');
btnReset.addEventListener('click', reset);

function reset() {
   number1 = '';
   number2 = '';
   operator = '';
   finish = false;
  screen.textContent = 0;
}

function percentage() {
  return (number1 / 100) * number2;
}

let buttons = document.querySelectorAll('.btn');
for (let button of buttons) {
  button.addEventListener('click', function (e) {
    const value = button.textContent;
    
    if (numbers.includes(value)) {
      if (number2 === '' && operator === '') {
        if (value === '.' && number1.includes('.')) {
          number1 += '';
          screen.textContent = number1;
        } else {
          number1 += value;
          screen.textContent = number1;
        }

      } else if (number1 !== '' && number2 !== '' && finish) {  
        number2 = value;
        finish = false;
        screen.textContent = number1 + operator + number2;
      } else if (value === '.' && number2.includes('.')) {
        number2 += '';
        screen.textContent = number2;
      }
      else {
        number2 += value;
        screen.textContent = number1 + operator + number2;
      }
      console.log(number1, number2, operator)
      return;
    }


    if (operators.includes(value)) {
      operator = value;
      screen.textContent = number1 + operator;
      console.log(number1, number2, operator)
      return;
    }

    if (value === '=') {
      if (number2 === '') number2 = number1;
      switch (operator) {
        case '+':
          number1 = (+number1) + (+number2);
          break;
        case '-':
          number1 = number1 - number2;
          break;
        case 'X':
          number1 = number1 * number2;
          break;
        case '/':
          if (number2 === '0') {
            screen.textContent = 'Error';
            number1 = '';
            number2 = '';
            operator = '';
            return;
          }
          number1 = number1 / number2;
          break;
        case '%':
          number1 = percentage(number1, number2);
          break;   
      }
      finish = true;
      screen.textContent = number1;
      console.log(number1, number2, operator)
    }

  })
}

