 
 
 class Departamento  {
    nome: string ;
    
    constructor(nome: string){
        this.nome = nome;
    }

    descreve(this: Departamento) {
        console.log('Departamento: ' + this.nome);
    }
 }


 const contabilidade = new Departamento('Contabilidade');

 contabilidade.descreve();

 const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve();