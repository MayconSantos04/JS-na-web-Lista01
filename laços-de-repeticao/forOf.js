// let iterable = [10, 20, 30];

// let result = prompt(`Defina um valor: ${result}`)

// for (let value of iterable) {

//     let soma = result + value
//     alert(`Numeração: ${value}`)
//     alert(result)

// }

const notas = [10, 5, 6, 7, 8]

let somaTotal = 0

for (let nota of notas) {
    somaTotal += nota

    alert(somaTotal)
}