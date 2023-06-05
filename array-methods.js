//Array methods:
const studentName = ['Maxim', 'Vlad', 'Elena']
const students = [
    {
        name:'Max',
        age: 24,
        ability:'none'
    },
    {
        name:'Vlad',
        age: 35,
        ability:'none'
    },
    {
        name:'Egor',
        age: 28,
        ability:'Crid'
    }
]
//map
console.log(studentName.map((name, index) => `${index + 1}.${name}`).join('\n'));
//filter
console.log(students.filter((student) => student.age > 25).map((student)=>student.name));
//push, unshift
students.push({name:'Janna', age: 36, ability: 'witch'})
students.unshift({name:'Nikolay', age: 16, ability: 'gay'})
console.log(students)
//slice
console.log(students.slice(0, 2))
//find
console.log(students.find((student)=> student.name === 'Max'))
