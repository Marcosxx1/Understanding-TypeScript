var Departamento = /** @class */ (function () {
    function Departamento(nome) {
        this.nome = nome;
    }
    Departamento.prototype.descreve = function () {
        console.log('Departamento: ' + this.nome);
    };
    return Departamento;
}());
var contabilidade = new Departamento('Contabilidade');
contabilidade.descreve();
var contabilidadeCopia = { descreve: contabilidade.descreve };
contabilidadeCopia.descreve();
