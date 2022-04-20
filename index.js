let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
   document.getElementById("sum-el").textContent = 'Sum: '
   let noAdd = num1+num2
   document.getElementById("sum-el").textContent += noAdd
}

function substract() {
    document.getElementById("sum-el").textContent = 'Sum: '
    let noSub = num1-num2
    document.getElementById("sum-el").textContent += noSub
}

function divide() {
    document.getElementById("sum-el").textContent = 'Sum: '
    let noDiv = num1/num2
    document.getElementById("sum-el").textContent += noDiv
}

function multiply() {
    document.getElementById("sum-el").textContent = 'Sum: '
    let noMult = num1*num2
    document.getElementById("sum-el").textContent += noMult
}
