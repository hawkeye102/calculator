let operator="";
let previousvalue="";
let currentvalue="";

document.addEventListener("DOMContentLoaded",function(){
let clear=document.querySelector(".click");
let equal=document.querySelector(".equal");
let decimal=document.querySelectorAll(".decimal");
let operators=document.querySelectorAll(".operator");
let number=document.querySelectorAll(".number");
let previouscreen=document.querySelector(".previous");
let currentscreen=document.querySelector(".current");

number.forEach((number) => number.addEventListener("click",function(e){
    handleNumber(e.target.textContent);
    currentscreen.textContent=currentvalue;
}))

operators.forEach((op)=>op.addEventListener("click",function(e){

    handleOperator(e.target.textContent);
    previouscreen.textContent=previousvalue + " " + operator;
    currentscreen.textContent=currentvalue;
}))

clear.addEventListener("click",function(){
currentvalue='';
previousvalue='';
operator='';
previouscreen.textContent='';
currentscreen.textContent='';
})

equal.addEventListener("click",function(){
    calculate();
    previouscreen.textContent='';
    currentscreen.textContent=previousvalue;
})

})





function handleNumber(num){
    if(currentvalue.length <=5){
currentvalue +=num;
    }
}
function handleOperator(op){
    operator=op;
    previousvalue=currentvalue;
    currentvalue =" ";
   }  

 function  calculate(){
    previousvalue=Number(previousvalue);
    currentvalue=Number(currentvalue);

    if(operator === "+"){
        previousvalue+=currentvalue;
    }
    else if(operator === "-"){
        previousvalue-=currentvalue;
    }
    else if(operator==="X"){
        previousvalue*=currentvalue;
    }
   else{
    previousvalue/=currentvalue;
   }
   

 }
 