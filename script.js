const num = 6

let primeList = ""

for (let j = num - 1; j > 1; j--) {
    isPrime(j)
}

function isPrime(number){
    let isPrime = true

    for (let i = number - 1; i > 1; i--) {
        if (number % i == 0) {
            isPrime = false
        }
    }

    if(isPrime){
        primeList += `${number} `
    }
}

console.log(primeList)