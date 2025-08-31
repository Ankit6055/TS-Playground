let greetings: string = "Hello Ankit";
let mynum = 6;

// greetings = 6 -> Not allowed, this is the safety which typescript gives
// mynum.toUpperCase() -> Not allowed, coz to ts, we avoided a error

console.log(greetings);

// number

// let userId: number = 334466.9898; type can be avoided, ts will automatically detect it's type is number
let userId = 334466;

userId.toFixed()

// boolean
let isLoggedIn: boolean = false;

// any 
// let hero; // let hero: any(equivalent)
let hero: string;

function getHero() {
    return "thor"
}

hero = getHero()

// any -> you can use whenever you don't want a particular value to cause typechecking errors


export {};
