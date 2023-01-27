/*84-More_on_Type_Guards
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
