// extracting values from array
var results = ["1", "2"];
var [res1, res2] = results;
console.log(res1, res2); //1 2

//extracting seperately
var a = [2, 3, 4];
var [b, ...c] = a;
console.log(b, c); // 2 [3,4]

//assigning to objs
var a1 = [1, 2, 3],
    o2 = {};
[o2.a, o2.b, o2.c] = a1;
console.log(o2.a, o2.b, o2.c); // 1 2 3

// arrray re ordering
var a1 = [1, 2, 3],
    a2 = [];
[a2[2], a2[0], a2[1]] = a1;
console.log(a2); // [2,3,1]

// swap2 vars

var x = 10,
    y = 20;
[y, x] = [x, y];
console.log(x, y); // 20 10

// assignment 

var {
    a: X, // defining X,Y variables with value 1 (typeof LHS a:X/Y = rhs a: 1 => X/Y replaced with 1)
    a: Y
} = {
    a: 1
};
X; // 1
Y; // 1

var App = {
    model: {
        User: function () {
            console.log('may day!!');
        }
    }
};
// instead of:
// var User = App.model.User;
var {
    model: {
        User // User:User
    }
} = App;

// Repeated assignments
var {
    a: {
        x: X,
        x: Y
    },
    a
} = {
    a: {
        x: 1
    }
};
X; // 1
Y; // 1
a; // { x: 1 }

// nested destructuring

var a1 = [1, [2, 3, 4], 5];
var o1 = {
    x: {
        y: {
            z: 6
        }
    }
};
var [a, [b, c, d], e] = a1;
var {
    x: {
        y: {
            z: w
        }
    }
} = o1;
console.log(a, b, c, d, e); // 1 2 3 4 5
console.log(w); // 6

// more nesting

var App = {
    model: {
        User: function () {
            //chumma
        }
    }
};
// instead of:
// var User = App.model.User;
var {
    model: {
        User
    }
} = App;

// destructuring + default params

function f6({
    x = 10
} = {}, {
    y
} = {
    y: 10
}) {
    console.log(x, y);
}
f6(); // 10 10

f6({}, {}); // 10 undefined y? {y} won't get {y:10} default arg[] instead get the passed {}



// merge `defaults` into `config`
{
    // destructure (with default value assignments)
    let {
        options: {
            remove = defaults.options.remove,
            enable = defaults.options.enable,
            instance = defaults.options.instance
        } = {},
        log: {
            warn = defaults.log.warn,
            error = defaults.log.error
        } = {}
    } = config;
    // restructure
    config = {
        options: {
            remove,
            enable,
            instance
        },
        log: {
            warn,
            error
        }
    };
}

// destructuring + default values

var [a = 3, b = 6, c = 9, d = 12] = foo();
var {
    x = 5, y = 10, z = 15, w = 20
} = bar();
console.log(a, b, c, d); // 1 2 3 12 assume d is ot the in return value of foo()
console.log(x, y, z, w); // 4 5 6 20 assume w ""

//fn and destructuring

function foo([x, y]) {
    console.log(x, y);
}
foo([1, 2]); // 1 2
foo([1]); // 1 undefined
foo([]); // undefined undefined

//fn arg with obj destructuring
function foo({
    x,
    y
}) {
    console.log(x, y);
}
foo({
    y: 1,
    x: 2
}); // 2 1
foo({
    y: 42
}); // undefined 42
foo({}); // undefined undefined