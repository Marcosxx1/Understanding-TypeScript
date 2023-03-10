"use strict";
/* Function return types and 'void'

Nos permite descrever quais tipo de funções
 especificamente queremos utilizar em algum lugar
 seja um valor esperado em um parametro, uma função
 de callback ou em uma variável*/
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
let combineVaules;
combineVaules = add;
//combineVaules = printResult;
//combineVaules = 5;
console.log(combineVaules(8, 8));
