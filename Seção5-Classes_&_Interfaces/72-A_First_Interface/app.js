/* Interfaces

Descreve a estrutura de um objeto
Não é utilizada como projeto para
criar objetos, mas sim como um tipo
customizado
*/
var usuario1;
usuario1 = {
    nome: 'Marcos',
    idade: 50,
    dizOi: function (frase) {
        console.log(frase + ' ' + this.name);
    }
};
usuario1.dizOi('Olá - Eu sou: ');
