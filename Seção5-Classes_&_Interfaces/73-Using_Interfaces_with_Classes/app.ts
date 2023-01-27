/* 73-Using_Interfaces_with_Classes

uma interface e um tipo custumizado não são os mesmos

interface só podem ser usadas para descrever a estrutura de um objeto 
*/

 interface Saudacao {
     nome: string;
 
     dizOi(frase: string): void;
 }
 
 class Pessoa implements Saudacao{
    nome: string;


    constructor(nome: string){
        this.nome = nome;
    }
    dizOi(frase: string) {
       console.log(frase + ' ' +this.nome );
    }
 }

 let usuario1: Saudacao;

 usuario1 =  new Pessoa('Marcos');

 usuario1.dizOi('Olá - Eu sou: ');