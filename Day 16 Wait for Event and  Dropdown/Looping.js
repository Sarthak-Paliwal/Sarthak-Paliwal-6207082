var arr = [10, 20, 30, 40, 50, 60];
var obj = {
    key1: "Value1",
    key2: "Value2"
};
//! For of in looping for arrays gives the Value
for (let i of arr){
    console.log(i);
    
}

//! For in looping for arrays gives the index of elements
for (var i in arr) {
    console.log(i);

}
//! Iteration of object 
for (var keys in obj) {
    console.log(keys);
    console.log(obj[keys]);
    
}
