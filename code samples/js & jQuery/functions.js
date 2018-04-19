//IIFE Immediately involked function
//===================================

(function () {
    alert();
})();

//this function will Immediately involked

//IIFE with args[]
//=================

(function IIFE(global) {
    //..............
    //..............
})(window);

//IIFE with fn as arg[]
//======================

var a = 2;
(function IIFE(def) {
    def(window);
})(function def(global) {
    var a = 3;
    console.log(a); // 3
    console.log(global.a); // 2
});

//CALLING A FUNCTION WITH DIFFERENT KIND OF ARG STRUCTURES

function foo(a, b) {
    console.log("a:" + a + ", b:" + b);
}
// spreading out array as parameters
foo.apply(null, [2, 3]); // a:2, b:3

var ø = Object.create(null);
foo.apply(ø, [2, 3]); // safer binding. passing a pure empty obj, will prevent global obj mutations etc 

// currying with `bind(..)`
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3

// ES6 default args[]

function foo(a = 42, b = a + 1) { // this is how
    console.log(
        arguments.length, a, b,
        arguments[0], arguments[1]
    );
}
foo(); // 0 42 43 undefined undefined see even if we provided default value the arg[] is empty
foo(10); // 1 10 11 10 undefined
foo(10, undefined); // 2 10 11 10 undefined
foo(10, null); // 2 10 null 10 null



// ES6 Generators !!!!! ======================

var x = 1;

function* foo() { // function* foo() everything is ok pos of * is no scene
    x++;
    yield; // pause!
    console.log("x:", x);
}

function bar() {
    x++;
}

//USAGE

// construct an iterator `it` to control the generator
var it = foo(); // not executed foo yet ok?
// start `foo()` here!
it.next();
x; // 2
bar();
x; // 3
it.next(); // x:3

// usgae with normal scenario

function* foo(x, y) {
    return x * y;
}
var it = foo(6, 7);
var res = it.next();
res.value; // 42

// input/output play

function* foo(x) {
    var y = x * (yield);
    return y;
}
var it = foo(6);
// start `foo(..)`
it.next(); // saw first yield so stopped , yield asked hey give me the value!!

var res = it.next(7); // value given to yield
res.value; // 42 done!


// multiple iterators

function* foo() {
    var x = yield 2;
    z++;
    var y = yield(x * z);
    console.log(x, y, z);
}
var z = 1;
var it1 = foo();
var it2 = foo();
var val1 = it1.next().value; // 2 <-- yield 2
var val2 = it2.next().value; // 2 <-- yield 2
val1 = it1.next(val2 * 10).value; // 40 <-- x:20, z:2
val2 = it2.next(val1 * 5).value; // 600 <-- x:200, z:3
it1.next(val2 / 2); // y:300
// 20 300 3
it2.next(val1 / 4); // y:10
// 200 10 3

// iterating over a yield function using for...of loop

function* something() { // just a infinite number generator
    var nextVal;
    while (true) {
        if (nextVal === undefined) {
            nextVal = 1;
        } else {
            nextVal = (3 * nextVal) + 6;
        }
        yield nextVal;
    }
}

for (var v of something()) {
    console.log(v);
    // don't let the loop run forever!
    if (v > 500) {
        break;
    }
}
// 1 9 33 105 321 969
// ========================================== ======== ======