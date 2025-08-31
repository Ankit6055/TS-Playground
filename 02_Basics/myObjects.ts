const User = {
    name: "Ankit",
    email: "a@a.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "ankit", isPaid: false, email: "a@a.com"}

createUser(newUser) // this is a odd behaviour, but it will work smoothly
// createUser({name: "ankit", isPaid: false, email: "a@a.com"}) -> This will not work coz of email

// function createCourse(): {} {
//     return {}
// }

function createCourse(): {name: string, price: number} {
    return {name: "reactjs", price: 399}
}

// Type Aliases

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function create_User(user: User): User {
//     return {name: "ankit", email: "a@a.com", isActive: true}
// }

// create_User({name: "ankit", email: "a@a.com", isActive: true})

type User = {
    readonly _id: string // we won't be able to change it
    name: string,
    email: string,
    isActive: boolean
    credirCardDetails?: number  // ? -> It's means the card is optional
}

let myUser: User = {
    _id: "1234",
    name: "a",
    email: "a@a",
    isActive: true
}

myUser.email = "b@b"
// myUser._id = "1243" -> Not allowed coz its readonly


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate
// type cardDetails = cardNumber & cardDate & {
//     cvv: number
// }









export {}