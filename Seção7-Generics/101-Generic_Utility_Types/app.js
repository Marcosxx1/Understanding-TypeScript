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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
/* Generic function */
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
function extraiEConverte(obj, key) {
    return 'Valor: ' + obj[key];
}
extraiEConverte({ nome: 'Marcos' }, 'nome');
/* 99 Generic classes */
var Guarda = /** @class */ (function () {
    function Guarda() {
        this.dados = [];
    }
    Guarda.prototype.addItem = function (item) {
        this.dados.push(item);
    };
    Guarda.prototype.removeItem = function (item) {
        this.dados.splice(this.dados.indexOf(item), 1);
    };
    Guarda.prototype.getItems = function () {
        return __spreadArray([], this.dados, true);
    };
    return Guarda;
}());
var guardaTexto = new Guarda();
guardaTexto.addItem('Marcos');
guardaTexto.addItem('Aline');
guardaTexto.addItem('Luiz');
guardaTexto.removeItem('Marcos');
console.log(guardaTexto.getItems());
