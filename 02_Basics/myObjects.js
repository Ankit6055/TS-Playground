var User = {
    name: "Ankit",
    email: "a@a.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "ankit", isPaid: false, email: "a@a.com" };
createUser(newUser); // this is a odd behaviour, but it will work smoothly
// createUser({name: "ankit", isPaid: false, email: "a@a.com"}) -> This will not work coz of email
// function createCourse(): {} {
//     return {}
// }
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var myUser = {
    _id: "1234",
    name: "a",
    email: "a@a",
    isActive: true
};
myUser.email = "b@b";
// myUser._id = "1243" -> Not allowed coz its readonly
