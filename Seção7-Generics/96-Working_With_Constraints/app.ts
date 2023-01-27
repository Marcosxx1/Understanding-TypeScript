/*  // array sabe o tipo de dados que é guardado nele
 //   promises sabe qual dado será retornado 
 
 const nomes = ['Marcos', 'Luiz'];


 const nomes2: Array<string> = [];

 nomes2[0].split('');

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
  