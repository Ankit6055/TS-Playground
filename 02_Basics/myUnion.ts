let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 334 };

hitesh = { username: "ak", id: 334 };

// function getDbId(id: number | string) {
//     console.log(`DB ID is: ${id}`);
// }

getDbId(33);
getDbId("33")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
    else {
        id + 2
    }
}

// array

const data: number[] =[1, 2, 3]
const data2: string[] =["1", "2", "3"]
// const data3: string[] | number[] = ["1", "2", "3"] -> we can use only one type at a time
const data3: (string | number| boolean)[] = ["1", 2, true]

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" -> Not allowed