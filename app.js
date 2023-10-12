let NewPlus=document.getElementById("plus");
let NewMinus=document.getElementById("minus");
let NewCalculate=document.getElementById("calculate");
let NewResult=document.getElementById("result");
let newMultiply=document.getElementById("multiply");
let newDivide=document.getElementById("divide");
let value1, value2, simbol, resultCulc;
function enterPlus(){
    simbol="+";
}
function enterMinus(){
    simbol="-";
}
function enterMultiply(){
    simbol="*"; 
}
function enterDivide(){
    simbol="/";
}
NewPlus.addEventListener("click",enterPlus);
NewMinus.addEventListener("click",enterMinus);
NewCalculate.addEventListener('click',calculator);
newMultiply.addEventListener("click",enterMultiply);
newDivide.addEventListener("click",enterDivide);

function calculator(){
value1=Number(document.getElementById("FirstInput").value);
value2=Number(document.getElementById("NextInput").value);
console.log(simbol);
if(simbol=="+"){
    resultCulc=value1+value2;
}if(simbol=="-"){
    resultCulc=value1-value2;
} if(simbol=="*"){
    resultCulc=value1*value2; 
}if (simbol=='/'){
    if(value2==0){
        resultCulc="На ноль делить нельзя";
    }else{
    resultCulc=value1/value2;
}}
NewResult.innerHTML=resultCulc;
}