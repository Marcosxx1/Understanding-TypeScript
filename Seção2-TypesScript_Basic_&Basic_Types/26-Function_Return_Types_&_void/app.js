/* Literal Types
São tipos em que não se diz apenas que uma determinada variavel ou parametro
vai receber um tipo, mas definimos o tipo exato que a variável vai guardar*/
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        return result = +input1 + +input2;
    }
    else {
        return result = input1.toString() + input2.toString();
    }
    /*    if(resultConversion === 'as-number') {
          return +result; //+ na frente é o mesmo que parseFloat (Força para número)
       } else {
           return result;
       } */
}
var combinedAges = combine(30, 39, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedNames = combine('Marcos', 'Alex', 'as-text');
console.log(combinedNames);
