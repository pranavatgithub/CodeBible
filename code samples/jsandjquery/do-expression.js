//ES7 thing
var a,b;
a = do {
    if(true){
        b = 20* 4; // will execute and assign to a because it is the last executed value in the scope
    }
};
//a will be 80 