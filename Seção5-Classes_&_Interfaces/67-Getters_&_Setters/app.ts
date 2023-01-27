 /* 
67-Getters_&_Setters
$ tsc -t es6 app.ts
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
    private ultimoRelatorio: string;

  //Getter
    get getRelatorioRecente(){

        if(this.ultimoRelatorio){
            return this.ultimoRelatorio;
        } 
        throw new Error('Nenhum relatorio enontrado');
    }

    //getter
    set setRelatorioRecente(valor: string){
        if(!valor){
            throw new Error('Digite um valor');
        }
        this.addRelatorio(valor);
    }

    constructor(id: string, private relatorio: string[]){
        super(id, 'Contabil');
        this.ultimoRelatorio = relatorio[0];
    }

    addColaborador(nome: string) {
        if(nome === 'Marcos'){
            return;
        }
        this.colaboradores.push(nome);
    }

    addRelatorio(texto: string){
        this.relatorio.push(texto);
        this.ultimoRelatorio = texto; 

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


//chamando o seter
contabilidade.setRelatorioRecente = 'Relatório mais recente 1';

contabilidade.addRelatorio('Algo deu errado...');

//chamando o getter depois de adicionar um relatorio
console.log(contabilidade.getRelatorioRecente);


 contabilidade.addColaborador('Marcos');
 contabilidade.addColaborador('Aline');
 
 contabilidade.mostraRelatorio();
 contabilidade.mostraColabInf();

/*  const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve(); */