/*  // array sabe o tipo de dados que é guardado nele
 //   promises sabe qual dado será retornado
 
 const nomes = ['Marcos', 'Luiz'];


 const nomes2: Array<string> = [];

 nomes2[0]  .split('');

 const promise: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('this is done!');
    }, 2000);
 }) */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
function contaEDescreve(elemento) {
    var textoDesricao = 'Sem valor';
    if (elemento.length === 1) {
        textoDesricao = 'Um elemento';
    }
    else if (elemento.length > 1) {
        textoDesricao = 'Tem ' + elemento.length + ' elementos';
    }
    return [elemento, textoDesricao];
}
console.log(contaEDescreve([]));
