function isFibonacci(n) {
    var a = 0;
    var b = 1;
    while (a <= n) {
        if (a === n)
            return true;
        var temp = a;
        a = b;
        b = temp + b;
    }
    return false;
}
function fibonacciSequence(n) {
    var sequence = [0, 1];
    while (sequence[sequence.length - 1] <= n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    var message = isFibonacci(n) ? "O n\u00FAmero ".concat(n, " pertence \u00E0 sequ\u00EAncia de Fibonacci.") : "O n\u00FAmero ".concat(n, " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci.");
    return "Sequ\u00EAncia de Fibonacci at\u00E9 ".concat(n, ": ").concat(sequence.join(', '), "\n").concat(message);
}
console.log(fibonacciSequence(34));
console.log(fibonacciSequence(35));
