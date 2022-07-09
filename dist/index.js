"use strict";
/* --------------------------------- number --------------------------------- */
let a = 5;
console.log("a: " + a);
/* --------------------------------- string --------------------------------- */
let userName = "sanket";
console.log("userName: " + userName);
/* --------------------------------- boolean -------------------------------- */
let isMale = true;
console.log("isMale: " + isMale);
/* ----------------------------------- any ---------------------------------- */
let interest = "software development";
console.log("Interest: " + interest);
/* ---------------------------------- array --------------------------------- */
let rainbowColors = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
];
console.log("rainbowColors: " +
    rainbowColors +
    "\ntypeof(rainbowColors): " +
    typeof rainbowColors);
let anyArray = [
    28,
    "software developer",
    24,
    "full stack developer",
    32,
    "Data scientist",
];
console.log("anyArray: " + anyArray);
/* ---------------------------------- Tuple --------------------------------- */
let employee = ["sanket", "software developer", 28];
console.log("Employee: " + employee);
/* ------------------------------- Tuple array ------------------------------ */
let familyMembers;
familyMembers = [
    ["father", 53],
    ["mother", 47],
    ["eldersister", 23],
    ["yougersister", 16],
];
console.log(familyMembers);
/* --------------------------------- Unions --------------------------------- */
let id;
id = "emp007";
/* ---------------------------------- Enum ---------------------------------- */
//set of name constants (eg. either numeric or strings )
//enum with default values
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["let"] = 2] = "let";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
console.log("direction1.up: " + direction1.up);
console.log("direction1.down: " + direction1.down);
//enum with string value
var countries;
(function (countries) {
    countries["germuny"] = "Euro";
    countries["india"] = "Rupees";
    countries["uk"] = "Dollar";
    countries["england"] = "Pound";
})(countries || (countries = {}));
console.log("countries.england: " + countries.england);
const users = {
    id: "emp04",
    name: "abc",
    age: 25,
};
console.log("Users: " + users);
/* ----------------------------- type assertion ----------------------------- */
//treat entity as different type
let cid = 1;
let customerId = cid;
// let customerId = cid as number;
//customerId = true; //you will get error if you are assigning any value which is not number
/* -------------------------------- Functions ------------------------------- */
//sum of two numbers
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(2, 4));
// console.log(addNumbers("sanket", "mane"));
/* ---------------------------------- void ---------------------------------- */
function log(message) {
    console.log(message);
}
log("hi from typescript");
const professorsData = {
    name: "Sandhya Awate",
    age: 47,
    qualification: "BE Computer Science",
};
//professorsData.name = "Akshay Kachare";
console.log(professorsData);
const patient = {
    name: 'sanket',
    age: 27,
    illness: 'Dengue'
};
console.log(patient);
/* --------------------------------- classes -------------------------------- */
//1.1 ts normal class
class Person {
    constructor(actualName, actualAge) {
        this.name = actualName;
        this.age = actualAge;
    }
}
let person1 = new Person('sanket', 27);
console.log(person1.name);
console.log(person1);
let person2 = new Person('aditya', 24);
console.log(person2);
class Student {
    constructor(studentName, studentAge, studentStd, studentXIIPerc) {
        this.g_name = studentName;
        this.g_age = studentAge;
        this.g_std = studentStd;
        this.g_XIIPerc = studentXIIPerc;
    }
    getStudentDetails() {
        return `Hi i am ${this.g_name}, am ${this.g_age} years old, i was just passed ${this.g_std} standard with ${this.g_XIIPerc}% marks `;
    }
}
//instance one
let student1 = new Student('sanket', 18, '12th', 62);
console.log(student1);
console.log(student1.getStudentDetails());
//instance two
let student2 = new Student('aditya', 16, '10th', 91);
console.log(student2);
console.log(student2.getStudentDetails());
//1.3 extend class
class Employee extends Student {
    constructor(g_name, g_age, g_std, g_XIIPerc, isGraduate) {
        super(g_name, g_age, g_std, g_XIIPerc);
        this.isGraduate = isGraduate;
    }
}
let employee_1 = new Employee('sanket', 27, 'TY BSC IT', 62, true);
console.log(employee_1);
console.log(employee_1.getStudentDetails());
/* --------------------------------- Generic -------------------------------- */
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['sanket', 'sushil', 'aniket', 'aditya']);
console.log('numArray: ', numArray);
console.log('strArray: ', strArray);
//numArray.push('hi'); //(allow to add number in num array)
