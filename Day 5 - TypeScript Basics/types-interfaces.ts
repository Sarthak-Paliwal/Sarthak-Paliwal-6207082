//type inference--> data type not defined so implicitly defined
let a=20;

a=20;
//type annotataion --> data type is defined explicitly
let b:number=33;
let c:boolean=false;
let d:string="hello";
let e:undefined;
let f:null;
let g:{name:string,rollno?:number,age:number}={
    name:"sarthak",
    rollno:2323,
    age:12,
}
function greet(name:string,age:number=22):void{
        console.log(`${name} and ${age}`);
        
}
// greet("sarthak");
function add(a:number,b:number):number {
    return a+b;
}
let arrow=(a:number,b:number):number=>{
    return a+b;}
console.log(arrow(1,2));

// console.log(add(10,20));
(()=>{
    console.log("hello");
    
})
let arr: (number)[]=[1,2,3,4];
arr.push(3)
//data type of null ,array and object is----> object
//data type of 
// console.log(typeof(null));
console.log();

let arr2: readonly (string|number|boolean)[]=["hello","hiii",1,2,3,true]

//Interface
//better definition to define object
interface Person{
    readonly id:(number),
    name:string,
    age:number,
    gender?:string,
    sound?():string
    
};

let p1: Person={
    id:221,
    name:"sarthak",
    age:22,
    gender:"male",
    sound(){
        return "hellloooooo"
    }
    
    
}
p1.name="keshav";

export function addition(a:number,b:number):number{
    return a+b;
}