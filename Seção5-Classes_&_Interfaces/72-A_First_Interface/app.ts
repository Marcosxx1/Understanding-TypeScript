/* Interfaces

Descreve a estrutura de um objeto
Não é utilizada como projeto para 
criar objetos, mas sim como um tipo
customizado

Nos permite definir a estrutura de um objeto
podemos usa-la como um tipo para chechar o tipo
de um objeto que tenha a mesma estrutura

*/

interface Pessoa {
    nome: string; // = 'Marcos' interface não podem ter inicializadores
    idade: number;

    dizOi(frase: string): void;
}

let usuario1: Pessoa;

usuario1 = {
    nome: 'Marcos',
    idade: 50,
    dizOi(frase: string){
        console.log(frase + ' ' + this.name);
    }
};

usuario1.dizOi('Olá - Eu sou: ');