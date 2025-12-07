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
    switch (operator) {
        case "add":
            return add (a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        default:
            console.log("calculate function, something not working properly");
            break;
    }
}