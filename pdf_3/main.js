// //-----------///////////-Object Methods//////-----------------

// //  --------------------1)-Object.entries();---------------------------------------
// var object1 = {
//   Name: "Remonda Refat",
//   University: "Alexandria",
//   Major :"Chemistry",
//   Gender:"F",
//   Age: 25,
//   Helloo(){
//     console.log("Welcome in js")
//   }
// };
// console.log(Object.entries(object1));
// // Return value :
// // An array of the given object's own enumerable string-keyed property key-value pairs.
// // Each key-value pair is an array with two elements: the first element is the property
// //key (which is always a string), and the second element is the property value

// // ----------------------2)-Object.keys()----------------------------------------------
// console.log(Object.keys(object1));
// // Expected output: Array ["name", "university", "Major" ,"Gender" , "Age"]
// // Return value :
// // An array of strings representing the given object's own enumerable
// // string-keyed property keys.

// // ----------------------3)-Object.values()-----------------------------------------------
// console.log(Object.values(object1));
// // Return value
// // An array containing the given object's own enumerable string-keyed property values.

// // ----------------------4)-Object.hasOwn()-----------------------------------------------
// console.log(Object.hasOwn(object1, 'Name'));
// // Expected output: true
// console.log(Object.hasOwn(object1, 'toString'));
// // Expected output: false
// // Return value:
// // true if the specified object has directly defined the specified property.
// // Otherwise false

// // ----------------------4)-Object.create()-----------------------------------------
// const User = Object.create(object1);
// User.name = 'Matthew'; // "name" is a property set on "User", but not on "person"
// User.Age = 23; // Inherited properties can be overwritten
// User.Helloo();
// // Expected output: "My name is Matthew. Am I human? true"
// // Return value:
// // A new object with the specified prototype object and properties.

// // -----------------------5)-Object.assign()---------------------------------------------
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget === target);
// // Expected output: true
// // Description:
// // Properties in the target object are overwritten by properties in the sources
// // if they have the same key. Later sources' properties overwrite earlier ones.

// // -----------------------7)-Object.defineProperties()------------------------------------
// const object2 = {};

// Object.defineProperties(object2, {
//   property1: {
//     value: 42,
//     writable: true,
//   },
//   property2: {},
// });
// console.log(object2.property1);
// // Expected output: 42
// // The Object.defineProperties() static method defines new or
// //  modifies existing properties directly on an object, returning the object.

// // -----------------------8)-Object.defineProperty()------------------------------------

// const object3 = {};

// Object.defineProperty(object3, 'property3', {
//   value: 42,
//   writable: false,
// });

// object3.property3 = 77;
// // Throws an error in strict mode
// console.log(object3.property3);
// // Expected output: 42
// // The Object.defineProperty() static method defines a new property directly on an object,
// //  or modifies an existing property on an object, and returns the object.

// // -----------------------9)-Object.preventExtensions()------------------------------------
// let object4 ={};
// Object.preventExtensions(object4);
// Object.defineProperty(object4, 'property3', {
//   value: 500,
//   writable: false,
// });
// console.log(object4)
// //output:Cannot define property property3, object is not extensible
// //Description:
// // The Object.preventExtensions() static method prevents new properties from ever being added to an object
// // (i.e. prevents future extensions to the object).It also prevents the object's prototype
// //  from being re-assigned.

// // -----------------------10)-Object.isExtensible()------------------------------------
// const object5 = {};

// console.log(Object.isExtensible(object5));
// // Expected output: true

// Object.preventExtensions(object5);

// console.log(Object.isExtensible(object5));
// // Expected output: false
// // The Object.isExtensible() static method determines if an object is extensible
// //  (whether it can have new properties added to it).

// //-----------------------------Array Methods---------------------------

// // -----------------------1)-Array length------------------------------------
var friends = ["Remonda", "Yousef", "Mariam", "Maro"];
let size = friends.length;
console.log(size);
// // Expected output: 4
// // The length property returns the length (size) of an array:

// // -----------------------2)-Array toString()------------------------------------
var output = friends.toString();
console.log(output);
// // Expected output: Remonda,Yousef,Mariam,Maro
// The JavaScript method toString()
// converts an array to a string of (comma separated) array values.

// // -----------------------3)-Array join()------------------------------------
var output2 = friends.join("/");
console.log(output2);
// // Expected output: Remonda/Yousef/Mariam/Maro
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

// // -----------------------4)-Array pop()------------------------------------
var output3 = friends.pop();
console.log(output3);
// // Expected output: Maro
// The pop() method returns the value that was "popped out":
console.log(friends);
// // Expected output: ['Remonda', 'Yousef', 'Mariam']
// The pop() method removes the last element from an array:

// // -----------------------5)-Array push()------------------------------------
var output4 = friends.push("Merna");
console.log(output4);
// // Expected output: 4
// The push() method returns the new array length:
console.log(friends);
// // Expected output:['Remonda', 'Yousef', 'Mariam', 'Merna']
// The push() method adds a new element to an array (at the end):

// // -----------------------6)-Array shift()------------------------------------
var output5 = friends.shift();
console.log(output5);
// // Expected output: Remonda
// The shift() method returns the value that was "shifted out":
console.log(friends);
// // Expected output:[ 'Yousef', 'Mariam', 'Merna']
// The shift() method removes the first array element and "shifts" all other
// elements to a lower index

// // -----------------------7)-Array unshift()------------------------------------
var output5 = friends.unshift("Donia");
console.log(output5);
// // Expected output:4
// The unshift() method returns the new array length:
console.log(friends);
// // Expected output:['Donia', 'Yousef', 'Mariam', 'Merna']
//The unshift() method adds a new element to an array
// (at the beginning), and "unshifts" older elements:

// // -----------------------8)-Merging (Concatenating) Arrays---------------------------
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
// // Expected output:['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']
// The concat() method creates a new array by merging (concatenating) existing arrays:

// // -----------------------9)-Array splice()---------------------------
friends.splice(2, 1, "Mina", "Mohamed");
console.log(friends);
// // Expected output:['Donia', 'Yousef', 'Mina', 'Mohamed', 'Merna']
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Mina" , "Mohamed") define the new elements to be added.
// The splice() method returns an array with the deleted items:

// // -----------------------10)-Array slice()---------------------------
const output6 = friends.slice(1, 3);
console.log(output6);
// Expected output:  ['Yousef', 'Mina']
// The slice() method slices out a piece of an array into a new array.

// -----------------------------------------------------------------------------------
