let operator = '';
let isValue1 = '';
let isValue2 = '';
let resetScreen = false;
let saveValue1 = true;
let screen = document.getElementById("screen");

function clickNumber( number) {
    let oldValue = screen.value;
    if (resetScreen){
        screen.value = number;
        resetScreen = false;
    }else {
        screen.value = oldValue + number;
    }

}
function clickOperator(newOperator) {
    operator = newOperator;
    if (isValue1 == ""){
        isValue1 = screen.value;
    }else{
        isValue2 = screen.value;
    }
    resetScreen = true;

}
function clickEqual() {
    isValue2 = screen.value;
    let result = 0;
    let number1 = Number(isValue1);
    let number2 = Number(isValue2);
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    screen.value = result;
    operator = '';
    resetScreen = true;
    isValue1 = result;
    isValue2 = '';
    saveValue1 = false;
}
function delKey() {
    screen.value = "";
    operator = '';
    isValue1 = '';
    isValue2 = '';
    resetScreen = true;
}
