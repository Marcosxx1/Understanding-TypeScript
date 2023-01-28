 
 function Logger(logString: string){
  return function (constructor: Function){
   console.log(logString);
   console.log(constructor);
  }

 }

 function withTemplate(template: string, hookId: string){
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if(hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p;
    }
  }
 }

 //@Logger('LOGGING - PERSON') 
 @withTemplate('<h1>Objeto pessoa</h1>', 'app')
 class Pessoa {
    name = 'Max';

    constructor(){
      console.log('Criando objeto pessoa...');
    }
 }

 const pessoa = new Pessoa();
 
 