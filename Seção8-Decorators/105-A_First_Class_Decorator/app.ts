 /*Uma função que é aplicada a algo  */
export{};
 function Logger(constructor: Function){
   console.log('Logging...');
   console.log(constructor);
 }

 @Logger
 class Pessoa {
    name = 'Max';

    constructor(){
      console.log('Criando objeto pessoa...');
    }
 }

 const pessoa = new Pessoa();
 
 