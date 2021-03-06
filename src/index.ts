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
// console.log(addNumbers("sanket", "mane"));

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
  g_name:string,
  g_age:number,
  g_std:string,
  g_XIIPerc:number
}

class Student implements StudentInterface {
  g_name:string
  g_age:number
  g_std: string
  g_XIIPerc: number

  constructor(studentName:string,studentAge:number,studentStd:string,studentXIIPerc:number) {
    this.g_name=studentName;
    this.g_age=studentAge;
    this.g_std=studentStd;
    this.g_XIIPerc=studentXIIPerc;
  }

  getStudentDetails(){
    return `Hi i am ${this.g_name}, am ${this.g_age} years old, i was just passed ${this.g_std} standard with ${this.g_XIIPerc}% marks `;
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


//1.3 extend class

class Employee extends Student {
  isGraduate: boolean
  constructor(g_name:string,g_age:number,g_std:string,g_XIIPerc:number,isGraduate: boolean){
    super(g_name,g_age,g_std,g_XIIPerc)
    this.isGraduate=isGraduate;
  }
}

let employee_1=new Employee('sanket',27,'TY BSC IT',62,true);
console.log(employee_1);
console.log(employee_1.getStudentDetails());


/* --------------------------------- Generic -------------------------------- */
function getArray<T>(items: T[]):T[] {
    return new Array().concat(items)
}

let numArray=getArray<number>([1,2,3,4]);
let strArray=getArray<string>(['sanket','sushil','aniket','aditya']);

console.log('numArray: ',numArray);
console.log('strArray: ',strArray);
//numArray.push('hi'); //(allow to add number in num array)