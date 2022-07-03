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

//professorsData.name = "Akshay Kachare";

console.log(professorsData);


//1.2 interface 
// property? means optional interface value
interface patientInterface {
  name: string,
  age: number,
  illness: string
  dateCheckIn?: string
}

const patient: patientInterface={
  name: 'sanket',
  age: 27,
  illness: 'Dengue'
}

console.log(patient);



/* --------------------------------- classes -------------------------------- */

//1.1 ts normal class

class Person {
  name: string
  age: number

  constructor(actualName:string,actualAge:number) {
    this.name=actualName;
    this.age=actualAge;
  }
  
}

let person1=new Person('sanket',27);
console.log(person1.name);
console.log(person1);
let person2=new Person('aditya',24);
console.log(person2);


//1.2 classes with interface

interface StudentInterface {
  name:string,
  age:number,
  std:string,
  XIIPerc:number
}

class Student implements StudentInterface {
  name:string
  age:number
  std: string
  XIIPerc: number

  constructor(studentName:string,studentAge:number,studentStd:string,studentXIIPerc:number) {
    this.name=studentName;
    this.age=studentAge;
    this.std=studentStd;
    this.XIIPerc=studentXIIPerc;
  }

  getStudentDetails(){
    return `Hi i am ${this.name}, am ${this.age} years old, i was just passed ${this.std} standard with ${this.XIIPerc}% marks `;
  }
}

//instance one
let student1=new Student('sanket',18,'12th',62);
console.log(student1);
console.log(student1.getStudentDetails());
//instance two
let student2=new Student('aditya',16,'10th',91);
console.log(student2);
console.log(student2.getStudentDetails());
