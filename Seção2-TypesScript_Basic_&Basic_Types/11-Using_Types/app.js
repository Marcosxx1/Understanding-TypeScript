/* Tipos principais
    
    number - 1, 5.3, -10     Todos os numeros, sem difereniação
                             entre integers ou floats

    string - 'Hi', "Hi" `Hi` Todos os valores de texto
    
    boolean - true, false    Apenas true ou false
                             Não engloba 'truthy ou falsey
                            */
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 12;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
