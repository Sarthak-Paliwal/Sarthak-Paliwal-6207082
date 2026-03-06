//?all
let p1 = Promise.resolve("promise 1");
let p2 = Promise.resolve("promise 2");
let p3 = Promise.reject("promise 3");
Promise.allSettled([p1, p2, p3])
    .then(res => console.log(res)).
    catch(res => console.log(res));
// Promise.allSettled([p1,p2,p3]).then(res=>console.log(res)).catch(res=>console.log(res))
// Promise.race([p2,p1,p3]).then(res=>console.log(res)).then(res=>console.log(res)
// )
// Promise.any([p3,p1,p2]).then(res=>console.log(res)).then(res=>console.log(res)
// )
