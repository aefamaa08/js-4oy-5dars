import divideFunction, { plus, subtract as minus, multiply as times } from "./functions/plus.js";

document.getElementById("calculateBtn").addEventListener("click", calculateResult);

function calculateResult() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Введите числа";
    } else {
        switch (operator) {
            case "+":
                result = plus(num1, num2);
                break;
            case "-":
                result = minus(num1, num2);
                break;
            case "*":
                result = times(num1, num2);
                break;
            case "/":
                result = divideFunction(num1, num2);
                break;
            default:
                result = "Ошибка";
        }
    }

    document.getElementById("display").textContent = "Результат: " + result;
}
