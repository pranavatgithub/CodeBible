//IMMUTABILITY

//Use methods like map ,filter, concat , spread op, object.assign etc\



Object.assign({}, state, { // {} is the target object , take source state obj and change the property recipe and assign to {}
    recipes: 10 // state won't be changed at all
});

// using spread op

var x = {
    a: 1
}

var b = {
    ...x,
    a: 2
}
// b = { a : 2} no need for ugly codes like above assign()