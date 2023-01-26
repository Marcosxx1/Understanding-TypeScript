function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineVaules;
combineVaules = add;
//combineVaules = printResult;
//combineVaules = 5;
console.log(combineVaules(8, 8));
