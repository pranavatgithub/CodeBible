// JS supports number by default but it has some issues
// 0.1 + 0.2 === 0.3 ? no in JS its not, because its using binary fp numbers

// so how we compare 2 values??

function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON; // ES6 got Number.EPSILON called "machine epsilon" - rounding error value
}
var a = 0.1 + 0.2;
var b = 0.3;
numbersCloseEnoughToEqual(a, b); // true
numbersCloseEnoughToEqual(0.0000001, 0.0000002); // false

// what is the max value js supports??

//its 
Number.MAX_SAFE_INTEGER; //or 2^53 -1  9007199254740991  9 quadrillion

//minimum 
Number.MIN_SAFE_INTEGER;

// but bit wise operations are supported on The range  Math.pow(-2,31) ( -2147483648 , about -2.1 billion) up to
// Math.pow(2,31)-1 ( 2147483647 , about +2.1 billion)  much much smaller is really safe

//check for integer

Number.isInteger( 42 ); // true 
Number.isInteger( 42.000 ); // true
Number.isInteger( 42.3 ); // false
//check if it is not number

isNaN(19); //false
isNaN("sss"); //true

//check if it is integer

Number.isInteger(10); //true
Number.isInteger(10.5); //false

//parse string to number

var x = parseInt('12px');
// x; 12
var z = parseInt("test");
//z NaN

// parse int with radix -- for converting numbers to different base

var k = parseInt(1010, 2);
//  k; will be 10  1010 is eq to 10 in base 10 system (so base 2 to 10)