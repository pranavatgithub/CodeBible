// extracting values from array
var results = ["1", "2"];
var [res1, res2] = results;
console.log(res1, res2); //1 2

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