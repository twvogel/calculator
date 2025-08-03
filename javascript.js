const display = document.querySelector(".display")
const numKey = document.querySelectorAll(".num")
const equal = document.querySelector(".equal")
const dot = document.querySelector(".dot")
const operator = document.querySelectorAll(".operator")
const btnClear = document.querySelector(".clear")
const btnDelete = document.querySelector(".delete")
const negative = document.querySelector(".negative")

let numOne = null;
let numTwo = null;
let opV = null;
let reset = true;
let repeat = true;



btnClear.addEventListener('click', () => {
        display.innerText = "0";
        numOne = null;
        numTwo = null;
        opV = null;
        reset = true;  
        repeat = true;      
    })

btnDelete.addEventListener('click', () => {
        display.innerText = display.innerText.slice(0,-1);
    })


numKey.forEach(num => num.addEventListener('click', () => {
    if(reset == true){
    display.innerText = "";    
    display.innerText += num.innerText;
    reset = false;
    repeat = true;
        }
    else {
        display.innerText += num.innerText;
        
   }
}))

dot.addEventListener('click', () => {
    if (display.innerText.includes(".")){
            return;
        }
        else {
            reset = false;
            display.innerText += dot.innerText;
        }
}
)

negative.addEventListener('click', () => {
    if (display.innerText.includes("-")){
        display.innerText = display.innerText.slice(1);
        return;
        }
        else if(display.innerText === "0"){
            return;
        }    
        else {
            let string = "-" + display.innerText;
            display.innerText = string;
            
            return;
        }
}
)

equal.addEventListener('click', () => {
        numTwo = display.innerText;
        operate(numOne, numTwo, opV);
        opV = null;
        numOne = display.innerText;
        numTwo = null;
    })

operator.forEach(operator => operator.addEventListener('click', () => {
        
    if (numOne != null && opV != null && repeat == true){
        numTwo = display.innerHTML;
        operate(numOne, numTwo, opV);
        opV = operator.innerText;
        numOne = display.innerText;
        numTwo = null;
        reset = true;
        repeat = false;
    }
    else {    
        numOne = display.innerText;
        opV = operator.innerText;
        reset = true;
        }
        
}))    




function operate(numOne, numTwo, opV){
let a = parseFloat(numOne);
let b = parseFloat(numTwo);



if (opV === "+"){
    display.innerText = add(a, b);
       
}
else if(opV === "-"){
    display.innerText = subtract(a, b);
       
}
else if(opV === "*"){
    display.innerText = multiply(a, b);
    
}
else if(opV === "/"){
    if(b === 0){
        display.innerText = "Cannot Divide by 0";
        }
    else {
            display.innerText = divide(a, b);
            
    }
}
}

function add(a, b){
    let result = a + b;
    return rounding(result);}

function subtract(a, b){
    let result = a - b;
    return rounding(result);}

function multiply(a, b){
    let result = a* b;
    return rounding(result);}

function divide(a, b){
    let result = a / b;
    return rounding(result);}



function rounding(answer){
    let newAnswer = answer.toString();
    if (newAnswer.includes(".")){
        let decimal = newAnswer.split(".")
        if(decimal[1].length > 7){
            return answer.toFixed(7);
        }
        else{
            return answer;
        }
    }
    else {
        return answer;
    
        }
        }






