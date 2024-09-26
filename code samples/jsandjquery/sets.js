// A set is a collection of unique values (duplicates are ignored).
var s = new Set();
var x = { id: 1 },
y = { id: 2 };
s.add( x );
s.add( y );
s.add( x );
s.size; // 2
s.delete( y );
s.size; // 1
s.clear();
s.size; // 0

s.has( x );  //true

// iterating set

var s = new Set();
var x = { id: 1 },
y = { id: 2 };
s.add( x ).add( y );
var keys = [ ...s.keys() ],
vals = [ ...s.values() ],
entries = [ ...s.entries() ];
keys[0] === x;
keys[1] === y;
vals[0] === x;
vals[1] === y;
entries[0][0] === x;
entries[0][1] === x;
entries[1][0] === y;
entries[1][1] === y;

// another form

var s = new Set( [1,2,3,4,"1",2,4,"5"] ),
uniques = [ ...s ];
uniques; // [1,2,3,4,"1","5"]