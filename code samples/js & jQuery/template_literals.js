var name = "Kyle";
var greeting = `Hello ${name}!`; // backtick
console.log(greeting); // "Hello Kyle!"
console.log(typeof greeting); // "string"

// fn calls

function upper(s) {
    return s.toUpperCase();
}
var who = "reader";
var text =
    `A very ${upper( "warm" )} welcome
    to all of you ${upper( `${who}s` )}!`;
console.log(text);
// A very WARM welcome
// to all of you READERS!

// splitting up var and string

function bar() {
    return function foo(strings, ...values) {
        console.log(strings);
        console.log(values);
        console.log(strings.raw);
    }
}
var desc = "awesome";
bar() `Everything is ${desc}!`; //not syntax error , we can call a fn like this ! no need of ()
// [ "Everything is ", "!"] // non  vars
// [ "awesome" ] //vars
// [ "Everything is ", "!"] //will preserve values like \n