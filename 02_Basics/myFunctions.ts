function addTwo(num: number) {
  return num + 2;
  //   return "hello" ❌
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; // Have a default parameter

let myValue: number = addTwo(5);

getUpper("4");
signUpUser("Ankit", "a@a.com", true);
loginUser("A", "a@a.com");

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK"; -> This will throw an error
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  // void means nothing
  console.log(errmsg);
//   return; -> We can write this also, it will be valid
}

function handleError(errmsg: string): never {
  // the func never returns a value
  throw new Error(errmsg);
}

export {};
