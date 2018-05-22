var sym = Symbol("some optional description");
typeof sym; // "symbol"

/*
The main point of a symbol is to create a string-like value that can't collide with any other
value.
just like defining constants 
*/
const EVT_LOGIN = Symbol("event.login");
evthub.listen(EVT_LOGIN, function (data) {
    // ..
});

// create global symbols

const EVT_LOGIN = Symbol.for("event.login"); // define in global scope
console.log(EVT_LOGIN); // Symbol(event.login)

// symbols as obj key

var o = {
    foo: 42,
    [Symbol("bar")]: "hello world",
    baz: true
};
// but when u log it u can't see it!!!
Object.getOwnPropertyNames( o ); // [ "foo","baz" ] WHAT!!

Object.getOwnPropertySymbols( o ); // [ Symbol(bar) ]  now ? yes got it