function foo(x, y) {
    return request(
        "http://some.url.1/?x=" + x + "&y=" + y
    );
}
async function main() {
    try {
        var text = await foo(11, 31); //wait till it completes and proceeds 
        console.log(text);
    } catch (err) {
        console.error(err);
    }
}
main();