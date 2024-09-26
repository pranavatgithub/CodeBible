//classes classes JS

class Foo { // nothing but a special fn of name foo, u can't call it from anywhere, no hoisting so define first then use
    constructor(a, b) { // signature
        this.x = a;
        this.y = b;
    }
    gimmeXY() { // class methods - concise methods used in objects
        return this.x * this.y;
    }
}

// ES-5 similar alternative

function Foo(a, b) { // u can call it anywhere, this willbe hoisted
    this.x = a;
    this.y = b;
}
Foo.prototype.gimmeXY = function () {
    return this.x * this.y;
}

var f = new Foo(5, 15); // new is must for classes
f.x; // 5
f.y; // 15
f.gimmeXY(); // 75

// inheritance

class Bar extends Foo {
    constructor(a, b, c) {
        super(a, b);
        this.z = c;
    }
    gimmeXYZ() {
        return super.gimmeXY() * this.z;
    }
}
var b = new Bar(5, 15, 25);
b.x; // 5
b.y; // 15
b.z; // 25
b.gimmeXYZ(); // 1875


// hey who called me ?? target!

class Foo {
    constructor() {
        console.log("Foo: ", new.target.name);
    }
}
class Bar extends Foo {
    constructor() {
        super();
        console.log("Bar: ", new.target.name);
    }
    baz() {
        console.log("baz: ", new.target);
    }
}
var a = new Foo();
// Foo: Foo
var b = new Bar();
// Foo: Bar <-- respects the `new` call-site
// Bar: Bar
b.baz();
// baz: undefined


// static - keep methods/props linked to main obj rather than prototypes

class Foo {
    static cool() {
        console.log("cool");
    }
    wow() {
        console.log("wow");
    }
}
class Bar extends Foo {
    static awesome() {
        super.cool();
        console.log("awesome");
    }
    neat() {
        super.wow();
        console.log("neat");
    }
}
Foo.cool(); // "cool"
Bar.cool(); // "cool"
Bar.awesome(); // "cool"
// "awesome"
var b = new Bar();
b.neat(); // "wow"
// "neat"
b.awesome; // undefined
b.cool; // undefined