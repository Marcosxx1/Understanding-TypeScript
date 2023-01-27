/*  // array sabe o tipo de dados que é guardado nele
 //   promises sabe qual dado será retornado 
 
 const nomes = ['Marcos', 'Luiz'];


 const nomes2: Array<string> = [];

 nomes2[0]  .split('');

 const promise: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('this is done!');
    }, 2000);
 }) */


 
 

  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  
  const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
  console.log(mergedObj);

  interface Tamanho {
    length: number;
  }


  /* Generic function */
  function contaEDescreve<T extends Tamanho>(elemento: T){
    let textoDesricao = 'Sem valor';
    if(elemento.length === 1){
      textoDesricao = 'Um elemento';
    } else if ( elemento.length > 1){
      textoDesricao = 'Tem ' +elemento.length + ' elementos'
    }
    return [elemento, textoDesricao];
  }
  
  console.log(contaEDescreve([]));


  function extraiEConverte<T extends object, U extends keyof T>(obj:object, key: string){
    return 'Valor: '+ obj[key]; 
  }

  extraiEConverte({nome: 'Marcos'}, 'nome');


  type StrNumBool = string | number | boolean;

  /* 99 Generic classes */
  class Guarda<T extends StrNumBool> {
    private dados: T[] = [];
    
    addItem(item: T) {
      this.dados.push(item);
    }

    removeItem(item: T){
      if(this.dados.indexOf(item) === -1){
        return;
      }
      this.dados.splice(this.dados.indexOf(item), 1);
    }

    getItems(){
      return [...this.dados];
    }
  }


const guardaTexto = new Guarda<string>();
guardaTexto.addItem('Marcos');
guardaTexto.addItem('Aline');
guardaTexto.addItem('Luiz');
guardaTexto.removeItem('Marcos');
console.log(guardaTexto.getItems());


const guardaNumero = new Guarda<number>();

/* const guardaObjeto = new Guarda<object>();
guardaObjeto.addItem({nome: 'Max'});
guardaObjeto.addItem({nome: 'Manu'});

guardaObjeto.removeItem({name: 'Max'}); */


/* 101 */

 
 