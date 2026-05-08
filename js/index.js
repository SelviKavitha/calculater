function getValues() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return [a, b];
}

// Addition
function add() {
    let [a, b] = getValues();
    document.getElementById("result").innerText = "Result: " + (a + b);
}

// Subtraction
function sub() {
    let [a, b] = getValues();
    document.getElementById("result").innerText = "Result: " + (a - b);
}

// Multiplication
function mul() {
    let [a, b] = getValues();
    document.getElementById("result").innerText = "Result: " + (a * b);
}

// Division
function div() {
    let [a, b] = getValues();
    if (b === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero";
    } else {
        document.getElementById("result").innerText = "Result: " + (a / b);
    }
}

// Square Root
function sqrt() {
    let a = Number(document.getElementById("num1").value);
    document.getElementById("result").innerText = "Result: " + Math.sqrt(a);
}

// Cube Root
function cuberoot() {
    let a = Number(document.getElementById("num1").value);
    document.getElementById("result").innerText = "Result: " + Math.cbrt(a);
}

// Power
function power() {
    let [a, b] = getValues();
    document.getElementById("result").innerText = "Result: " + Math.pow(a, b);
}