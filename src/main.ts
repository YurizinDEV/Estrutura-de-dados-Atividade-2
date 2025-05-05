// Yuri Ribeiro Zetoles
// ADS 2025/1

let argumentos: string[] = process.argv.slice(2)

// -------------- NÚMEROS ALEATÓRIOS --------------

function randomNumbers(quantidade: number, min: number, max: number) {
    let numeros: number[] = [];

    for (let i = 0; i < quantidade; i++) {
        let num = Math.floor(Math.random() * (max + 1)) + min;
        numeros.push(num);
    }
    return numeros;
}

if (argumentos[0] === "randomNumbers") {
    const quantidade = parseInt(argumentos[1]);
    const min = parseInt(argumentos[2]);
    const max = parseInt(argumentos[3]);

    const resultado = randomNumbers(quantidade, min, max);
    console.log("Array:", resultado);
}
// node dist/src/main.js randomNumbers 5 1 6    



// -------- MAIOR, MENOR e MÉDIA --------

function calcularEstatisticas() {
    let numeros: number[] = randomNumbers(parseInt(argumentos[1]), 0, 100)

    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0

    for (let valor of numeros) {
        soma += valor

        if (valor >= maior) {
            maior = valor
        }

        if (valor <= menor) {
            menor = valor
        }
    }

    let media = soma / numeros.length

    console.log('Array:', numeros)
    console.log('MAIOR:', maior)
    console.log('MENOR:', menor)
    console.log('MÉDIA:', media)
}

if (argumentos[0] === "calcularEstatisticas") {
    calcularEstatisticas();
}

// node dist/src/main.js calcularEstatisticas 10


// -------------------- PICO -------------------

function encontrarPicos() {
    let numeros: number[] = randomNumbers(parseInt(argumentos[1]), 0, 100)
    let picos: number[] = [];
    let n = numeros.length;

    if (n === 0) return picos;
    if (n === 1) return [numeros[0]];

    if (numeros[0] > numeros[1]) {
        picos.push(numeros[0]);
    }
    else {
    }

    for (let i = 1; i < n - 1; i++) {
        if (numeros[i] > numeros[i - 1] && numeros[i] > numeros[i + 1]) {
            picos.push(numeros[i]);
        }
    }

    if (numeros[n - 1] > numeros[n - 2]) {
        picos.push(numeros[n - 1]);
    }
    else {
    }

    console.log('Array:', numeros);
    console.log('Picos:', picos);
}

if (argumentos[0] === "encontrarPicos") {
    encontrarPicos();
}

// node dist/src/main.js encontrarPicos 10


