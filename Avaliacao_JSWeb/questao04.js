let objeto = {
    atributo: "valor",
    funcaoDeExpressao: function(){ console.log(this.atributo); }, // imprime "valor", pois é o valor do atributo no contexto (this) do objeto
    arrowFunction: () => { console.log(this.atributo); } // imprime undefined, pois arrow function não possui o contexto (this)
}

objeto.funcaoDeExpressao();
objeto.arrowFunction();