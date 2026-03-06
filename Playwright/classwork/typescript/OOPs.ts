
// // class Car{
// //     private brand:string;
// //     private color:string="blue";
// //     private start():void{
// //         console.log("this is my car");
        
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







export class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }

}
class teacher extends Person {
    company:string="test yantra"
    constructor(name:string,company:string){
        super(name);
        this.company=company;
    }
    display():void{
        console.log(`name = ${this.name}`);
        console.log(`company= ${this.company}`);

        
    }
        
    
}
let t=new teacher("sarthak","xyz");
t.display();