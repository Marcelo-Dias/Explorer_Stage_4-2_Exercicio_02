let listaEstudantes = [
    {
        nomeEstudante: 'Murilo',
        primeiraNota: 6,
        segundaNota: 9,
    },

    {
        nomeEstudante: 'Ana',
        primeiraNota: 5,
        segundaNota: 3,
    },

    {
        nomeEstudante: 'Sara',
        primeiraNota: 8,
        segundaNota: 8,
    }
]

function calculaMedia(primeiraNota, segundaNota) {
    let media = (primeiraNota + segundaNota) / 2
    return media
}

for (let estudante of listaEstudantes) {
    mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
    let aprovadoOuNao = mediaIndividual < 7 ? ` Não foi dessa vez, ${estudante.nomeEstudante}! Tente novamente!` : ` Parabéns, ${estudante.nomeEstudante} você foi aprovado(a) no concurso!`

    alert(`A média do(a) aluno(a) ${estudante.nomeEstudante} é: ${mediaIndividual}
${aprovadoOuNao}`)
}