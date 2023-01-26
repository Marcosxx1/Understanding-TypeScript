  

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


 // In JavaScript, there are several types of functions:

/* Function Declaration:*/ 
function sum(a, b) {
  return a + b;
}

//Function Expression:

const multiply = function(a, b) {
  return a * b;
}
//Arrow Function:
 
const divide = (a, b) => {
  return a / b;
}
//Constructor Function:
 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log("Hello, my name is " + this.name);
    }
  }
  
  var person1 = new Person("Marcos", 300);
  person1.greet(); // "Hello, my name is Marcos"
//Async Function:
 
async function fetchData() {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    return data;
}
//Class Method:
 
class Calculator {
    add(a, b) {
        return a + b;
    }
}

//Recursive function:
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

console.log(factorial(5)); // 120

//Closure: 
function makeCounter() {
  var count = 0;
  return function() {
    return count++;
  }
}

var counter1 = makeCounter();
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2

var counter2 = makeCounter();
console.log(counter2()); // 0
console.log(counter2()); // 1

//Callback Funciton
 
function greeting(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name:");
  callback(name);
}

processUserInput(greeting);

//Anonymous

(function() {
    console.log("I am an anonymous function");
})();

//Que é o mesmo que isso
const myFunc = function() {
    console.log("I am an anonymous function");
}
myFunc();

