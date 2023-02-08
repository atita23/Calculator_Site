class Calculator{
    constructor(prev_op, current_op){
        this.prev_op = prev_op;
        this.current_op = current_op;
        this.clear();
        this.updateDisplay();
        this.opUsed = false;
    }

    clear(){
        this.c_operand = '';
        this.p_operand = '';
        this.operation = undefined;
       
    }

    // delete(){

    // }

    appendNumber(number){
        if(!this.opUsed){
            this.c_operand += number;
        }
        else{
            this.opUsed = false;
            let str = number;
            this.current_op.innerText = str;
            this.c_operand = number;
        }

        if(this.c_operand == '0'){
            this.c_operand = '';
        }
       
    }

    chooseOperation(operation){

        if(this.operation != undefined){
            if(this.c_operand != '' && this.p_operand != ''){
                this.compute();
                this.operation = operation;
                this.opUsed = true;
                return;
            }
            else if(this.p_operand != '' && c_operand == ''){
            
            }
        }
        this.operation = operation;
        this.opUsed = true;
  
    }

    compute(){
        let computation;
        const prev = parseFloat(this.p_operand);
        const current = parseFloat(this.c_operand);

        if(isNaN(prev) || isNaN(current)) return

        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':

                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.c_operand = computation
        this.operation = undefined
        this.p_operand = ''
    }  
     

    updateDisplay() {
        
        if(this.c_operand == '' && this.p_operand == ''){
            this.current_op.innerText = '0';
            this.prev_op.innerText = '';
            return;
        }
        if(this.opUsed){
            this.p_operand = this.c_operand;
            this.c_operand = "";
        }
        
        this.current_op.innerText = this.c_operand;
        this.prev_op.innerText = this.p_operand;
        if(this.operation != undefined){
            this.prev_op.innerText += " " + this.operation;
        }
        
        

      }
}
    

const num_buttons = document.querySelectorAll('[data-num]');
const op_buttons = document.querySelectorAll('[data-op]');
const equal_button = document.querySelector("[data-equal]");
const clear_button = document.querySelector("[data-delete]");
const prev_op = document.querySelector("[data-previous]");
const current_op = document.querySelector("[data-current]");

const calc = new Calculator(prev_op,current_op);




num_buttons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText);
        calc.updateDisplay();
    })
})

op_buttons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText);
        calc.updateDisplay();

    })
})

equal_button.addEventListener('click', button => {
    calc.compute();
    calc.updateDisplay();

})


clear_button.addEventListener('click', button => {
    calc.clear()
    calc.updateDisplay()
  })

//   document.addEventListener('keydown', function (event) {
//     let patternForNumbers = /[0-9]/g;
//     let patternForOperators = /[+\-*\/]/g
//     if (event.key.match(patternForNumbers)) {
//       event.preventDefault();
//       calculator.appendNumber(event.key)
//       calculator.updateDisplay()
//     }
//     if (event.key === '.') {
//       event.preventDefault();
//       calculator.appendNumber(event.key)
//       calculator.updateDisplay()
//     }
//     if (event.key.match(patternForOperators)) {
//       event.preventDefault();
//       calculator.chooseOperation(event.key)
//       calculator.updateDisplay()
//     }
//     if (event.key === 'Enter' || event.key === '=') {
//       event.preventDefault();
//       calculator.compute()
//       calculator.updateDisplay()
//     }
//     if (event.key == 'Delete' || event.key === "Backspace") {
//       event.preventDefault();
//       calculator.clear()
//       calculator.updateDisplay()
//     }
  
//   });
  
  