"use strict";
// // class Car{
// //     private brand:string;
// //     private color:string="blue";
// //     private start():void{
// //         console.log("this is my car");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// //     }
// //     display():void{
// //         console.log("hii");
// //     }
// //     public getter():void{
// //         console.log(this.brand);
// //         console.log(this.color);
// //         this.start();
// //     }
// //     public setter(brand:string,color:string):void{
// //         this.brand=brand;
// //         this.color=color;
// //     }
// //    constructor(brand:string,color:string){
// //         this.brand=brand;
// //         this.color=color;
// //     }
// // }
// // let c1=new Car("maruti","black");//overrides default values
// // // console.log(c1);
// // c1.getter()
// // c1.setter("honda","blue");
// // c1.getter();
// // //Access Modifier
// // //public
// // //private
// // //protected
// class Animal {
//     eat(){
//         console.log("all animal eat");
//     }
// }
// class cat extends Animal{
//     sound(){
//         console.log("meoww");
//     }
// }
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
exports.Person = Person;
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher(name, company) {
        var _this = _super.call(this, name) || this;
        _this.company = "test yantra";
        _this.company = company;
        return _this;
    }
    teacher.prototype.display = function () {
        console.log("name = ".concat(this.name));
        console.log("company= ".concat(this.company));
    };
    return teacher;
}(Person));
var t = new teacher("sarthak", "xyz");
t.display();
