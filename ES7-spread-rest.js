//spread/rest

const language = {
    name: 'UA',
    level: 'easy'
}

const languagePopulation = {
    population: 1000000
}
console.log({...language, ...languagePopulation})

const namesFirst = ['Marko', 'Ilona']
const namesSecond = ['Illya', 'Vlad']
console.log([...namesFirst, ...namesSecond])

const {name, ...rest} = {
    name: 'UA',
    level: 'easy'
}
console.log(rest)

const [firstName, secondName, thirdName] = ['Marko', 'Ilona', 'Polina']
console.log(secondName)