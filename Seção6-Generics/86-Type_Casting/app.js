/*86. Type Casting

    */
var e1 = {
    nome: 'Marcos',
    privilegios: ['cria-server'],
    dataInicio: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //typeguard 
        return a.toString() + b.toString();
    }
    return a + b;
}
function mostraInformacaoColaborador(colab) {
    console.log('Nome: ' + colab.nome);
    if ('privilegios' in colab) {
        console.log('Privilegios: ' + colab.privilegios);
    }
    if ('dataInicio' in colab) {
        console.log('Data de início: ' + colab.dataInicio);
    }
}
mostraInformacaoColaborador(e1);
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.dirige = function () {
        console.log('Dirigindo...');
    };
    return Carro;
}());
var Caminhao = /** @class */ (function () {
    function Caminhao() {
    }
    Caminhao.prototype.dirige = function () {
        console.log('Dirigindo...');
    };
    Caminhao.prototype.tamCarga = function (quantidade) {
        console.log('Carregando carga' + quantidade);
    };
    return Caminhao;
}());
var v1 = new Carro();
var v2 = new Caminhao();
function usaVeiculo(veiculo) {
    if (veiculo instanceof Caminhao) {
        veiculo.tamCarga(1000);
    }
}
usaVeiculo(v1);
usaVeiculo(v2);
function movimentAnimal(animal) {
    var velocidade;
    switch (animal.type) {
        case 'passaro':
            velocidade = animal.velocidadeVoo;
            break;
        case 'cavalo':
            velocidade = animal.veloidadeorrida;
    }
    console.log('Se movendo a: ' + velocidade);
}
/* Type casting */
//const elementoInputUsuario = <HTMLInputElement>document.getElementById('user-input');
var elementoInputUsuario = document.getElementById('user-input');
!AS;
HTMLInputElement;
elementoInputUsuario.value = 'Oi!';
