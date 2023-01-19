let students = [
    {
        name: 'David',
        assessmentOne: 10,
        assessmentTwo: 10
    },
    
    {
        name: 'Cláudio',
        assessmentOne: 5,
        assessmentTwo: 6
    },

    {
        name: 'Teixeira',
        assessmentOne: 8,
        assessmentTwo: 7
    },

    {
        name: 'Félix',
        assessmentOne: 7,
        assessmentTwo: 9
    }
]

for (let i = 0; i<students.length; i++ ){
    
    media(students[i])
}

function media(student){
    let media
    media = (student.assessmentOne+student.assessmentTwo)/2
    if (media >= 7 )
        alert(`A média do aluno ${student.name} é: ${media}\nParabéns, ${student.name}! Você foi aprovado!`)
    else
    alert(`A média do aluno ${student.name} é ${media}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
}