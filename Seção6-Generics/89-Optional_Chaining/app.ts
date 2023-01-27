/*89-Optional_Chaining

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


/* Sobrecarga (Overload)
Basca criar as variações necessárias */
function add(a:number, b:number): number;
function add(a:string, b:string): string;
function add(a:string, b:number): string;
function add(a:number, b:string): string;
function add(a: Combinavel, b: Combinavel) {
    if (typeof a === 'string' || typeof b === 'string') { //typeguard 
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('1', '2');

result.split(' ');

const dadosRecebidos = {
    id: 'ui',
    nome: 'Marcos',
    //trabalho: {titulo: 'CEO', descrica: 'Minha companhia!'};
};




/* type ColaboradorDesconhecido = Colaborador | Admin;

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


/* Discriminated Union  
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


  Type casting
Index properties 
//const elementoInputUsuario = <HTMLInputElement>document.getElementById('user-input');
const elementoInputUsuario = <HTMLInputElement>document.getElementById('user-input');  

if(elementoInputUsuario){
    (elementoInputUsuario as HTMLInputElement).value = 'Oi!';
}

interface containerErro {
    [pop: string]: string;
}

const notifError: containerErro = {
    email: 'Nome não é válido',
    userName: 'Deve começar com letra maiúscula!'
};  */