function sum(num1, num2) {
    if (typeof num1 !== 'number' || !num1) {
        num1 = 0
    }
    if (typeof num2 !== 'number' || !num2) {
        num2 = 0
    }
    return num1 + num2
}