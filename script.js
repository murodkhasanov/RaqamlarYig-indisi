//for operatorida

let sum = 0

for(let num = 7881; num > 0;) {
    let res = num % 10;
    sum += res;
    num = Math.floor(num / 10)
}
console.log(sum);