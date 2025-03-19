export function plus(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export default function divide(a, b) {
    if (b === 0) {
        return "Ошибка: Деление на ноль";
    }
    return a / b;
}
