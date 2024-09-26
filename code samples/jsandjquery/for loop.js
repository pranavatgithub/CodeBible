//push all odd numbers i incremented by 2
//-------------------------------------------
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

//odd numbers from 9 to 1 is desc order
//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// for in 
var a = ["a", "b", "c", "d", "e"];
for (var idx in a) { //loops through indexes
  console.log(idx);
}
// 0 1 2 3 4 //index

// for of ---> we can call break; return etc inside it
for (var val of a) { //over array
  console.log(val);
}
// "a" "b" "c" "d" "e" // values

for (var c of "hello") { //over string
  console.log(c);
}
// "h" "e" "l" "l" "o"

var o = {}; // lhs of of can be destructuring operations as well
for (o.a of [1, 2, 3]) {
  console.log(o.a);
}
// 1 2 3
for ({
    x: o.a
  } of [{
    x: 1
  }, {
    x: 2
  }, {
    x: 3
  }]) {
  console.log(o.a);
}
// 1 2 3