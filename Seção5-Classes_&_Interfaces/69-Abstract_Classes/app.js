/*
69-Abstract_Classes


*/
//classe Departamento
class Departamento {
    //construtor
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.colaboradores = [];
    }
    static criaColaborador(nome) {
        return { nome: nome };
    }
    //metodo descreve
    descreve() {
        console.log(`Departamento(${this.id}): ${this.nome}`);
    }
    //metodo para adicionar colaboradores
    addColaborador(colaboradores) {
        this.colaboradores.push(colaboradores);
    }
    //Mostra quantidade de colaboradores
    //mostra todos os colaboradores
    mostraColabInf() {
        console.log(this.colaboradores.length);
        console.log(this.colaboradores);
    }
}
Departamento.anoFiscal = 2020;
class DepartamentoTI extends Departamento {
    constructor(id, admins) {
        super(id, 'TI');
        //Caso for utilizar 'this' SEMPRE será depois do super();
        this.admins = admins;
    }
}
class DepartamentoContabilidade extends Departamento {
    //Getter
    get getRelatorioRecente() {
        if (this.ultimoRelatorio) {
            return this.ultimoRelatorio;
        }
        throw new Error('Nenhum relatorio enontrado');
    }
    //getter
    set setRelatorioRecente(valor) {
        if (!valor) {
            throw new Error('Digite um valor');
        }
        this.addRelatorio(valor);
    }
    constructor(id, relatorio) {
        super(id, 'Contabil');
        this.relatorio = relatorio;
        this.ultimoRelatorio = relatorio[0];
    }
    descreve() {
        console.log('Departamento de Contabilidade - ID: ' + this.id);
    }
    addColaborador(nome) {
        if (nome === 'Marcos') {
            return;
        }
        this.colaboradores.push(nome);
    }
    addRelatorio(texto) {
        this.relatorio.push(texto);
        this.ultimoRelatorio = texto;
    }
    mostraRelatorio() {
        console.log(this.relatorio);
    }
}
//Instanciando o objeto 'contabilidade'
//const contabilidade = new Departamento('Dep1','Contabilidade');
const ti = new DepartamentoTI('Dep2', ['Aline']);
const colaborador1 = Departamento.criaColaborador('Luiz');
console.log(colaborador1, Departamento.anoFiscal);
ti.addColaborador('Aline');
ti.addColaborador('Marcos');
ti.descreve();
ti.mostraColabInf();
console.log(ti);
const contabilidade = new DepartamentoContabilidade('Dep2', []);
//chamando o seter
contabilidade.setRelatorioRecente = 'Relatório mais recente 1';
contabilidade.addRelatorio('Algo deu errado...');
//chamando o getter depois de adicionar um relatorio
console.log(contabilidade.getRelatorioRecente);
contabilidade.addColaborador('Marcos');
contabilidade.addColaborador('Aline');
//contabilidade.mostraRelatorio();
//contabilidade.mostraColabInf();
contabilidade.descreve();
/*  const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve(); */ 
