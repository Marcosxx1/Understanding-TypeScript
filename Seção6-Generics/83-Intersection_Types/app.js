/* 73-Using_Interfaces_with_Classes

uma interface e um tipo custumizado não são os mesmos

interface só podem ser usadas para descrever a estrutura de um objeto
*/
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.dizOi = function (frase) {
        console.log(frase + ' ' + this.nome);
    };
    return Pessoa;
}());
var usuario1;
usuario1 = new Pessoa('Marcos');
usuario1.dizOi('Olá - Eu sou: ');
