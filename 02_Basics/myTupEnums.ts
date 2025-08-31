// const user: (string | number)[] = ["hc", 1]

let tUser: [string, number, boolean]
// tuple is used to maintain the order of data
tUser = ["hc", 131, true]

let rgb: [number, number, number] = [125, 123, 112]

type user = [number, string]

const NewUser: user = [112, "a@a.com"]

NewUser[1] = "hc@22.com"
// NewUser.push(1) -> this is gonna throw an error, but don't show red line 