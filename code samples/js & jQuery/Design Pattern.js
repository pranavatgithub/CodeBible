//Delegation-Oriented Design

var Task = { // our base class(class really?)
    setID: function (ID) {
        this.id = ID;
    },
    outputID: function () {
        console.log(this.id);
    }
};

// make `XYZ` delegate to `Task`
var XYZ = Object.create(Task); // sub-class
var XXX = Object.create(Task);

XYZ.prepareTask = function (ID, Label) { //extending base class
    this.setID(ID);
    this.label = Label;
};

XYZ.outputTaskDetails = function () {
    this.outputID();
    console.log(this.label);
};

XYZ.setID("000");

XYZ.outputID();

XXX.outputID(); // no problem XXX is whole new thing so XYZ won't effect it (undefined now)

XXX.setID("001");

XXX.outputID(); // similarly it won't affect XYZ as well

XYZ.outputID = function () { //overriden base class methods (polymorphism)
    console.log(this.id + ' overrdiden');
}
XYZ.outputID();

Task.newMethod = function () {
    console.log("new method added to super class");
}
XYZ.newMethod(); // got it no issue so far.


// Prototypical 

function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function () {
    return "I am " + this.me;
};

function Bar(who) {
    Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function () {
    alert("Hello, " + this.identify() + ".");
};
var b1 = new Bar("b1");
var b2 = new Bar("b2");
b1.speak();
b2.speak();

// simplified form via OLOO (Object Linked to Other Object)

var Foo = {
    init: function (who) {
        this.me = who;
    },
    identify: function () {
        return "I am " + this.me;
    }
};
var Bar = Object.create(Foo);
Bar.speak = function () {
    console.log("Hello, " + this.identify() + ".");
};
var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");
b1.speak();
b2.speak();