/*  Só descomentar o script que funciona
 //classe Departamento
 class Departamento  {
    nome: string ;
   private colaboradores: string[] = [];
    
    //construtor
    constructor(nome: string){
        this.nome = nome;
    }
    /* 
    Modificadores de acesso, nesta aula estamos vendo PRIVATE
    
    


    //metodo descreve
    descreve(this: Departamento) {
        console.log('Departamento: ' + this.nome);
    }
    
    //metodo para adicionar colaboradores
    addColaborador(colaboradores: string){
        this.colaboradores.push(colaboradores);
    }

    //Mostra quantidade de colaboradores
    //mostra todos os colaboradores
    mostraColabInf(){
        console.log(this.colaboradores.length);
        console.log(this.colaboradores);
    }
 }



 //Instanciando o objeto 'contabilidade'
 const contabilidade = new Departamento('Contabilidade');


 contabilidade.addColaborador('Aline');
 contabilidade.addColaborador('Marcos');

 contabilidade.descreve();

 contabilidade.mostraColabInf()

 const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve();  */