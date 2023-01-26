let userInput: unknown;
let unserName: string;


/* Diferente de any pois é mais retritivo
Temos que checar o tipo que está  armazenado
atualmente em um variável*/


userInput = 5;
userInput = 'max';
if(typeof userInput === 'string') {
    unserName = userInput;
}