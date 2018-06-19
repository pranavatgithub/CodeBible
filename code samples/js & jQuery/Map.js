var m = new Map();
var x = { id: 1 },
y = { id: 2 };
m.set( x, "foo" );
m.set( y, "bar" );
m.get( x ); // "foo"
m.get( y ); // "bar"


// copy map

var m2 = new Map( m.entries() );
// same as:
var m2 = new Map( m );

// values

var m = new Map();
var x = { id: 1 },
y = { id: 2 };
m.set( x, "foo" );
m.set( y, "bar" );
var vals = [ ...m.values() ];
vals; // ["foo","bar"]
Array.from( m.values() ); // ["foo","bar"]

// entries

var vals = [ ...m.entries() ];
vals[0][0] === x; // true
vals[0][1]; // "foo"
vals[1][0] === y; // true
vals[1][1]; // "bar"

//keys

var keys = [ ...m.keys() ];
keys[0] === x; // true
keys[1] === y; // true


// check if akey is there

var m = new Map();
var x = { id: 1 },
y = { id: 2 };
m.set( x, "foo" );
m.has( x ); // true
m.has( y ); // false

var m = new WeakMap(); // same like Map() but it take (only) objects as keys. Those objects are held weakly, which means if the
// object itself is GC'd, the entry in the WeakMap is also removed, WeakMaps do not have a size property or clear()