/* 77-Interfaces_as_Function_Types
    Interfaces também podem ser usadas para definir
    a estrutura de uma função
*/

 //type addFunction = (a: number, b:number) => number;
 interface addFunction {
    (a: number, b: number): number;
 }


 let add: addFunction;

 add = (n1: number, n2: number) => {
    return n1 + n2;
 }


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