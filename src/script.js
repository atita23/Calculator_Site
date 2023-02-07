class Calculator{
    constructor(prev_op, current_op){
        this.prev_op = prev_op;
        this.current_op = current_op;
        this.clear();
    }

    clear(){
        this.current_op = '';
        this.prev_op = '';
        this.operation = undefined;
    }

    // delete(){

    // }

    appendNumber(number){
        if(number === '.' && this.current_op.includes('.')) return
        this.current_op = this.current_op.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.current_op === '') return
        if(this.prev_op !== ''){
            this.compute();
        }
        this.operation = operation;
        this.prev_op = this.current_op;
        this.current_op = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.prev_op);
        const current = parseFloat(this.current_op);
        if(isNaN(prev) || isNaN(current)) return

        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.current_op = computation
        this.operation = undefined
        this.prev_op = ''
        }
        
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }    
     

    updateDisplay() {
        this.current_op.innerText =
          this.getDisplayNumber(this.current_op)
        if (this.operation != null) {
          this.prev_op.innerText =
            `${this.getDisplayNumber(this.prev_op)} ${this.operation}`
        } else {
          this.prev_op.innerText = ''
        }
      }
}
    

const sol = document.querySelector("solution_box");
const num_buttons = document.querySelectorAll("number");
const op_buttons = document.querySelectorAll("op");
const equal_button = document.querySelector("equals");
const clear_button = document.querySelector("c");
const prev_op = document.querySelector("previous_operand");
const current_op = document.querySelector("current_operand");

const calculator = new Calculator(prev_op,current_op);

num_buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

op_buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equal_button.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})


clear_button.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })

  ocument.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g
    if (event.key.match(patternForNumbers)) {
      event.preventDefault();
      calculator.appendNumber(event.key)
      calculator.updateDisplay()
    }
    if (event.key === '.') {
      event.preventDefault();
      calculator.appendNumber(event.key)
      calculator.updateDisplay()
    }
    if (event.key.match(patternForOperators)) {
      event.preventDefault();
      calculator.chooseOperation(event.key)
      calculator.updateDisplay()
    }
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      calculator.compute()
      calculator.updateDisplay()
    }
    if (event.key == 'Delete' || event.key === "Backspace") {
      event.preventDefault();
      calculator.clear()
      calculator.updateDisplay()
    }
  
  });
  
  