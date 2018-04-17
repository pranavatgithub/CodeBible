var x = new Promise(function (resolve, reject) {
    resolve(42); // resolved 42
    reject(10); // never gets here!! multiple reslove/reject won't work
});
x.then(function (data) {
    //data
}).catch(function (rejecion_reason) {
    //issue??
});
x.then(function (data) {
    //again data multiple then is possible
})

var p = new Promise(function (resolve, reject) {
    foo.bar(); // `foo` is not defined, so error!
    resolve(42); // never gets here :(
});

p.then(
    function fulfilled() {
        // never gets here :(
    },
    function rejected(err) {
        // `err` will be a `TypeError` exception object
        // from the `foo.bar()` line.
    }
);

// promise resolve method

var p1 = Promise.resolve(42); // if u pass a non promise/ non thenable value to this fn it will resolve instantly value of p1 is not 41 instead is a promise
var p2 = Promise.resolve(p1);
p1 === p2; // true

// chained promise

var p = Promise.resolve(21);
p.then(function (v) {
        console.log(v); // 21
        // fulfill the chained promise with value `42`
        return v * 2;
    })
    // here's the chained promise
    .then(function (v) {
        console.log(v); // 42
    });

// case what if i need torun an async call at first .then() ??

var p = Promise.resolve(21);
p.then(function (v) {
        console.log(v); // 21
        // create a promise and return it
        return new Promise(function (resolve, reject) { // return promise instead of just return , otherwise this then block will return immediately and goto next then() chain
            // fulfill with value `42`
            resolve(v * 2);
        });
    })
    .then(function (v) {
        console.log(v); // 42
    });

// Promise-aware ajax

function request(url) {
    return new Promise(function (resolve, reject) {
        // the `ajax(..)` callback should be our
        // promise's `resolve(..)` function
        ajax(url, resolve); // just an async http call ok?
    });
}

// i can easily consume it like this
request("http://some.url.1/")
    .then(function (response1) {
        return request("http://some.url.2/?v=" + response1);
    })
    .then(function (response2) {
        console.log(response2);
    });

// how errors work!!

// step 1:
request("http://some.url.1/")
    // step 2:
    .then(function (response1) {
        foo.bar(); // undefined, error!
        // never gets here
        return request("http://some.url.2/?v=" + response1);
    })
    // step 3:
    .then(
        function fulfilled(response2) { // first fn success
            // never gets here
        },
        // rejection handler to catch the error
        function rejected(err) { // error handler
            console.log(err); // `TypeError` from `foo.bar()` error
            return 42;
        }
    )
    // step 4:
    .then(function (msg) { // since rejection handler is missing if any error happened in above chain and nt properl resolve/rejected it will just throw error in this scope(not inside this fn)
        console.log(msg); // 42
    });

// resolve is not what u think really!!!!!

var rejectedPr = new Promise(function (resolve, reject) {
    // resolve this promise with a rejected promise
    resolve(Promise.reject("Oops")); // resolve here will return a reject with reason Oops not a fulfill or resolve! reolves arg is important
});
rejectedPr.then(
    function fulfilled() {
        // never gets here
    },
    function rejected(err) {
        console.log(err); // "Oops" WTF!!
    }
);