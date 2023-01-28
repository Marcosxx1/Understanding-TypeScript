 /*Uma função que é aplicada a algo  
 
 decorators roda quando o Js encontra a definição do constructor
 quando encontra o constructor da classe*/
 export{};
 function Logger(logString: string){
  return function (constructor: Function){
   console.log(logString);
   console.log(constructor);
  }

 }

 @Logger('LOGGING - PERSON') 
 class Pessoa {
    name = 'Max';

    constructor(){
      console.log('Criando objeto pessoa...');
    }
 }

 const pessoa = new Pessoa();
 
 