let pnum = prompt('Enter the number');
let flag = 0;
function isPrime(num){
    
    for (let i = 2; i < num; i++){
        if(num % i == 0){
            return `${num} is Not a prime number` 
        };
    }
    return `${num} is a prime number`
}

var result = isPrime(pnum);
console.log(result);