// Functions to add, subtract, multiply, and divide
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a , b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// Calculate function 
function calculate (operator, a, b) {
    a = +a;
    b = +b;
    
    switch (operator) {
        case "+":
            return add (a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            console.log("operator does not match +, -, *, or /");
            break;
    }
}

const numBtn = document.querySelectorAll
        ("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #decimal");
const opBtn = document.querySelectorAll
        ("#add, #multiply, #subtract, #divide, #equals");
const clearBtn = document.querySelector("#clear");
const delBtn = document.querySelector("#del");
let disp = document.querySelector("#display");
let equation = "";
let inputOperator = "";
let inputNumber = "";
let numOne = "";
let numTwo = "";
let operator = "";
let answer = 0;
let solved = false;
inputNumBtn();
inputOpBtn();
// Do the mouse input events need to be functions? 


// Events for clicking numbers and operators:
    function inputNumBtn() {
        numBtn.forEach((button) => {
            button.addEventListener("click", function (event) {
            const clickedId = event.target.id;

                switch (clickedId) {
                    case ("zero"):
                        console.log("0");
                        inputNumber = "0";
                        break;
                    case ("one"):
                        console.log("1");
                        inputNumber = "1";
                        break;
                    case ("two"):
                        console.log("2");
                        inputNumber = "2";
                        break;
                    case ("three"):
                        console.log("3");
                        inputNumber = "3";
                        break;
                    case ("four"):
                        console.log("4");
                        inputNumber = "4";
                        break;
                    case ("five"):
                        console.log("5");
                        inputNumber = "5";
                        break;
                    case ("six"):
                        console.log("6");
                        inputNumber = "6";
                        break;
                    case ("seven"):
                        console.log("7");
                        inputNumber = "7";
                        break;
                    case ("eight"):
                        console.log("8");
                        inputNumber = "8";
                        break;
                    case ("nine"):
                        console.log("9");
                        inputNumber = "9";
                        break;
                    case ("decimal"):
                        console.log(".")
                        inputNumber = ".";
                        break;
                }
                if (operator === "") {
                    numOne += inputNumber;
                    equation += inputNumber;
                    disp.textContent = `${equation}`
                    return numOne;
                } else if (operator !== "") {
                    numTwo += inputNumber;
                    equation += inputNumber;
                    disp.textContent = `${equation}`
                    return numTwo;
                }
                // Add here the changing in display:
                
            });
        });
    }
    
    function inputOpBtn () {
        opBtn.forEach((button) => {
            button.addEventListener("click", function (event) {
            const clickedId = event.target.id;
                switch (clickedId) {
                    case ("add"):
                        equation += " + ";
                        disp.textContent = `${equation}`
                        return operator = "+";
                    case ("subtract"):
                        equation += " - ";
                        disp.textContent = `${equation}`
                        return operator = "-";
                    case ("multiply"):
                        equation += " * ";
                        disp.textContent = `${equation}`
                        return operator = "*";
                    case ("divide"):
                        equation += " / ";
                        disp.textContent = `${equation}`
                        return operator = "/";
                    case ("equals"):
                        answer = calculate(operator, numOne, numTwo);
                        equation += ` = ${answer}`;
                        disp.textContent = `${equation}`
                        solved = true;
                        break;
                }
            });
        });
    }

// Clear button
        clearBtn.addEventListener("click", () => {
            numOne = "";
            numTwo = "";
            operator = "";
            answer = 0;
            equation = "";
            disp.textContent = `${equation}`
            solved = false;
            });
// Del button
        delBtn.addEventListener("click", () => {
            if (solved === false) {
                if ((numTwo === "") && (operator === "")) {
                    numOne = numOne.slice(0, -1);
                    equation = equation.slice (0, -1);
                    disp.textContent = `${equation}`;
                } else if ((numTwo === "") && (operator !== "")) {
                    operator = "";
                    equation = equation.slice(0, -3);
                    disp.textContent = `${equation}`;
                } else if ((numOne !== "") && (operator !== "")) {
                    numTwo = numTwo.slice(0, -1);
                    equation = equation.slice(0, -1);
                    disp.textContent = `${equation}`;
                } 
        }
        });
    