class Test{
    name: string;
    printName() {
        console.log(this.name);
        return this.name;
    }
}

var testx = new Test();
testx.name = 'pranav';
console.log(testx.printName()); //pranav
