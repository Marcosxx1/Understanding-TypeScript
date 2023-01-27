/* Intersection Types

    | = união
    & = intersecção
    
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