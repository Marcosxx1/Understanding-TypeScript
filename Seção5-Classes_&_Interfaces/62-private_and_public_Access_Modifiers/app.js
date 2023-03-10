//classe Departamento
var Departamento = /** @class */ (function () {
    //construtor
    function Departamento(nome) {
        this.colaboradores = [];
        this.nome = nome;
    }
    //metodo descreve
    Departamento.prototype.descreve = function () {
        console.log('Departamento: ' + this.nome);
    };
    //metodo para adicionar colaboradores
    Departamento.prototype.addColaborador = function (colaboradores) {
        this.colaboradores.push(colaboradores);
    };
    //Mostra quantidade de colaboradores
    //mostra todos os colaboradores
    Departamento.prototype.mostraColabInf = function () {
        console.log(this.colaboradores.length);
        console.log(this.colaboradores);
    };
    return Departamento;
}());
//Instanciando o objeto 'contabilidade'
var contabilidade = new Departamento('Contabilidade');
contabilidade.addColaborador('Aline');
contabilidade.addColaborador('Marcos');
contabilidade.descreve();
contabilidade.mostraColabInf();
/*  const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve(); */ 
