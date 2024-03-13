// Ambas são locais, mas somente let pode ter o valor reatribuido
let localModificavel = 'valor';
const localEstatica = 'valor';

localModificavel = 10; // inclusive pode receber outro tipo

// a linha abaixo gera erro se descomentar, por causa da tentaiva de reatribuir valor a uma constante
// localEstatica = 'valor';

// a adição de elementos do array é permitida mesmo em constantes, pois a referência ao array não é alterada
const arrayConstante = [];
arrayConstante.push('valor');
console.log(arrayConstante);