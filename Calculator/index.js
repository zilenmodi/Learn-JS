const dropdownFunctions = document.querySelectorAll(".calculator-tf-trigonometry")

const dropdownTriangle = dropdownFunctions[0];
const dropdownFunction = dropdownFunctions[1];

const displayInput = document.querySelector("#display-input");

const dropdownModalTriangle = document.querySelector(".calculator-tf-modal-1")

const dropdownModalFunction = document.querySelector(".calculator-tf-modal-2")

dropdownTriangle.addEventListener("click", () => {
    dropdownModalTriangle.classList.contains('none') ? dropdownModalTriangle.classList.remove('none') : dropdownModalTriangle.classList.add('none')

    if (!dropdownModalFunction.classList.contains('none')) {
        dropdownModalFunction.classList.add('none')
    }
})


dropdownFunction.addEventListener("click", () => {
    dropdownModalFunction.classList.contains('none') ? dropdownModalFunction.classList.remove('none') : dropdownModalFunction.classList.add('none')

    if (!dropdownModalTriangle.classList.contains('none')) {
        dropdownModalTriangle.classList.add('none')
    }
})

function notInRange(value) {
    if (value >= '1' && value <= '9') {
        return false;
    }
    return true;
}

function handlePlusAndMinus(inputValue) {
    let currentDisplayInput = displayInput.value;
    if (currentDisplayInput.length == 0) {
        inputValue = '-'
        displayInput.value += inputValue
    }
    else if (currentDisplayInput.length && currentDisplayInput.charAt(currentDisplayInput.length - 1) >= '1' && currentDisplayInput.charAt(currentDisplayInput.length - 1) <= '9') {
        let countChar = 0;
        let i = currentDisplayInput.length - 1
        for (; i >= 0; i--) {
            if (currentDisplayInput[i] >= '1' && currentDisplayInput[i] <= '9') {
                countChar++;
            }
            else {
                break;
            }
        }

        if (i == -1) {
            let oldValue = currentDisplayInput.slice(0);
            displayInput.value = `-${oldValue}`
        }
        else {
            if (currentDisplayInput[i] != '-') {
                let newValue = `-${currentDisplayInput.slice(i + 1)}`;
                let oldValue = currentDisplayInput.slice(0, i + 1);
                displayInput.value = `${oldValue}${newValue}`
            }
            else if ((i - 1 >= 0 && currentDisplayInput[i] == '-' && currentDisplayInput[i - 1] != '-' && notInRange(currentDisplayInput[i - 1]))) {
                let newValue = `${currentDisplayInput.slice(i + 1)}`;
                let oldValue = currentDisplayInput.slice(0, i);
                displayInput.value = `${oldValue}${newValue}`
            }
            else {
                let newValue = `+${currentDisplayInput.slice(i + 1)}`;
                let oldValue = currentDisplayInput.slice(0, i);
                displayInput.value = `${oldValue}${newValue}`
            }
        }
    }
}

function handleCurrentInput(inputValue) {
    switch (inputValue) {
        case '+/-':
            handlePlusAndMinus(inputValue)
            break;

        case 'C':
            displayInput.value = ""
            break

        case '=':
            const newValue = evaluation.calculate(displayInput.value)
            displayInput.value = newValue
            break

        case 'lp':
            displayInput.value += '('
            break

        case 'rp':
            displayInput.value += ')'
            break

        default:
            displayInput.value += inputValue
            break
    }
}



class EvaluateExpression {
    trimSpaces(str) {
        let newStr = "";
        let i = 0;
        while (i < str.length) {
            if (str[i] !== ' ') {
                newStr += str[i]
            }
            i++;
        }
        return newStr;
    }

    cal(stack, currentNumber, sign) {
        if (sign === '+') {
            stack.push(currentNumber);
        }
        else if (sign === '-') {
            stack.push(-currentNumber);
        }
        else if (sign === '/') {
            stack[stack.length - 1] > 0 ? stack.push(Math.floor(stack.pop() / currentNumber)) : stack.push(Math.ceil(stack.pop() / currentNumber));
        }
        else if (sign === '*') {
            stack.push(stack.pop() * currentNumber);
        }
        else if (sign === '%') {
            stack.push(stack.pop() % currentNumber);
        }
    }

    calculate(s) {
        s = this.trimSpaces(s);
        let stack = [];
        let stackSignPair = [];
        let sign = '+';
        for (let i = 0; i < s.length; i++) {
            if (!isNaN(Number(s[i]))) {
                let currentNumber = "";
                while (!isNaN(Number(s[i]))) {
                    currentNumber += s[i]
                    i++;
                }

                i--;
                currentNumber = Number(currentNumber);
                this.cal(stack, currentNumber, sign);

            }
            else if (s[i] === "(") {

                stackSignPair.push([stack, sign]);
                stack = [];
                sign = '+'
            }
            else if (s[i] === ")") {

                let currentNumber = stack.reduce((acc, curr) => acc += curr, 0)
                let getPair = stackSignPair.pop();
                [stack, sign] = getPair;
                this.cal(stack, currentNumber, sign)
            }
            else {
                sign = s[i];
            }
        }

        let acc = stack.reduce((acc, curr) => acc += curr, 0)
        return acc;
    };
}

let evaluation = new EvaluateExpression();
