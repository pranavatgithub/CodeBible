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

// use cases of default arg value
function foo(x = 11, y = 31) {
    console.log(x + y);
}
foo(); // 42
foo(5, 6); // 11
foo(0, 42); // 42
foo(5); // 36
foo(5, undefined); // 36 <-- `undefined` is missing
foo(5, null); // 5 <-- null coerces to `0`
foo(undefined, 6); // 17 <-- `undefined` is missing
foo(null, 6); // 6 <-- null coerces to `0`

// default values as expressions

function bar(val) {
    console.log("bar called!");
    return y + val;
}

function foo(x = y + 3, z = bar(x)) {
    console.log(x, z);
}
var y = 5;
foo(); // "bar called"
// 8 13
foo(10); // "bar called"
// 10 15
y = 6;
foo(undefined, 10); // 9 10


// issue with some cases
var w = 1,
    z = 2;

function foo(x = w + 1, y = x + 1, z = z + 1) { // here z is the villain how?
    //z is not initialised (its present in LHS of z + 1 butvalue don't know so err)
    console.log(x, y, z);
}
foo(); // ReferenceError



// ES6 Generators !!!!! ======================

var x = 1;

function* foo() { // function *foo() everything is ok pos of * is no scene
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
        break; // terminate a generator 1 way
    }
}
// 1 9 33 105 321 969


// cleaning up a finished iterator

function* something() {
    try {
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
    // cleanup clause
    finally {
        console.log("cleaning up!"); // will execute even if something() is done or errored
    }
}

var it = something();
it.return("I'm Done"); // terminates the above iterator


// ASYNC GENERATOR FUNCTIONS AWESOMENESS

function foo(x, y) { // where is the promise and non sense?? fuck all
    ajax(
        "http://some.url.1/?x=" + x + "&y=" + y,
        function (err, data) {
            if (err) {
                // throw an error into `*main()`
                it.throw(err);
            } else {
                // resume `*main()` with received `data`
                it.next(data);
            }
        }
    );
}

function* main() {
    try {
        var text = yield foo(11, 31);
        console.log(text);
    } catch (err) {
        console.error(err);
    }
}
var it = main();
// start it all up!
it.next();


//PROMISE WITH GENERATOR

function foo(x, y) {
    return request(
        "http://some.url.1/?x=" + x + "&y=" + y
    );
}

function* main() {
    try {
        var text = yield foo(11, 31);
        console.log(text);
    } catch (err) {
        console.error(err);
    }
}

var it = main();
var p = it.next().value;
// wait for the `p` promise to resolve
p.then(
    function (text) {
        it.next(text);
    },
    function (err) {
        it.throw(err);
    }
);

// some advanced scenario with promise all

function* foo() {
    // make both requests "in parallel," and
    // wait until both promises resolve
    var results = yield Promise.all([
        request("http://some.url.1"),
        request("http://some.url.2")
    ]);
    var r1 = results[0];
    var r2 = results[1];
    var r3 = yield request(
        "http://some.url.3/?v=" + r1 + "," + r2
    );
    console.log(r3);
}

// yield*

function* foo() {
    yield* [1, 2, 3];
}

// above fn equal to
function* foo() {
    yield 1;
    yield 2;
    yield 3;
}
//and can use it like
function* bar() {
    yield* foo();
}

// example

function* foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

function* bar() {
    var x = yield* foo(); // 1,2,3 will returns but it won't stops
    console.log("x:", x);
}
for (var v of bar()) {
    console.log(v);
}
// 1 2 3
// x: { value: 4, done: true }

// completion early

function* foo() {
    yield 1;
    yield 2;
    yield 3;
}
var it = foo();
it.next(); // { value: 1, done: false }
it.return(42); // { value: 42, done: true } // i'm fed up so i'm stoping here
it.next(); // { value: undefined, done: true }


// generator and finally

function* foo() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } finally {
        console.log("cleanup!"); // will execute once done
    }
}
for (var v of foo()) {
    console.log(v);
}
// 1 2 3
// cleanup!
var it = foo();
it.next(); // { value: 1, done: false }
it.return(42); // cleanup!
// { value: 42, done: true }


//early abortion using throw! we don't always need return to stop an iterator

function* foo() {
    yield 1;
    yield 2;
    yield 3;
}
var it = foo();
it.next(); // { value: 1, done: false }
try {
    it.throw("Oops!");
} catch (err) {
    console.log(err); // Exception: Oops!
}
it.next(); // { value: undefined, done: true }

// ========================================== ======== ======