class Claculator{
    constructor(currD,prevD){
        this.currD = currD
        this.prevD = prevD
        this.clear()
    }

    clear(){
        this.prevOperand = ""
        this.currOperand = ""
        this.operation = undefined
        this.updateDisplay()
    }

    delete(){
        this.currOperand = this.currOperand.slice(0,-1)
    }

    appendumber(number){
        if(this.currOperand.includes(".") && number === ".") return
        this.currOperand += number
    }

    chooseOperation(opr){
        if(this.currOperand === "") return
        if(this.prevOperand !== ""){
            this.compute()
        }
        this.operation = opr
        this.prevOperand = this.currOperand
        this.currOperand = ""
    }

    compute(){
        let total = 0
        if(this.prevOperand === "" || this.currOperand === "") return
        switch(this.operation){
            case "+":
                total = parseFloat(this.prevOperand)+parseFloat(this.currOperand)
                break
            case "-":
                total = parseFloat(this.prevOperand)-parseFloat(this.currOperand)
                break
            case "*":
                total = parseFloat(this.prevOperand)*parseFloat(this.currOperand)
                break
            case "÷":
                total = parseFloat(this.prevOperand)/parseFloat(this.currOperand)
                break
            default:
                break
        }
        this.currOperand = total.toString()
        this.prevOperand = ""
        this.operation = undefined
    }

    getDisplaytNumber(number){
// impliment , n stuff
    }

    updateDisplay(){
        //update the display with every call
        this.currD.innerHTML = this.currOperand 
        if(this.operation !== undefined){
            this.prevD.innerHTML = `${this.prevOperand}${this.operation}`
        }
        
    }
}

let btnNum = document.querySelectorAll("[data-num]")
let btnOpr = document.querySelectorAll("[data-opr]")
let btnAC = document.querySelector("[data-all-clr]")
let btnDel = document.querySelector("[data-del]")
let btnEql = document.querySelector("[data-eql]")

let prevDisplayElem = document.querySelector("[data-prev-op]")
let currDisplayELem = document.querySelector("[data-curr-op]")


let Calc = new Claculator(currDisplayELem,prevDisplayElem) 


btnNum.forEach(btn => btn.addEventListener('click',()=>{
    Calc.appendumber(btn.innerHTML)
    Calc.updateDisplay()
}))

btnOpr.forEach(btn => btn.addEventListener('click',()=>{
    Calc.chooseOperation(btn.innerHTML)
    Calc.updateDisplay()
}))

btnAC.addEventListener('click',()=>Calc.clear())

btnEql.addEventListener('click',()=>{
    Calc.compute()
    Calc.updateDisplay()
})

btnDel.addEventListener('click',()=>{
    Calc.delete()
    Calc.updateDisplay()
})