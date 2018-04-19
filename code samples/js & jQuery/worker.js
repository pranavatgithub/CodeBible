/*
your browser can easily provide multiple instances of the JavaScript
engine, each on its own thread, and let you run a different program in each thread. Each of
those separate threaded pieces of your program is called a "(Web) Worker." This type of
parallelism is called "task parallelism," as the emphasis is on splitting up chunks of your
program to run in parallel.
*/

var w1 = new Worker("http://some.url.1/mycoolworker.js");
w1.terminate();