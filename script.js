var num1 = +prompt('Enter The First Number: ')
var num2 = +prompt('Enter The Second Number: ')

var userOperator = prompt('Enter The Operator: \n 1. + \n 2. - \n 3. * \n 4. / \n 5. **')

if (userOperator === '1') {
    sum(num1, num2)
} else if (userOperator === '2') {
    tafrig(num1, num2)
}
else if (userOperator === '3') {
    zarb(num1, num2)
}
else if (userOperator === '4') {
    devide(num1, num2)
}
else if (userOperator === '5') {
    power(num1, num2)
} else {
    alert('عملیات وارد شده معتبر نمی باشد')
}

function sum(num1, num2) {
    // return num1 + num2\
    alert(num1 + num2)
}
function tafrig(num1, num2) {
    // return num1 - num2\
    alert(num1 - num2)
}
function devide(num1, num2) {
    // return num1 / num2\
    alert(num1 / num2)
}
function zarb(num1, num2) {
    // return num1 * num2\
    alert(num1 * num2)
}
function power(num1, num2) {
    // return num1 ** num2\
    alert(num1 ** num2)
}