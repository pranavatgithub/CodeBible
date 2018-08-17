let ee = new EventEmitter();
ee.subscribe((name:string)=>console.log(`Hello${name}`));
ee.emit("Nate");
//->"HelloNate"