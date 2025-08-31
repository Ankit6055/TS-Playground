"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Ankit";
var mynum = 6;
// greetings = 6 -> Not allowed, this is the safety which typescript gives
// mynum.toUpperCase() -> Not allowed, coz to ts, we avoided a error
console.log(greetings);
// number
// let userId: number = 334466.9898; type can be avoided, ts will automatically detect it's type is number
var userId = 334466;
userId.toFixed();
// boolean
var isLoggedIn = false;
// any 
// let hero; // let hero: any(equivalent)
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
