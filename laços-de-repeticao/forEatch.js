// let soma = 0

// const numeros = [65, 44, 12, 4]

// numeros.forEach(minhaFuncao)

// function minhaFuncao() {

// }

// numeros.forEach(minhaFuncao)

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// notas.forEach(somaNotas);

// function somaNotas(notas) {
//     somaDasNotas += notas;
// }

// const media = somaDasNotas / notas.length;

// alert(`Media: ${media}`)

const notas = [10, 6.5, 8, 7.5];

function mostraNota(nota) {
    alert(nota)
}

function verificaSeNotaAprovado(nota) {
    if (nota > 7) {
        alert(`Nota: ${nota} Aluno Aprovado!`)
    } else {
        alert(`Nota: ${nota} Aluno Reprovado!`)
    }
}

nota.forEatch(verificaSeNotaAprovado)