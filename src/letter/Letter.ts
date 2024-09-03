function verificarLetraA(texto: string): void {
    const regex = /a/gi
    const resultados = texto.match(regex)

    if (resultados) {
        console.log(`A letra 'a' foi encontrada ${resultados.length} vezes.`)
    } else {
        console.log('A letra "a" não foi encontrada.')
    }
}

verificarLetraA('Eu amo aprender TypeScript')
verificarLetraA('Eu odeio aprender TypeScript')
verificarLetraA('Eu não aprendo TypeScript')