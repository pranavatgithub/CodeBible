// block scoped variables before ES6

var a = 2;
(function IIFE() { //should need to use IIFE to achieve it 
    var a = 3;
    console.log(a); // 3
})();
console.log(a); // 2

// ES6 Magic

let a = 3; // it will be block scope

// ===== or

var a = 2;

{ // block scoping
    let a = 3;
    console.log(a); // 3
}
console.log(a); // 2

// multiple variables in one line

let a = 2,
    b, c;

// these let vars only be available after this line if u try to access them before decalration u will get
// referece error  a Temporal Dead Zone (TDZ) error

{
    console.log(a); // undefined
    console.log(b); // ReferenceError!
    var a;
    let b;
}