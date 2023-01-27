/* 74-Why_Interfaces


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