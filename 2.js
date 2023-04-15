function Fibonacci(number) {
    let a = 0;
    let b = 1; 

    while(b < number) {
        let c = b;
        b = a + b;
        a = c;

    }
    
    if(b === number){
        return true;
    
    }else {
        return false;
    }
}

let number = parseInt(prompt("Digite um número:"));

if(Fibonacci(number)) {
    console.log(number + " pertence à sequência de Fibonacci");
}else {
    console.log(number + " não pertence à sequência de Fibonacci");
}