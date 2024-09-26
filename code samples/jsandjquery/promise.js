// PROMISE SKELETON
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

// promise resolve method =======

var p1 = Promise.resolve(42); // if u pass a non promise/ non thenable value to this fn it will resolve instantly value of p1 is not 41 instead is a promise
var p2 = Promise.resolve(p1);
p1 === p2; // true

// chained promise =============

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

// case what if i need to run an async call at first .then() ??

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

// i can easily consume it like this anywhere 
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
    resolve(Promise.reject("Oops")); // resolve here will return a reject with reason Oops not a fulfill or resolve! reolves arg is important hence the name resolve
});
rejectedPr.then(
    function fulfilled() {
        // never gets here
    },
    function rejected(err) {
        console.log(err); // "Oops" WTF!!
    }
);

//NOTE 
//the fulfilled and rejected names used by ES6 specs are onFulfilled & onRejected

// handling a delayed api call using PROMISE RACE

// a utility for timing out a Promise
function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Timeout!");
        }, delay);
    });
}
// setup a timeout for `foo()`
Promise.race([
        foo(), // attempt `foo()` say foo is an api call if it took more than 3s its timeout fn wins the race
        timeoutPromise(3000) // give it 3 seconds
    ])
    .then(
        function () {
            // `foo(..)` fulfilled in time!
        },
        function (err) {
            // either `foo()` rejected, or it just
            // didn't finish in time, so inspect
            // `err` to know which
        }
    );

// PROMISE ALL

var p1 = request("http://some.url.1/");
var p2 = request("http://some.url.2/");
Promise.all([p1, p2]) // like a gate wait for finishing the parellaly running tasks
    .then(function (msgs) {
        // both `p1` and `p2` fulfill and pass in
        // their messages here will be an array form of msgs, if either one is rejected msgs will be rejected value of that
        return request(
            "http://some.url.3/?v=" + msgs.join(",")
        );
    })
    .then(function (msg) {
        console.log(msg);
    });

// Types of PROMISE METHODS

//  Promise.none([ .. ]) is like all([ .. ]) , but fulfillments and rejections are transposed. All
//Promises need to be rejected -- rejections become the fulfillment values and vice versa.
// Promise.any([ .. ]) is like all([ .. ]) , but it ignores any rejections, so only one needs to
//fulfill instead of all of them.
// Promise.first([ .. ]) is a like a race with any([ .. ]) , which is that it ignores any rejections
//and fulfills as soon as the first Promise fulfills.
// Promise.last([ .. ]) is like first([ .. ]) , but only the latest fulfillment wins.

// playing with promises 

Promise.map = function (vals, cb) { // say vals maybe promises/ thenables/ regular values
    // new promise that waits for all mapped promises
    return Promise.all(
        // note: regular array `map(..)`, turns
        // the array of values into an array of
        // promises
        vals.map(function (val) {
            // replace `val` with a new promise that
            // resolves after `val` is async mapped
            return new Promise(function (resolve) {
                cb(val, resolve);
            });
        })
    );
};

// multiple promise handling using array map

var p1 = Promise.resolve(21);
var p2 = Promise.resolve(42);
var p3 = Promise.reject("Oops");
// double values in list even if they're in
// Promises
Promise.map([p1, p2, p3], function (pr, done) { // same can be achieved by promise.all but u need to extract values after then
        // make sure the item itself is a Promise
        Promise.resolve(pr)
            .then(
                // extract value as `v`
                function (v) {
                    // map fulfillment `v` to new value
                    done(v * 2);
                },
                // or, map to promise rejection message
                done
            );
    })
    .then(function (vals) {
        console.log(vals); // [42,84,"Oops"]
    });


//BEST PRACTICES

// 1.u need to work with datas in different promises

function getY(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve((3 * x) - 1);
        }, 100);
    });
}

function foo(bar, baz) {
    var x = bar * baz;
    // return both promises
    return [
        Promise.resolve(x),
        getY(x)
    ];
}

Promise.all(
        foo(10, 20)
    )
    .then(function (msgs) {
        var [x, y] = msgs; // ES6 destructuring
        console.log(x, y); // 200 599
    });

// we can make it even better

Promise.all(
        foo(10, 20)
    )
    .then(function ([x,y]) { //array param destructuring
        console.log(x, y); // 200 599
    });