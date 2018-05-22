//literal form
var x = {
    "a": 1,
    "b": 2
}

//constructed form
var myObj = new Object();
myObj.key = value;

// fetch all keys
Object.keys(x) // return [a,b] in array form

//Computed property method

var prefix = "foo";
var myObject = {
    [prefix + "bar"]: "hello", //key is evaluated and assigned
    [prefix + "baz"]: "world"
};
myObject["foobar"]; // hello
myObject["foobaz"]; // world

// how do i clone/copy an object easy??
// heck NO (till ES5) but now its easy cool :)
var newObj = Object.assign({}, myObject); // ES6 introduced assign method , takes target obj, source obj and returns 
// target obj which will be the copy of source obj

// property descriptors ==== INTRO TO IMMUTABILITY

var myObject = {
    a: 2
};
Object.getOwnPropertyDescriptor(myObject, "a"); //contain infos regarding a prop
// {
// value: 2,
// writable: true,
// enumerable: true,
// configurable: true
// }

var myObject = {};
Object.defineProperty(myObject, "a", { // we can define props like this 
    value: 2,
    writable: false, // not writable!
    configurable: true, // if u set it to false you can't go back , u can't change these property descriptors again
    //that means u can't redefine prop "a" with different prop descriptors CAREFUL WHILE DOING THIS
    enumerable: true
});
myObject.a = 3;
myObject.a; // 2 (immutable obj!)

// PREVENT EXTENSIONS

var myObject = {
    a: 2
};
Object.preventExtensions(myObject); // now on you can't add new props

// SEAL vs FREEZE

Object.seal(myObject) // seal = prevent extension + configurable false (but writable)

Object.freeze(myObject) // freeze = seal + write false . so the object is purely treated as a const

// EXISTENCE OF OBJECT

var myObject = {
    a: 2
};
("a" in myObject); // true
("b" in myObject); // false  // DIFF B/W in and hasOwnProp is that - in will check objects as well as its prototypes

myObject.hasOwnProperty("a"); // true // this just check just in object level don't look into its prototypes
myObject.hasOwnProperty("b"); // false

// ENUMERABLE + IN/HAS_OWN_PROP

var myObject = {};
Object.defineProperty(
    myObject,
    "a",
    // make `a` enumerable, as normal // AVAILABLE in hasownprop
    {
        enumerable: true,
        value: 2
    }
);
Object.defineProperty(
    myObject,
    "b",
    // make `b` NON-enumerable // only available in prototypes (using in)
    {
        enumerable: false,
        value: 3
    }
);
myObject.b; // 3
("b" in myObject); // true
myObject.hasOwnProperty("b"); // true
// .......
for (var k in myObject) {
    console.log(k, myObject[k]);
}
// "a" 2 WTF where is b? boy its not enumerable, even if "b" in myObject = true , b won't show here

// object short hand property ES6
var test = [];
var w = {
    test // is equal to test: test
}

// re-defined object literals consise methods

var x = 2,
    y = 3,
    o = {
        x: x,
        y: y
    };

var x = 2,
    y = 3,
    o = {
        x, // can be write like this as well
        y
    };

// what about fns??

var o = {
    x: function () {
        // ..
    },
    y: function () {
        // ..
    }
}

var o = {
    x() {
        // ..
    },
    y() {
        // ..
    }
}

// we can use generators as well

var o = {
    * foo() {
        //----------
    }
};

//object getter / setter ES5

var o = {
    __id: 10,
    get id() {
        return this.__id++;
    },
    set id(v) {
        this.__id = v;
    }
}
o.id; // 10
o.id; // 11

// specify expression  as key

var prefix = "user_";
var o = {
    baz: function () {},
    [prefix + "foo"]: function () {},
    [prefix + "bar"]: function () {}
};

// prototype linkage via object literels

var o1 = {
    // ..
};
var o2 = {
    __proto__: o1,
    // ..
};

// or by this

Object.setPrototypeOf( o2, o1 );