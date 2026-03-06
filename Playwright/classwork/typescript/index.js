"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = addition;
//type inference--> data type not defined so implicitly defined
var a = 20;
a = 20;
//type annotataion --> data type is defined explicitly
var b = 33;
var c = false;
var d = "hello";
var e;
var f;
var g = {
    name: "sarthak",
    rollno: 2323,
    age: 12,
};
function greet(name, age) {
    if (age === void 0) { age = 22; }
    console.log("".concat(name, " and ").concat(age));
}
// greet("sarthak");
function add(a, b) {
    return a + b;
}
var arrow = function (a, b) {
    return a + b;
};
console.log(arrow(1, 2));
// console.log(add(10,20));
(function () {
    console.log("hello");
});
var arr = [1, 2, 3, 4];
arr.push(3);
//data type of null ,array and object is----> object
//data type of 
// console.log(typeof(null));
console.log();
var arr2 = ["hello", "hiii", 1, 2, 3, true];
;
var p1 = {
    id: 221,
    name: "sarthak",
    age: 22,
    gender: "male",
    sound: function () {
        return "hellloooooo";
    }
};
p1.name = "keshav";
function addition(a, b) {
    return a + b;
}
