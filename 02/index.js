let numero = parseInt(prompt("Informe um número:"))
let fibonacci = [0, 1]

for (let i = 0; i < numero; i++) {
    let proximoValor = fibonacci[i] + fibonacci[i + 1]
    fibonacci.push(proximoValor)
}

if (fibonacci.includes(numero)) {
    alert(`${numero} pertence à sequência de Fibonacci.`)
} else {
    alert(`${numero} não pertence à sequência de Fibonacci.`)
}