/*
Sobrecarga
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var DepartamentoTI = /** @class */ (function (_super) {
    __extends(DepartamentoTI, _super);
    function DepartamentoTI(id, admins) {
        var _this = _super.call(this, id, 'TI') || this;
        //Caso for utilizar 'this' SEMPRE será depois do super();
        _this.admins = admins;
        return _this;
    }
    return DepartamentoTI;
}(Departamento));
var DepartamentoContabilidade = /** @class */ (function (_super) {
    __extends(DepartamentoContabilidade, _super);
    function DepartamentoContabilidade(id, relatorio) {
        var _this = _super.call(this, id, 'Contabil') || this;
        _this.relatorio = relatorio;
        return _this;
    }
    DepartamentoContabilidade.prototype.addColaborador = function (nome) {
        if (nome === 'Marcos') {
            return;
        }
        this.colaboradores.push(nome);
    };
    DepartamentoContabilidade.prototype.addRelatorio = function (texto) {
        this.relatorio.push(texto);
    };
    DepartamentoContabilidade.prototype.mostraRelatorio = function () {
        console.log(this.relatorio);
    };
    return DepartamentoContabilidade;
}(Departamento));
//Instanciando o objeto 'contabilidade'
//const contabilidade = new Departamento('Dep1','Contabilidade');
var ti = new DepartamentoTI('Dep2', ['Aline']);
ti.addColaborador('Aline');
ti.addColaborador('Marcos');
ti.descreve();
ti.mostraColabInf();
console.log(ti);
var contabilidade = new DepartamentoContabilidade('Dep2', []);
contabilidade.addRelatorio('Algo deu errado...');
contabilidade.addColaborador('Marcos');
contabilidade.addColaborador('Aline');
contabilidade.mostraRelatorio();
contabilidade.mostraColabInf();
/*  const contabilidadeCopia = {nome: 'Teste', descreve: contabilidade.descreve};

 contabilidadeCopia.descreve(); */ 
