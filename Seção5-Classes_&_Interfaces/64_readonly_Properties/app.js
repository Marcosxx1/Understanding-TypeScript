/* 64. "readonly" Properties

*/
//classe Departamento
var Departamento = /** @class */ (function () {
    //construtor
    function Departamento(id, nome) {
        this.id = id;
        this.nome = nome;
        this.colaboradores = [];
    }
    //metodo descreve
    Departamento.prototype.descreve = function () {
        console.log("Departamento(".concat(this.id, "): ").concat(this.nome));
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
var contabilidade = new Departamento('Dep1', 'Contabilidade');
contabilidade.addColaborador('Aline');
contabilidade.addColaborador('Marcos');
contabilidade.descreve();
contabilidade.mostraColabInf();
/*  const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve(); */ 
