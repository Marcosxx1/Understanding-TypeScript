/* 76-Extending_Interfaces*/


 //interface para nome
 interface Nomeado {
     readonly nome: string; 
 }

 /* interface que herda de 'Nomeado' */
 interface Saudacao extends Nomeado{
     readonly nome: string;
 
     dizOi(frase: string): void;
 }
 
 //classe pessoa implementa a interface 'Saudacao'
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
 //usuario1.nome = 'Marcos'; Não é possível devido ao readonly

 usuario1.dizOi('Olá - Eu sou: ');
 console.log(usuario1);