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
    if (b == 0) {
        return "Cannot divide by zero";
    } else {
    return a / b;    
    }
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
        ("#add, #multiply, #subtract, #divide");
const equalsBtn = document.querySelector ("#equals");
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

// Do the mouse input events need to be functions? 


// Events for clicking numbers and operators:
        numBtn.forEach((button) => {
            button.addEventListener("click", function (event) {
            
            if (solved === false) {
                const clickedId = event.target.id;
                switch (clickedId) {
                    case ("zero"):
                        inputNumber = "0";
                        break;
                    case ("one"):
                        inputNumber = "1";
                        break;
                    case ("two"):
                        inputNumber = "2";
                        break;
                    case ("three"):
                        inputNumber = "3";
                        break;
                    case ("four"):
                        inputNumber = "4";
                        break;
                    case ("five"):
                        inputNumber = "5";
                        break;
                    case ("six"):
                        inputNumber = "6";
                        break;
                    case ("seven"):
                        inputNumber = "7";
                        break;
                    case ("eight"):
                        inputNumber = "8";
                        break;
                    case ("nine"):
                        inputNumber = "9";
                        break;
                    case ("decimal"):
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
            } else if (solved === true) {
                numOne = "";
                numTwo = "";
                operator = "";
                answer = 0;
                equation = "";
                disp.textContent = `${equation}`
                solved = false;
            }

            });
        });
    
        opBtn.forEach((button) => {
            button.addEventListener("click", function (event) {
                if ((operator !== "") && (numTwo === "")) {
                    operator = "";
                    equation = equation.slice(0, -3);
                    disp.textContent = `${equation}`;
                } 
                    
                if ((solved === false) && (numTwo === "")) {
                    if (numOne === "") {
                    return disp.textContent = "Enter a number first";
                }

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
                    }
                } else if (solved === true) {
                    numOne = "";
                    numTwo = "";
                    operator = "";
                    answer = 0;
                    equation = "";
                    disp.textContent = `${equation}`
                    solved = false;
                }
            });
        });

    equalsBtn.addEventListener ("click", () => {
        if (operator && numOne && numTwo) {
            answer = calculate(operator, numOne, numTwo);
            equation += ` = ${answer}`;
            disp.textContent = `${equation}`
            solved = true;
        }
    });

    clearBtn.addEventListener("click", () => {
        numOne = "";
        numTwo = "";
        operator = "";
        answer = 0;
        equation = "";
        disp.textContent = `${equation}`
        solved = false;
        });

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
    