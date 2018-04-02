//JSON
//---------

var x = {
"firstName" : "Frank",
"lastName" : "Smith",
"phone" : "503-555-1212"
}

//key - value pairs should be quoted

//so firstName : 'Frank' is incorrect

//JSON stringifying


var a = { a: "test" , b : 10 , c : 20 }
JSON.stringify(a);  // '{"a":"test","b":10,"c":20}'
JSON.stringify(a , ["a", "b"])  //'{"a":"test","b":10}'  second arg called replacer (it can be array/function)
JSON.stringify(a, function(k,v){
     if(k!= "a") return v; 
     });
     //'{"b":10,"c":20}' it will act like a middleware/helper fn 

// we can give 1 more arg 3rd one called space

JSON.stringify(a, null, 3); // 3 indentation
JSON.stringify(a, null, "--"); //add -- before each line 