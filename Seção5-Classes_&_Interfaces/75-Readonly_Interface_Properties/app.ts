/* 75-Readonly_Interface_Properties


*/

 interface Saudacao {
     readonly nome: string;//Apenas leitura
 
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
 //usuario1.nome = 'Marcos'; Não é possível devido ao readonly

 usuario1.dizOi('Olá - Eu sou: ');
 console.log(usuario1);