let pessoa = {
    nome: "A. Pessoa",
    nascimento: "01-02-2003",
    cpf: "010.020.030-04"
}

let aluno = {
    ...pessoa, // coloca todos os atributos de pessoa dentro do objeto aluno
    matricula: '01022003',
    notas: [1, 2, 3, 4],
    media: function(){
        let media = 0;
        this.notas.forEach(nota => media += nota);
        return media / this.notas.length;
    }
}

console.log(pessoa);
console.log(aluno);
console.log(`Média: ${aluno.media()}`)