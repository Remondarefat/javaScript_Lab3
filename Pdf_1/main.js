// -------- pdf1-lap1 (login)--------------- 
// function checkUser (){
// var userName = prompt("please enter your name").toLowerCase();
// var userPass = prompt("please enter your password")
// if(userName =="admin" && userPass!=="421$$"){
//     alert("Yor password is wrong");
// }
// else if(userName !=="admin" && userPass=="421$$"){
//     alert("Yor userName is wrong");
// }
// else if(userName =="admin" && userPass=="421$$"){
//     document.write("Welcome login success");
// }
// else{
//     alert("userName and password are wrong")
// }


// }

// ---------Lap2 Calc -----------------------

// var num1=Number(prompt("Please enter the first number"));
// var operator =prompt("Please enter the an operator (+ , - , % , / , *) ");
// var num2=Number(prompt("please enter the secound number"));

// switch(operator){
//     case "+":
//         result= alert(`result=${num1}+${num2} =${num1+num2} `) 
//         break;
//     case "-":
//         result=  alert(`result=${num1}-${num2} =${num1-num2} `) 
//         break;
//     case "/":
//         result= alert(`result=${num1}/${num2} =${num1/num2} `) 
//         break;
//     case "%":
//         result= alert(`result=${num1}%${num2} =${num1%num2} `) 
//         break;
//     case "*":
//         result=  alert(`result=${num1}*${num2} =${num1*num2} `) 
//         break;
        
// }
// console.log(result)


// ---------------------Bonus -------------------------
function check() {
    var checkInput = confirm("do you want to add another operation on last result");
    if (checkInput) {
        var operator =prompt("Please enter the an operation");
        var anotherNum=Number(prompt("please enter the secound number"));
        anotherOperation(result,operator,anotherNum);
    } else {
        alert("Done");
    }
    }
var num1=Number(prompt("Please enter the first number"));
var operator =prompt("Please enter the an operation");
var num2=Number(prompt("please enter the secound number"));
function anotherOperation(num1,operator,num2){
switch(operator){
    case "+":
        result=num1+num2;
        alert(`Result=${result}`) ;
        break;
        
    case "-":
        result=num1-num2;
        alert(`Result=${result}`) ;
        break;
    case "/":
        result=num1/num2;
        alert(`Result=${result}`) ;
        check();

        break;
    case "%":
        result=num1%num2;
        alert(`Result=${result}`) ;
        break;
    case "*":
        result=`${num1*num2} `;
        alert(`Result=${result}`) ;
        break;
        
}
check();

}
anotherOperation(num1,operator,num2);
check();