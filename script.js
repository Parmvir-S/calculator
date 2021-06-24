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
            return "Toronto Raptors!";
    }
}

function clearDisplay() {
    FakeDisplayValue.textContent = "";
}

//Display Screen
const displayScreen = document.querySelector(".screen-display");
let FakeDisplayValue = document.createElement("p");

//Fake Display Screen Code
function display(bam) {
    FakeDisplayValue.textContent = bam;
    FakeDisplayValue.style.cssText = "margin: 8% 5% 5% 5%; overflow: hidden; font-family: monospace; font-size: 1.5em";
    displayScreen.appendChild(FakeDisplayValue);
}

let clickedNums = [];
let operatorValue = "";
let priorToStorageNum = "";

const numberButtons = document.querySelectorAll(".numberButton");
numberButtons.forEach(num => {
    num.addEventListener("click", (e) => {
        let numString = e.target.textContent;
        console.log(numString);
        priorToStorageNum += numString;
        clearDisplay()
        display(priorToStorageNum)
    })
  });


const operatorsButtons = document.querySelectorAll(".operator");
operatorsButtons.forEach(op => {
    op.addEventListener("click", e => {
      console.log(e.target.textContent);
      operatorValue = e.target.textContent;
      if (clickedNums.length == 0) {
        clickedNums.push(parseInt(priorToStorageNum));
      }
      priorToStorageNum = "";
    })
  })

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
    wipeAllData()
})

function wipeAllData() {
    display("");
    clickedNums = [];
    operatorValue = "";
    priorToStorageNum = "";
  }

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", function() {
    clickedNums.push(parseInt(priorToStorageNum));
    priorToStorageNum = "";
    let x = operate(operatorValue, clickedNums[0], clickedNums[1]);
    clickedNums = [x];
    console.log(x)
    display(x)
});


// const decimalButton = document.querySelector(".decimal");