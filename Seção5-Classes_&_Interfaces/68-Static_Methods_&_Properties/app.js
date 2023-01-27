/*
68-Static_Methods_&_Properties
$ tsc -t es6 app.ts

LEMBRANDO a propriedade static nos permite utilizar métodos ou propriedades do objeto ou
classe fora dela

Porém, não é possível utilizar, por exemplo, console.log(Departamento.anofiscal) pois
pois está definido como static, isso faz com que a propriedade esteja 'destacada' da
classe
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
    Departamento.criaColaborador = function (nome) {
        return { nome: nome };
    };
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
    Departamento.anoFiscal = 2020;
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
        _this.ultimoRelatorio = relatorio[0];
        return _this;
    }
    Object.defineProperty(DepartamentoContabilidade.prototype, "getRelatorioRecente", {
        //Getter
        get: function () {
            if (this.ultimoRelatorio) {
                return this.ultimoRelatorio;
            }
            throw new Error('Nenhum relatorio enontrado');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DepartamentoContabilidade.prototype, "setRelatorioRecente", {
        //getter
        set: function (valor) {
            if (!valor) {
                throw new Error('Digite um valor');
            }
            this.addRelatorio(valor);
        },
        enumerable: false,
        configurable: true
    });
    DepartamentoContabilidade.prototype.addColaborador = function (nome) {
        if (nome === 'Marcos') {
            return;
        }
        this.colaboradores.push(nome);
    };
    DepartamentoContabilidade.prototype.addRelatorio = function (texto) {
        this.relatorio.push(texto);
        this.ultimoRelatorio = texto;
    };
    DepartamentoContabilidade.prototype.mostraRelatorio = function () {
        console.log(this.relatorio);
    };
    return DepartamentoContabilidade;
}(Departamento));
//Instanciando o objeto 'contabilidade'
//const contabilidade = new Departamento('Dep1','Contabilidade');
var ti = new DepartamentoTI('Dep2', ['Aline']);
var colaborador1 = Departamento.criaColaborador('Luiz');
console.log(colaborador1, Departamento.anoFiscal);
ti.addColaborador('Aline');
ti.addColaborador('Marcos');
ti.descreve();
ti.mostraColabInf();
console.log(ti);
var contabilidade = new DepartamentoContabilidade('Dep2', []);
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
