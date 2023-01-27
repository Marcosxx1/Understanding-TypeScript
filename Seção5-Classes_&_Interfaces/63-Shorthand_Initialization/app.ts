 /*Podemos inicializar tudo direto no construtor, dessa forma
 não precisamos criar várias propriedades Ex: 
 
     constructor(id: string, nome: string){  
        this.nome = nome;
    }

    os nomes dos argumentos do construtor devem ser os mesmos 
    que serão utilizados na classe
    constructor(private id: string, private nome:string){

    }
 */


 //classe Departamento
 class Departamento  {
    private colaboradores: string[] = [];
    
    //construtor
    constructor(private id: string, private nome: string){
     }
 

    //metodo descreve
    descreve(this: Departamento) {
        console.log(`Departamento(${this.id}): ${this.nome}`);
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
 const contabilidade = new Departamento('Dep1','Contabilidade');


 contabilidade.addColaborador('Aline');
 contabilidade.addColaborador('Marcos');

 contabilidade.descreve();

 contabilidade.mostraColabInf()

/*  const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve(); */