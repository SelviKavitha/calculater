let currentOperation = "";

// Get input values
function getValues() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return [a, b];
}

// Select Addition
function add() {
    currentOperation = "add";
}

// Select Subtraction
function sub() {
    currentOperation = "sub";
}

// Select Multiplication
function mul() {
    currentOperation = "mul";
}

// Select Division
function div() {
    currentOperation = "div";
}

// Select Power
function power() {
    currentOperation = "power";
}

// Square Root (Immediate calculation)
function sqrt() {
    let a = Number(document.getElementById("num1").value);
    document.getElementById("result").innerText =
        "Result: " + Math.sqrt(a);
}

// Cube Root (Immediate calculation)
function cuberoot() {
    let a = Number(document.getElementById("num1").value);
    document.getElementById("result").innerText =
        "Result: " + Math.cbrt(a);
}


function calculate() {
    let [a, b] = getValues();
    let result;

    switch (currentOperation) {
        case "add":
            result = a + b;
            break;

        case "sub":
            result = a - b;
            break;

        case "mul":
            result = a * b;
            break;

        case "div":
            if (b === 0) {
                document.getElementById("result").innerText =
                    "Cannot divide by zero";
                return;
            }
            result = a / b;
            break;

        case "power":
            result = Math.pow(a, b);
            break;

        default:
            document.getElementById("result").innerText =
                "Select an operation first";
            return;
    }

    document.getElementById("result").innerText =
        "Result: " + result;
}

// Clear Entry (CE) - Clears only second input
function clearEntry() {
    document.getElementById("num2").value = "";
}

// All Clear (AC) - Resets everything
function allClear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result: ";
    currentOperation = "";
}