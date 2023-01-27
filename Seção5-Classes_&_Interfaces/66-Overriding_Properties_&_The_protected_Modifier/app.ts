 /* 
Sobrecarga

LEMBRANDO private, as propriedads estão extritas apenas a classe onde são criadas
          protected, deixa classes que herdam da classe principal poderem usar as propriedades
 */


 //classe Departamento
 class Departamento  {
    protected colaboradores: string[] = [];
    
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

class DepartamentoTI extends Departamento {
    admins: string[];

    constructor(id: string, admins: string[]){
        super(id, 'TI');
        //Caso for utilizar 'this' SEMPRE será depois do super();
        this.admins = admins;
    }
}

class DepartamentoContabilidade extends Departamento {

    constructor(id: string, private relatorio: string[]){
        super(id, 'Contabil');
    }

    addColaborador(nome: string) {
        if(nome === 'Marcos'){
            return;
        }
        this.colaboradores.push(nome);
    }

    addRelatorio(texto: string){
        this.relatorio.push(texto);
    }

    mostraRelatorio(){
        console.log(this.relatorio);
    }
}

 //Instanciando o objeto 'contabilidade'
 //const contabilidade = new Departamento('Dep1','Contabilidade');
 const ti = new DepartamentoTI('Dep2',['Aline']);


 ti.addColaborador('Aline');
 ti.addColaborador('Marcos');

 ti.descreve();

 ti.mostraColabInf()

 console.log(ti);

 const contabilidade = new DepartamentoContabilidade('Dep2', []);

 contabilidade.addRelatorio('Algo deu errado...');
 contabilidade.addColaborador('Marcos');
 contabilidade.addColaborador('Aline');
 
 contabilidade.mostraRelatorio();
 contabilidade.mostraColabInf();

/*  const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve(); */