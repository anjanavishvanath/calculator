const numButtons = document.querySelectorAll('[data-nu]')
const oprButtons = document.querySelectorAll('[data-op]')
const eqlButton = document.querySelector('[data-eql]')
const clrButton = document.querySelector('[data-all-clr]')
const delButton = document.querySelector('[data-del]')

const currDisplay = document.querySelector('[data-curr-op]')
const prevDisplay = document.querySelector('[data-prev-op]')   

let currNum = []
let num1 = 0
let num2 = 0
let operand = ""

numButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(operand == ""){
            currNum.push(btn.innerHTML)
            num1 = Number(currNum.reduce((a,b) => a+b))
            currDisplay.innerHTML = num1
        }else{
            currNum.push(btn.innerHTML)
            num2 = Number(currNum.reduce((a,b) => a+b))
            currDisplay.innerHTML = `${num1} ${operand} ${num2}` 
        }
    })
})

oprButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        operand = btn.innerHTML
        currNum = []
        currDisplay.innerHTML = `${num1} ${operand}`
    })
})

eqlButton.addEventListener('click', () => {
    prevDisplay.innerHTML = `${num1} ${operand} ${num2}`
    if(operand == '+'){
        currDisplay.innerHTML = num1+num2
    }else if(operand == '-'){
        currDisplay.innerHTML = num1 - num2
    }else if(operand == '*'){
        currDisplay.innerHTML = num1 * num2
    }else if(operand == '÷'){
        currDisplay.innerHTML = num1 / num2
    }
})

clrButton.addEventListener('click', () => {
    currNum = []
    num1 = 0
    num2 = 0
    operand = ""
    currDisplay.innerHTML = num1
    prevDisplay.innerHTML = ""
})