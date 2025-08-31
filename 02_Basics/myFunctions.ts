function addTwo(num: number) {
//   return num + 2;
  return "hello"
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

export {};
