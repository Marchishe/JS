//Condition & ternary operator
function getStatus(age) {
if (age<14){
return 'children'
}else if (age<20){
    return 'teenager'
}else if (age<50){
    return 'adult'
}else{
    return 'old'
}
 }
 console.log(getStatus(23))

const getTernaryStatus = (age) => age<14 ? 'children' : age<20 ? 'teenager' : age<50 ? 'adult': 'old'
console.log(getTernaryStatus(52))

function getSwitchStatus(model)  {
    switch(model) {
    case 'Mercedes':
        case 'Alfa Romeo':
        return "$225000"
    case 'bmw':
        return '$220000'
    case 'lanos':
        return '30000'
    default:
        return null
    }
}
console.log(getSwitchStatus('Alfa Romeo'))
