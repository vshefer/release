function fibonacci(n) {
    return n && (n - 1) && fibonacci(n - 1) + fibonacci(n - 2) || n;
}

function fibonacciByTail(n, num = 1, sum = 0) {
    if(n < 2) {
        return num;
    }
    return fibonacciByTail(n - 1, sum, sum + num);
}
