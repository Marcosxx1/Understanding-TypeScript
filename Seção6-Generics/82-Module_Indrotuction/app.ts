/* 78-Optional_Parameters_&_Properties

tipos opcionais em interfaces dizem que um valor pode
vir a ser atribuido, mas não é obrigatório
*/

  interface addFunction {
    (a: number, b: number): number;
 }


 let add: addFunction;

 add = (n1: number, n2: number) => {
    return n1 + n2;
 }


 //interface para nome
 //com nomeSaida opcional, ? no final 
 interface Nomeado {
     readonly nome?: string; 
     nomeSaida?: string;
 }

 /* interface que herda de 'Nomeado' */
 interface Saudacao extends Nomeado{
     readonly nome: string;
 
     dizOi(frase: string): void;
 }
 
 //classe pessoa implementa a interface 'Saudacao'
 class Pessoa implements Saudacao{
    nome: string;

    constructor(nome?: string){
        if(nome){
            this.nome = nome;
        }
    }
    dizOi(frase: string) {
       console.log(frase + ' ' +this.nome );
    }
 }
 let usuario1: Saudacao;

 usuario1 =  new Pessoa('');
 //usuario1.nome = 'Marcos'; Não é possível devido ao readonly

 usuario1.dizOi('Olá - Eu sou: ');
 console.log(usuario1);