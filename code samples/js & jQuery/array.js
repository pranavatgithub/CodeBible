var a = ['a', 'b', 'c', 'd'];

a.join() //---> a,b,c,d as string

a.join('-') //-------> a-b-c-d

a.join(':') //-------> a:b:c:d

a.shift() //---->a=[b,c,d] & a.shift() value=a

a.unshift("4", "5"); //----->4,5,a,b,c,d adds at beginning(opposite to push where it is added at end)

a.slice(1, 4) //-->start index=1,endindex=4 extract from 1 to 4  ( index start form 1 rather than 0 ,so 1 means starting from 0)

var myArray = new Array("1", "2", "3", "4", "5");

myArray.splice(1, 3, "a", "b", "c", "d"); // myArray is now ["1", "a", "b", "c", "d", "5"]   1=start 3=how many to remove //delete at loc and add new

a.reverse()
//-----------------------------------------------------------------------------------------------------------------------------------------------

//CLONE ARRAY
//-----------
var b = a.slice();

//DELETE ITEM AT A SPECIFIC INDEX
//---------------------------------

var a = a.splice(index=0, howmany=0);

//CONCAT
//------

a.concat("a", "b", "c");
//-- -- -- > a, b, c, d, a, b, c

var oldArray = [1, 2, 3];
var newArray = [];
var concatMe = [4, 5, 6];

newArray = oldArray.concat(concatMe); // [1,2,3,4,5,6] o/p

//------------------------------------------------------------------------------------------------------------------------------------------------

//SORT  !important
//------------------------------------------------------------------------------------------------------------------------------------------------
myArray.sort(); // it sorts like string based so for sorting numberic values u need to use following callbacks(comparators)

//numerical sort
myArray.sort(function (a, b) { // sort with callback
  return a < b; //descendingly sorted
});

myArray.sort(function (a, b) { // sort with callback here a & b are compared in some way if(a before b return -1 if a=b return 0 else +1(a after b))dont get it yar 
  return a - b; //ascendingly sorted
});


//-----------------------------------------------------------------------------------------------------------------------------------------------

//INDEX/LAST_INDEX
//----------------
var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // logs 5

var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.indexOf('b')); // logs 1

//-----------------------------------------------------------------------------------------------------------------------------------------------

//FOR EACH
//------------------------------
var a = ['a', 'b', 'c'];
a.forEach(function (element) {
  console.log(element);
}); //no break is supported
// logs each item in turn

//example with callback in other function
//---------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------

//MAP
//----

var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function (item) {
  return item.toUpperCase();
}); // see it didnt alter the first array a1 but iterate through a1 and created a2 array
console.log(a2); // logs ['A', 'B', 'C']

//------------------------------------------------------------------------------------------------------------------------------------------------------

//FILTER
//-------

var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function (item) {
  return typeof item === 'number';
});
console.log(a2); // logs [10, 20, 30]

//with seperate function as callback
//-----------------------------------

function destroyer(arr) {
  function checkThis(item) {
    return !(args.includes(item));
  }
  var args = Array.from(arguments);

  return args[0].filter(checkThis);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//------------------------------------------------------------------------------------------------------------------------------------------------------

//EVERY
//------

function isNumber(value) {
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true  //can be break at any point 
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOME
//----

function isNumber(value) {
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // logs true
var a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // logs false


//------------------------------------------------------------------------------------------------------------------------------------------------------------


//multi array
//------------

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
] //matrix kinda access value 5 by a[1][1]

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//REDUCE
//---------------------------------------

var array = [4, 5, 6, 7, 8];
var singleVal = 0;

singleVal = array.reduce(function (previousVal, currentVal) { // previousval hold the previous return value yoo
  return previousVal + currentVal; // add 4+5+6+7+8
}, 0); // index of the array to start

//INCLUDES
//------------------------------
var a = ["a", "e", "i", "o", "u"]

a.includes("a") // -------------> true

//---------------------------------------------------------------------------------------------------------------------------------------------------
//CHECKING FOR ARRAY
//-----------------------
var a = [1, 2, 3]
Array.isArray(a) //-- -- - > true

// ITERATING ARRAY

var a = [1, 2, 3]

for (let w of a) {
  console.log(w);
}

//array to string

var a = [1, 2, 3];
a.toString(); // "1,2,3"

//array of vs array plain

var a = Array(3);
a.length; // 3
a[0]; // undefined
var b = Array.of(3);
b.length; // 1
b[0]; // 3

// array from

var arrLike = {
  length: 4,
  2: "foo"
};
Array.from(arrLike);
// [ undefined, undefined, "foo", undefined ]

var arr = Array.from(arrLike);
var arrCopy = Array.from(arr);

// copywithin note:- mutate small portions, result won't change the overall length of arr

[1, 2, 3, 4, 5].copyWithin(3, 0); // [1,2,3,1,2]  index to paste, start index of copy - end index of copy
[1, 2, 3, 4, 5].copyWithin(3, 0, 1); // [1,2,3,1,5]
[1, 2, 3, 4, 5].copyWithin(0, -2); // [4,5,3,4,5]
[1, 2, 3, 4, 5].copyWithin(0, -2, -1); // [4,2,3,4,5]

// fill

var a = [null, null, null, null].fill(42, 1, 3);
a; // [null,42,42,null]

// find()

var a = [1, 2, 3, 4, 5];
a.find(function matcher(v) {
  return v == "2";
}); // 2
a.find(function matcher(v) {
  return v == 7; // undefined
});

// Re ordering array elems -not recommended monkey patch!!

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

var ar = [1,2,3,4,5];
ar.move(0,3);
console.log(ar) // 2,3,4,1,5

// instead swap can be like following

var arr = [1,2,3,4,5];
var tmp = arr.splice(0,1); // delete 1 item from 0th index
tmp; // [1]
arr.splice(1,0,...tmp); // add 1 item at 1st position 
arr; // [2,1,3,4,5]