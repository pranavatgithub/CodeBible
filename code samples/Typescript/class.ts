class Test{
    constructor() { // one constructor per class. but in Es6 u can have many depending on the len of args[] 

    }
    name: string;
    printName() {
        console.log(this.name);
        return this.name;
    }
}

var testx: Test = new Test();
testx.name = 'pranav';
console.log(testx.printName()); //pranav



// inheritance in action

class Bikes{
    make: string;
    model: string;
    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
    sayMyName() {
        return `I'm ${this.make}  ${this.model}`;
    }
}

let myBike: Bikes = new Bikes('yamaha', 'R15 v3');
console.log(myBike.sayMyName()); // i'm yamaha R15 v3

//now extend bike

class BikeWithEngine extends Bikes{
    engineCapacity: string;
    constructor(make: string, model: string, engineCapacity: string) {
        super(make, model);
        this.engineCapacity = engineCapacity;
    }
    sayMyName() {
        return super.sayMyName() + ` and i have ${this.engineCapacity} of power`;
    }
}

let myNewBike = new BikeWithEngine('yamaha', 'R15 v3', '150 cc');
console.log(myNewBike.sayMyName()); // ​​​​​I'm yamaha  R15 v3 and i have 150 cc of power​​​​​