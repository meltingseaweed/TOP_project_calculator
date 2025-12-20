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
                        if ((operator === "") && (!numOne.includes("."))) {
                            inputNumber = ".";
                        } else if ((operator !== "") && (!numTwo.includes("."))) {
                            inputNumber = ".";
                        } else {
                        inputNumber = "";
                        }
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
                    return disp.textContent = "Please enter a number first";
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
            equation += ` = ${Math.round(answer * 100) / 100}`;
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

    const displayForm = document.getElementById('calcDisplay');
    document.addEventListener("keydown", (event) => {
        if (solved === true) {
            numOne = "";
            numTwo = "";
            operator = "";
            answer = 0;
            equation = "";
            displayForm.value = "";
            solved = false;
        }

        if (solved === false) {
        console.log(event);
        if (event.key =="1") { displayForm.value += event.key; }
        if (event.key =="2") { displayForm.value += event.key; }
        if (event.key =="3") { displayForm.value += event.key; }
        if (event.key =="4") { displayForm.value += event.key; }
        if (event.key =="5") { displayForm.value += event.key; }
        if (event.key =="6") { displayForm.value += event.key; }
        if (event.key =="7") { displayForm.value += event.key; }
        if (event.key =="8") { displayForm.value += event.key; }
        if (event.key =="9") { displayForm.value += event.key; }
        if (event.key =="0") { displayForm.value += event.key; }
        if (event.key =="+") { displayForm.value += event.key; }
        if (event.key =="-") { displayForm.value += event.key; }
        if (event.key =="*") { displayForm.value += event.key; }
        if (event.key =="/") { displayForm.value += event.key; }
        if (event.key =="Backspace") { displayForm.value.slice(0, -1); }
        if (event.key =="Enter") { 
            getEquation (displayForm.value);
            answer = calculate(operator, numOne, numTwo);
            displayForm.value += ` = ${Math.round(answer * 100) / 100}`;
            solved = true;
        }
        // Make key event to calculate the equation
        //if (event.key =="=") { displayForm.value += event.key; }
        }
    });
    
    let index = 0;
    function getEquation (string) {
        if (string.includes("+") === true) {
                index = string.indexOf("+");
                numOne = string.slice(0, index);
                numTwo = string.slice (index+1);
                operator = "+";
        } else if (string.includes("-") === true) {
                index = string.indexOf("-");
                numOne = string.slice(0, index);
                numTwo = string.slice (index+1);
                operator = "-";
        } else if (string.includes("*") === true) {
                index = string.indexOf("*");
                numOne = string.slice(0, index);
                numTwo = string.slice (index+1);
                operator = "*";
        } else if (string.includes("/") === true) {
                index = string.indexOf("/");
                numOne = string.slice(0, index);
                numTwo = string.slice (index+1);
                operator = "/";
        }
    }