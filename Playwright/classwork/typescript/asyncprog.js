// let p1=new Promise<string>((resolve,reject)=>{
//     let success=true;
//     if(success!=true){
//         resolve("login success");
//     }
//     else{
//         reject("login failed")
//     }
// })
// p1.then((ele)=>{
//     console.log(ele);
// }).catch((e)=>{
//     console.log(e);
// })
/////-------/////  ASYNC AWAIT RESOLVES AS PROMISE   //////-------////////
// function getUser():Promise<string>{
//     return new Promise((resolve,reject)=>{
//         reject("user not here");
//         resolve("user is there");
//     })
// }
// getUser().catch((e)=>{
//     console.log(e);
// }).then((e)=>{
//     console.log(e);
// })
// let p2=new Promise<number>((resolve)=>{
//     let ans=10;
//     resolve(ans);
// })
// p2.then((e)=>{
//     console.log(e+10);
// })
// p2.then((e)=>{
//     console.log(e+20);
// })
// p2.then((e)=>{
//     console.log(e+30);
// })
// let p2=new Promise<number>((resolve)=>{
//     let ans=10;
//     resolve(ans);
// })
// let ans=p2.then(num=>num*10).then(num=>num*3).then(num=>num*2).then(num=>console.log(num));
let p3 = new Promise((resolve, reject) => {
    let num = 10;
    reject(num);
    resolve(num);
});
p3.catch(num => num * 2).catch(num => num * 3).then(num => num * 2).catch(num => console.log(num));
