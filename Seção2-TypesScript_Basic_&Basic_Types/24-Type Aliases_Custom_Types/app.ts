/* Type Aliases / Custom Types
   na linha 6 e 7 atribuimos aos tipos Combinable e ConversionDescritor
   a união de 'number | string'

   Assim podemos dar um apelido para uma união e utilizá-la ao invés
   de toda a expressão de união
*/
 
type Combinable =  number | string;
type ConversionDescriptor = number| string;

function combine(
   input1: Combinable, 
   input2: ConversionDescriptor , 
   resultConversion: 'as-number' | 'as-text') {
   let result;
   if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
      return  result = +input1 + +input2;
   } else {
     return result = input1.toString() + input2.toString();
   }
/*    if(resultConversion === 'as-number') {
      return +result; //+ na frente é o mesmo que parseFloat (Força para número)
   } else {
       return result;
   } */
  
}
 
const combinedAges = combine(30, 39, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine(30, 26, 'as-number');
console.log(combinedAges);

 
const combinedNames = combine('Marcos', 'Alex', 'as-text');
console.log(combinedNames);
