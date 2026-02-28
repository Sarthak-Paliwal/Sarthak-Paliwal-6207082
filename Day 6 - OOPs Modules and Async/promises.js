//? an object--> represents failure or completion on assync operation
//pending
//fulfilled
//rejected
// let promise=new Promise<string>((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("Success");
//     }
//     else{
//         reject("failure");
//     }
// })
// promise.then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// })
//!Static methods in promise
//?all
// let p1=Promise.resolve("1st promise");
// let p2=Promise.resolve("2nd Promise");
// let p3=Promise.reject("3rd Promise");
// Promise.all([p1,p2,p3])
// .then(console.log
// ).catch(console.error);
//?all settled
// let p1=Promise.resolve("1st promise");
// let p2=Promise.resolve("2nd Promise");
// let p3=Promise.reject("3rd Promise");
// Promise.allSettled([p1,p2,p3]).then(console.log).catch(console.error);
//? race
let p1 = Promise.resolve("1st promise");
let p2 = Promise.resolve("2nd Promise");
let p3 = Promise.reject("3rd Promise");
Promise.race([p2, p3, p1]).then(console.log).catch(console.error);
