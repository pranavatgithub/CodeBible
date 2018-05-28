//module pattern in JS

// "Revealing Module"

function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join(" ! "));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}
var foo = CoolModule();
var foo2 = CoolModule(); //another totally independent inst
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

// How do i make CoolModule singleton??

var foo = (function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join(" ! "));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
})();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
// foo is fixed can't create one more inst 

//====== HIGH LEVEL MODULE

var MyModules = (function Manager() {  // base module
    var modules = {};
    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }
    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();

// Extending features to above 

MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }
    return {
        hello: hello
    };
});
MyModules.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";
    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }
    return {
        awesome: awesome
    };
});
var bar = MyModules.get("bar");
var foo = MyModules.get("foo");
console.log(
    bar.hello("hippo")
); // Let me introduce: hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO

// here comes the ES-6 King of modules::::
// different modules should be in different files

//bar.js
function hello(who) {
    return "Let me introduce: " + who;
}
export hello;

//foo.js
// import only `hello()` from the "bar" module
import hello from "bar";
var hungry = "hippo";
function awesome() {
    console.log(
        hello(hungry).toUpperCase()
    );
}
export awesome;

//import severel files
// import the entire "foo" and "bar" modules
module foo from "foo";
module bar from "bar";
console.log(
    bar.hello("rhino")
); // Let me introduce: rhino
foo.awesome(); // LET ME INTRODUCE: HIPPO

// rename foo on export
function foo() { // 

}
export { foo as bar };