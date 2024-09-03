function isFibonacci(n: number): boolean {
    let a = 0
    let b = 1
    while (a <= n) {
      if (a === n) return true
      let temp = a
      a = b
      b = temp + b
    }
    return false
  }
  
  function fibonacciSequence(n: number): string {
    const sequence: number[] = [0, 1]
    while (sequence[sequence.length - 1] <= n) {
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    }
    const message = isFibonacci(n) ? `O número ${n} pertence à sequência de Fibonacci.` : `O número ${n} não pertence à sequência de Fibonacci.`
    return `Sequência de Fibonacci até ${n}: ${sequence.join(', ')}\n${message}`
  }
  
  console.log(fibonacciSequence(34))
  console.log(fibonacciSequence(35))