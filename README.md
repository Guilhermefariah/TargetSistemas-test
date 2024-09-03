# Target Sistemas Test

Este projeto contém vários exemplos de código em TypeScript, incluindo:

*   Uma função para verificar se um número é um número de Fibonacci
*   Uma função para gerar a sequência de Fibonacci até um determinado número
*   Uma função para contar a ocorrência da letra "a" em um texto
*   Um exemplo de lógica para completar uma sequência numérica
*   Um exemplo de resolução de um problema lógico com interruptores e lâmpadas

Instalação
------------

Para executar este projeto, você precisará ter o TypeScript instalado em sua máquina. Você pode instalar o TypeScript usando o npm:

```bash
npm install typescript
```

Compilação
------------

Para compilar o código, execute o seguinte comando

```bash
tsc src/letter/Letter.ts src/fibonacci/Fibonacci.ts src/sum/sum.ts --outDir build
```

Este comando irá compilar os arquivos `Letter.ts`, `Fibonacci.ts` e `sum.ts` e gerar os arquivos JavaScript correspondentes na pasta `build`.

Execução
------------

Para executar os exemplos, você pode usar os seguintes comandos

*   `node build/letter/Letter.js`: Executa a função para contar a ocorrência da letra "a" em um texto.
*   `node build/fibonacci/Fibonacci.js`: Executa a função para gerar a sequência de Fibonacci até um determinado número.
*   `node build/sum/sum.js`: Executa o exemplo de lógica para completar uma sequência numérica.

Você também pode executar todos os exemplos de uma vez usando o comando

```bash
node build/letter/Letter.js && node build/fibonacci/Fibonacci.js && node build/sum/sum.js
```

Lógica para completar uma sequência numérica
------------------------------------------

O exemplo de lógica para completar uma sequência numérica é baseado em uma série de números que seguem uma regra específica. A regra é que cada número é a soma dos dois números anteriores.

Exemplo

*   1, 3, 5, 7, ___
*   2, 4, 8, 16, 32, 64, ____
*   0, 1, 4, 9, 16, 25, 36, ____
*   4, 16, 36, 64, ____
*   1, 1, 2, 3, 5, 8, ____
*   2, 10, 12, 16, 17, 18, 19, ____

Resolução do problema lógico com interruptores e lâmpadas
------------------------------------------------------

O problema lógico com interruptores e lâmpadas é um clássico exemplo de resolução de problemas. A solução é baseada em uma série de passos que permitem identificar qual interruptor controla qual lâmpada.

Passos

1.  Ligue o primeiro interruptor e deixe-o ligado por alguns minutos.
2.  Desligue o primeiro interruptor e ligue o segundo interruptor.
3.  Vá até as salas das lâmpadas e observe as seguintes condições:
    *   A lâmpada acesa está conectada ao segundo interruptor.
    *   A lâmpada quente e apagada está conectada ao primeiro interruptor.
    *   A lâmpada fria e apagada está conectada ao terceiro interruptor.

# by Guilherme Faria