Factorial

function factorial(n){
    let res = 1;
    let i = 1;
    while(i <= n){
        res = res * i;
        i++
    }
    return res;
}
