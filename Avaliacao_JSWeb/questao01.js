// A função receberá uma outra função como parâmetro e a executará
function executaCallback(funcao){
    funcao();
}

const helloWord = function(){ console.log("Hello Word!"); }

// a função executaCallback executará a função de expressão helloWord
executaCallback(helloWord);

// também executa funções anônimas
executaCallback(function(){ console.log("Olá Mundo!") });