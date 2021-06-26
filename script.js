function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a == 0 || b == 0) {
        return "Nope"
    } else {
        return (a / b);
    }
}

function modulo(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            let plus = add(a, b);
            return plus;
        case "-":
            let minus = subtract(a, b);
            return minus;
        case "x":
            let times = multiply(a, b);
            return times;
        case "/":
            let division = divide(a, b);
            return division;
        case "%":
            let remainder = modulo(a, b);
            return remainder;
        default:
            return "Parm";
    }
}

const displayScreen = document.querySelector(".screen-display");
let FakeDisplayValue = document.createElement("p");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorsButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");

let clickedNums = [];
let operatorValue = "";
let priorToStorageNum = "";

//Clears the Display
function clearDisplay() {
    FakeDisplayValue.textContent = "";
}

//Displays Values In The Output Box
function display(bam) {
    FakeDisplayValue.textContent = bam;
    FakeDisplayValue.style.cssText = "margin: 7% 5% 5% 5%; overflow: hidden; font-family: monospace; font-size: 2em";
    displayScreen.appendChild(FakeDisplayValue);
}


numberButtons.forEach(num => {
    num.addEventListener("click", (e) => {
        let numString = e.target.textContent;
        priorToStorageNum += numString;
        clearDisplay()
        display(priorToStorageNum)
    })
  });

operatorsButtons.forEach(op => {
    op.addEventListener("click", e => {
      operatorValue = e.target.textContent;
      if (clickedNums.length == 0) {
        clickedNums.push(Number(priorToStorageNum));
      }
      priorToStorageNum = "";
    })
  })

clearButton.addEventListener("click", function() {
    wipeAllData()
})

function wipeAllData() {
    display("");
    clickedNums = [];
    operatorValue = "";
    priorToStorageNum = "";
  }

equalButton.addEventListener("click", function() {
    clickedNums.push(Number(priorToStorageNum));
    priorToStorageNum = "";
    let x = operate(operatorValue, clickedNums[0], clickedNums[1]);
    clickedNums = [x];
    display(x);
});


decimalButton.addEventListener("click", () => {
    if (priorToStorageNum.includes(".")) {
        return;
    } else {
        priorToStorageNum += ".";
        display(priorToStorageNum)
    }
})