let alunos = [{
        nome: "A. Pessoa",
        nascimento: "01-02-2003",
        cpf: "010.020.030-04",
        matricula: '01022003',
        notas: [1, 2, 3, 4],
        media: function(){
            let media = 0;
            this.notas.forEach(nota => media += nota);
            return media / this.notas.length;
        }
    },
    {
        nome: "B. Pessoa",
        nascimento: "02-03-2004",
        cpf: "020.030.040-05",
        matricula: '02032004',
        notas: [2, 3, 4, 5],
        media: function(){
            let media = 0;
            this.notas.forEach(nota => media += nota);
            return media / this.notas.length;
        }
    },
    {
        nome: "C. Pessoa",
        nascimento: "03-04-2005",
        cpf: "030.040.050-06",
        matricula: '03042005',
        notas: [3, 4, 5, 6],
        media: function(){
            let media = 0;
            this.notas.forEach(nota => media += nota);
            return media / this.notas.length;
        }
    },
    {
        nome: "D. Pessoa",
        nascimento: "04-05-2006",
        cpf: "040.050.060-07",
        matricula: '04052006',
        notas: [4, 5, 6, 7],
        media: function(){
            let media = 0;
            this.notas.forEach(nota => media += nota);
            return media / this.notas.length;
        }
    },
    {
        nome: "E. Pessoa",
        nascimento: "05-06-2007",
        cpf: "050.060.070-08",
        matricula: '05062007',
        notas: [5, 6, 7, 8],
        media: function(){
            let media = 0;
            this.notas.forEach(nota => media += nota);
            return media / this.notas.length;
        }
    }
]

function calcularMedias(alunos){
    let media = {
        geral: 0,
        maior: 0,
        menor: 0
    }

    alunos.forEach(aluno => {
        let mediaAluno = aluno.media();
        if (media.maior == 0 || mediaAluno > media.maior){ media.maior = mediaAluno; }
        if (media.menor == 0 || mediaAluno < media.menor){ media.menor = mediaAluno; }
        media.geral += mediaAluno;
    });

    media.geral /= alunos.length;

    return media;
}

console.log(alunos);

let media = calcularMedias(alunos);
console.log(`Média Geral: ${media.geral} \nMaior Média: ${media.maior} \nMenor Média: ${media.menor}`)