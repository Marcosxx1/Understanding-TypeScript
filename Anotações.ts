  

 function Pessoa(name, idade){
    this.name = name;
    this.idade = idade;
    function dizOi() {
        console.log('oi');
    }
};

//With constructor we can create varios objects dinamically, independet of each other

const pessoa1 = new Pessoa('M', 40);
 

const countnumbers =(...args) => {
    let numbers = args.reduce((aco, atual) => aco + atual, 0);
    return numbers;
}

/* Exemplo de callback function 
    
    dizOi é passado para processaInputUsuario como argumento
    processaInputUsuario pede o nome do usuario e atribui a 'nome
    então invoca a função dizOi(nome) passando o nome que recebeu
     */
function dizOi(name) {
    alert('Oi, ' + name);
  }
  
  function processaInputUsuario(dizOi) {
    var nome = prompt('Por favor, digite seu nome: ');
    dizOi(nome);
  }
  
  processaInputUsuario(dizOi);