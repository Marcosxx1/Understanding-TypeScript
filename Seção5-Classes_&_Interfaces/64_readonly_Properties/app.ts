 /* 64. "readonly" Properties
linha 11, no construtor definimos a 'id' como readonly
só será possível iniciala com o construtor e não poderá ser alterada, por enquanto
 */


 //classe Departamento
 class Departamento  {
    private colaboradores: string[] = [];
    
    //construtor
    constructor(private readonly id: string, private nome: string){
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