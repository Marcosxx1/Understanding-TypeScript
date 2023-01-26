/* Function return types and 'void' */
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
/* Podemos armazenar uma função em uma variável
em uma variável do tipo número e depois utilizar
essa variável porque a variável aponta para a função */
var combineVaules;
combineVaules = add;
console.log(combineVaules(8, 8));
