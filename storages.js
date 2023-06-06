//store data
// [x] - shop
// [x] - cleaning
// [] - buy t-shirt



// localStorage
// sessionStorage
const todos= [
    {
        name:'shop',
        isComplited:true,
    },
    {
        name:'cleaning',
        isComplited:true,
    },
    {
        name:'buy t-shirt',
        isComplited:false,
    }
]

localStorage.setItem('todos', JSON.stringify(todos))
console.log(JSON.parse(localStorage.getItem('todos')))

sessionStorage.setItem('todos', JSON.stringify(todos))
console.log(JSON.parse(sessionStorage.getItem('todos')))

// Cookies
const getCookie = (cname) => {
    const name = cname + '+';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ''
}
// document.cookie = `todos=${JSON.stringify(todos)}`
console.log(getCookie('todos'))