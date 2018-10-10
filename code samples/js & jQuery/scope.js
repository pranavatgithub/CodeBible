function checkScope() {
    let i = "function scope";
    if (true) {
        let i = "block scope"; // no error! why this is in another scope bro
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
console.log(checkScope()); // returns function scope