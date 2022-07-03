/* --------------------------------- number --------------------------------- */
let a: number = 5;
console.log("a: " + a);

/* --------------------------------- string --------------------------------- */
let userName: string = "sanket";
console.log("userName: " + userName);

/* --------------------------------- boolean -------------------------------- */
let isMale: boolean = true;
console.log("isMale: " + isMale);

/* ----------------------------------- any ---------------------------------- */
let interest: any = "software development";
console.log("Interest: " + interest);

/* ---------------------------------- array --------------------------------- */
let rainbowColors: string[] = [
  "violet",
  "indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
];
console.log(
  "rainbowColors: " +
    rainbowColors +
    "\ntypeof(rainbowColors): " +
    typeof rainbowColors
);

let anyArray: any[] = [
  28,
  "software developer",
  24,
  "full stack developer",
  32,
  "Data scientist",
];

console.log("anyArray: " + anyArray);

/* ---------------------------------- Tuple --------------------------------- */

let employee: [string, string, number] = ["sanket", "software developer", 28];

console.log("Employee: " + employee);

/* ------------------------------- Tuple array ------------------------------ */

let familyMembers: [string, number][];

familyMembers = [
  ["father", 53],
  ["mother", 47],
  ["eldersister", 23],
  ["yougersister", 16],
];

console.log(familyMembers);

/* --------------------------------- Unions --------------------------------- */
let id: number | string;
id = "emp007";

/* ---------------------------------- Enum ---------------------------------- */
//set of name constants (eg. either numeric or strings )

//enum with default values
enum direction1 {
  up,
  down,
  let,
  right,
}
console.log("direction1.up: " + direction1.up);
console.log("direction1.down: " + direction1.down);

//enum with string value

enum countries {
  germuny = "Euro",
  india = "Rupees",
  uk = "Dollar",
  england = "Pound",
}

console.log("countries.england: " + countries.england);

/* --------------------------------- objects -------------------------------- */
type Users = {
  id: string;
  name: string;
  age: number;
};
const users: Users = {
  id: "emp04",
  name: "abc",
  age: 25,
};

console.log("Users: " + users);

/* ----------------------------- type assertion ----------------------------- */
//treat entity as different type

let cid: any = 1;
let customerId = <number>cid;
// let customerId = cid as number;
//customerId = true; //you will get error if you are assigning any value which is not number

/* -------------------------------- Functions ------------------------------- */
//sum of two numbers

function addNumbers(x: number, y: number) {
  return x + y;
}

console.log(addNumbers(2, 4));
//console.log(addNumbers("sanket", "mane"));

/* ---------------------------------- void ---------------------------------- */

function log(message: string | number): void {
  console.log(message);
}

log("hi from typescript");

/* -------------------------------- Intefaces ------------------------------- */
//similar like type data type
//you can make objects readonly (optional its up to you - just readonly keywoard in front of property to avoid mutate the value in future);

interface profressorInterface {
  name: string;
  age: number;
  qualification: string;
}

const professorsData: profressorInterface = {
  name: "Sandhya Awate",
  age: 47,
  qualification: "BE Computer Science",
};

professorsData.name = "Akshay Kachare";

console.log(professorsData);
