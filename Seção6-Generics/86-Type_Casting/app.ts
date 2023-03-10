/*86. Type Casting

    */

type Admin = {
    nome: string;
    privilegios: string[];
};

type Colaborador = {
    nome: string;
    dataInicio: Date;
};



type colaboradorElevado = Admin & Colaborador;

const e1: colaboradorElevado = {
    nome: 'Marcos',
    privilegios: ['cria-server'],
    dataInicio: new Date()
};

type Combinavel = string | number;
type Numeric = number | boolean;

type Universal = Combinavel & boolean;

function add(a: Combinavel, b: Combinavel) {
    if (typeof a === 'string' || typeof b === 'string') { //typeguard 
        return a.toString() + b.toString();
    }
    return a + b;
}

type ColaboradorDesconhecido = Colaborador | Admin;

function mostraInformacaoColaborador(colab: ColaboradorDesconhecido) {
    console.log('Nome: ' + colab.nome);
    if('privilegios' in colab){
        console.log('Privilegios: ' + colab.privilegios);
    }
    if('dataInicio' in colab) {
        console.log('Data de início: ' + colab.dataInicio);
    }
}

mostraInformacaoColaborador(e1);


class Carro {
    dirige() {
        console.log('Dirigindo...');
    }
}

class Caminhao {
    dirige() {
        console.log('Dirigindo...');
    }

    tamCarga(quantidade: number){
        console.log('Carregando carga' + quantidade)
    }
}


type Veiculo = Carro | Caminhao;

const v1 = new Carro();
const v2 = new Caminhao();

function usaVeiculo(veiculo: Veiculo) {
    if(veiculo instanceof Caminhao){
        veiculo.tamCarga(1000);
    }
}
usaVeiculo(v1);
usaVeiculo(v2);


/* Discriminated Union */
interface Passaro {
    type: 'passaro';
    velocidadeVoo: number;
}

interface Cavalo {
    type: 'cavalo';
    veloidadeorrida: number;
}

type Animal = Passaro | Cavalo;

function movimentAnimal(animal: Animal) {
    let velocidade;
    switch(animal.type) {
        case 'passaro':
            velocidade = animal.velocidadeVoo;
            break;
        case 'cavalo':
            velocidade = animal.veloidadeorrida;
    }
    console.log('Se movendo a: '+ velocidade);
}


