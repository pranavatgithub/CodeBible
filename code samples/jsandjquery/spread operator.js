// max value of an array
//----------------------
var arr = [1, 2, 3];
var max = Math.max(...arr);

console.log(...a) //===>> 1 2 3 

//Objects
//========

var a = {
    a: 1,
    b: 2
}
var b = {
    ...a,
    b: 3
} // will make a copy of a without mutating it and update b to 3

function foo(x, y, z) {
    console.log(x, y, z);
}
foo(...[1, 2, 3]); // 1 2 3 ... before array spreads out that array into args[]

foo.apply(null, [1, 2, 3]); // 1 2 3   null is nothing but the reference obj here its null remember??


var a = [2, 3, 4];
var b = [1, ...a, 5];
console.log(b); // [1,2,3,4,5]  great huh?

function foo(x, y, ...z) { // reverse of spreading all the rest of the datas are combined to z as an array 
    console.log(x, y, z);
}
foo(1, 2, 3, 4, 5); // 1 2 [3,4,5]

function foo(...args) {
    console.log(args);
}
foo(1, 2, 3, 4, 5); // [1,2,3,4,5]