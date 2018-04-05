//Boolean Object
//------------------
new Boolean(1) //-----> true
new Boolean(0) //-----> false
new Boolean(true) //-----> true

//falsy values:------

Boolean("") //----> false
Boolean(false)  //  false
Boolean(NaN)   //  false
Boolean(undefined) // false
Boolean(null)  //false

// operator precedence rules
// && is powerful than ||  then ? operator

true || false && false; // true
(true || false) && false; // false -- nope
true || (false && false); // true -- winner, winner!

// philosophy is short circuited ie, if LHS is able to determine result it won't go for RHS
// ex true || false = true so LHS is enough to evaluate if its true (in this case)
