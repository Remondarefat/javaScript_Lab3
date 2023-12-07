// -------------------Lap1--------------
// var arrSize = Number(prompt("please enter size of arry"))
// var arrNumbers= [];
// var sum=0;
// for(var i=0 ; i<arrSize;i++){
//     var num =Number(prompt(`please enter number ${i+1}`));
//     arrNumbers.push(num);
//     sum+=arrNumbers[i];
// }
// document.write(`the sum of entered values =${sum} & the average = ${sum/arrSize}`);

// ----------------------LAP2-----------------------------
var contacts=[];
var flag=false;
function check(){
    var checkInput =confirm ("Do you need new operation");
    if(checkInput){
        userOperation();
    }
    else{
        alert("Done")
    }
}
function userOperation (){
    var operation =prompt("What operation do you want? (Add Or Search)").toLowerCase();
    if(operation=="add"){
        var userName= prompt("please enter name contact");
        var userPhone= prompt("please enter phone number");
        var userContact={
            name:userName ,
            phone:userPhone
        }
        contacts.push(userContact);
        alert("Contact added successfully!");
        check();

    }
    else if (operation == "search"){
        var searchInput= prompt("What do you want to search for? ");
        for(var i=0 ; i<contacts.length ; i++){
            if(contacts[i].name==searchInput || contacts[i].phone==searchInput ){
              flag=true;
                alert(`Your searchInput is exist \n
                                And your full details is \n
                                your name:${contacts[i].name} \n
                                your phone:${contacts[i].phone}`);
                                check();
            }
        }
        if(flag=="false"){
            alert(' Your searchInput are not exsit');
            check();
        }
    }
} userOperation();
console.log(contacts);

// --------------------------------------------Bouns--------------------------
// function calcArea() {
//   var shape = prompt(
//     "please enter shape name you want to calculate area for "
//   ).toLowerCase();
//   switch (shape) {
//     case "circle":
//       var radius = Number(prompt("please enter radius of the circle"));
//       alert(`circle Area =${Math.PI * Math.pow(radius, 2)}`);
//       break;

//     case "triangle":
//       var base = Number(prompt("please enter base of the triangle"));
//       var height = Number(prompt("please enter height of the triangle"));
//       alert(`triangle Area =${0.5 * base * height}`);
//       break;

//     case "square ":
//       var sideLength = Number(
//         prompt("please enter length of side of the Square ")
//       );
//       alert(`Square Area =${Math.pow(sideLenght, 2)}`);
//       break;

//     case "rectangle ":
//       var recLength = Number(prompt("please enter length of the Rectangle "));
//       var recWidth = Number(prompt("please enter width of the Rectangle "));
//       alert(`Rectangle Area =${recLength * recWidth}`);
//       break;

//     case "parallelogram":
//       var p_base = Number(prompt("please enter base of the parallelogram"));
//       var p_height = Number(
//         prompt("please enter vertical height of the parallelogram")
//       );
//       alert(`parallelogram Area =${p_base * p_height}`);
//       break;
//     case "trapezium":
//       var t_length1 = Number(
//         prompt("please enter length of side1 of the Trapezium")
//       );
//       var t_length2 = Number(
//         prompt("please enter length of parallel sides of the Trapezium")
//       );
//       var t_height = Number(prompt("please enter  height of the Trapezium"));
//       alert(`Trapezium Area =${0.5 * (t_length1 + t_length2) * t_height}`);
//       break;
//     case "ellipse":
//       var minor_axis1 = Number(
//         prompt("please enter minor_axis1 of the Ellipse")
//       );
//       var minor_axis2 = Number(
//         prompt("please enter minor_axis2 of the Ellipse")
//       );
//       alert(`Ellipse Area =${Math.PI * minor_axis1 * minor_axis2}`);
//       break;
//   }
// }
// calcArea();
