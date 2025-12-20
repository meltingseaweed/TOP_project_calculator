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
const displayForm = document.getElementById('calcDisplay');

// Would be so nice to have a function to reset values..
let inputOperator = "";
let inputNumber = "";
let numOne = "";
let numTwo = "";
let operator = "";
let answer = 0;
let solved = false;

function resetValues () {
    inputOperator = "";
    inputNumber = "";
    numOne = "";
    numTwo = "";
    operator = "";
    answer = 0;
    solved = false;
    return displayForm.value = "";
}

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
                    displayForm.value += inputNumber;
                    return numOne;
                } else if (operator !== "") {
                    numTwo += inputNumber;
                    displayForm.value += inputNumber;
                    return numTwo;
                } 
            } else if (solved === true) {
                resetValues();
            }

            });
        });
    
        // Problem with mixing typing and buttons, because the numOne values
        // and operator boolean statements don't add up.
        opBtn.forEach((button) => {
            button.addEventListener("click", function (event) {
                if (solved === true) {
                    resetValues();
                }
                
                if ((operator !== "") && (numTwo === "")) {
                    operator = "";
                    displayForm.value = displayForm.value.slice(0, -3);
                } 
                    
                if ((solved === false) && (displayForm.value === "")) {
                    return displayForm.value = "";
                } else {
                    const clickedId = event.target.id;
                    switch (clickedId) {
                        case ("add"):
                            displayForm.value += " + ";
                            return operator = "+";
                        case ("subtract"):
                            displayForm.value += " - ";
                            return operator = "-";
                        case ("multiply"):
                            displayForm.value += " * ";
                            return operator = "*";
                        case ("divide"):
                            displayForm.value += " / ";
                            return operator = "/";
                    }
                }
                }); 
            });

    equalsBtn.addEventListener ("click", () => {
        getEquation (displayForm.value);
        if (solved === true) {
            resetValues();
        } else if (operator && numOne && numTwo) {
            answer = calculate(operator, numOne, numTwo);
            displayForm.value += ` = ${Math.round(answer * 100) / 100}`;
            solved = true;
        }
    });

    clearBtn.addEventListener("click", () => {
        resetValues();
        });

    delBtn.addEventListener("click", () => {
        if (solved === false) {
            if ((numTwo === "") && (operator === "")) {
                numOne = numOne.slice(0, -1);
                displayForm.value = displayForm.value.slice (0, -1);
            } else if ((numTwo === "") && (operator !== "")) {
                operator = "";
                displayForm.value = displayForm.value.slice (0, -3);
            } else if ((numOne !== "") && (operator !== "")) {
                numTwo = numTwo.slice(0, -1);
                displayForm.value = displayForm.value.slice (0, -1);
             } 
    }
    });
// Will need to alter "displayForm.value parts"

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if (solved === true) {
            resetValues();
        } else if (solved === false) {
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
        if (event.key =="+") { displayForm.value += ` ${event.key} `; }
        if (event.key =="-") { displayForm.value += ` ${event.key} `; }
        if (event.key =="*") { displayForm.value += ` ${event.key} `; }
        if (event.key =="/") { displayForm.value += ` ${event.key} `; }
        if (event.key =="Backspace") { displayForm.value = displayForm.value.slice(0, -1); }
        if (event.key =="Enter") {
            getEquation (displayForm.value);
            answer = calculate(operator, numOne, numTwo);
            displayForm.value += ` = ${Math.round(answer * 100) / 100}`;
            solved = true;   
        }
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