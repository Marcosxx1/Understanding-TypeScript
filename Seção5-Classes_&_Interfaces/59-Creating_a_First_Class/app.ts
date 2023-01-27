 
 
 class Departamento  {
    nome: string ;
    
    constructor(nome: string){
        this.nome = nome;
    }
 }


 const contabilidade = new Departamento('Contabilidade');

 console.log(contabilidade);