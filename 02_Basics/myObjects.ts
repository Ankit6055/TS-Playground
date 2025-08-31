const User = {
    name: "Ankit",
    email: "a@a.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "ankit", isPaid: false, email: "a@a.com"}

createUser(newUser) // this is a odd behaviour
// createUser({name: "ankit", isPaid: false, email: "a@a.com"}) -> This will not work coz of email

// function createCourse(): {} {
//     return {}
// }

function createCourse(): {name: string, price: number} {
    return {name: "reactjs", price: 399}
}