//Delegation-Oriented Design

var Task = {  // our base class(class really?)
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

XYZ.outputID = function (){ //overriden base class methods (polymorphism)
    console.log(this.id  + ' overrdiden');
}
XYZ.outputID();

Task.newMethod = function(){
    console.log("new method added to super class");
}
XYZ.newMethod(); // got it no issue so far.