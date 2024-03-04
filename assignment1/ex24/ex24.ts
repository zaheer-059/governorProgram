let participant = "Male";
if (participant === "Male") {
console.log(`Is the participant male? True`);
}else{
console.log(`Is the participant male? False`);
}

let participant1 = "Female";
if (participant === "Male") {
console.log(`Is the participant male? True`);
}else{
console.log(`Is the participant male? False`);
}

let participant2 = "FEMALE";
if (participant2.toLocaleLowerCase() === "female") {
console.log(`\nIs the participant female? True`);
}else{
console.log(`\nIs the participant female? False`);
}

let participant3 = "Male";
if (participant3.toLocaleLowerCase() === "female") {
console.log(`\nIs the participant female? True`);
}else{
console.log(`\nIs the participant female? False`);
}

let a = 3;
if (a === 3) {
console.log(`\nIs a = 3? True`);
}else{
console.log(`\nIs a = 3? False`);
}

let a1 = 10;
if (a1 === 3) {
console.log(`\nIs a1 = 3 ? True`);
}else{
console.log(`\nIs a1 = 3 ? False`);
}

let b = 4;
if (b !== 3) {
console.log(`\nIs b not equal to 3 ? True`);
}else{
console.log(`\nIs b not equal to 3 ? False`);
}

let b2 = 3;
if (b2 != 3) {
console.log(`\nIs b2 not equal to 3? True`);
}else{
console.log(`\nIs b2 not equal to 3? False`);
}

let c1 = 4;
if (c1 > 0) {
console.log(`\nIs c1 greater than 0? True`);
}else{
console.log(`\nIs c1 greater than 0? False`);
}

let c2 = -4;
if (c2 > 0) {
console.log(`\nIs c2 greater than 0? True`);
}else{
console.log(`\nIs c2 greater than 0? False`);
}

let d1 = -4;
if (d1 < 0) {
console.log(`\nIs d1 less than 0? True`);
}else{
console.log(`\nIs d1 less than 0? False`);
}

let d2 = 4;
if (d2 < 0) {
console.log(`\nIs d2 less than 0? True`);
}else{
console.log(`\nIs d2 less than 0? False`);
}

let e1 = 4;
if (e1 > 0 || e1 === 0 ) {
console.log(`\nIs e1 greater than or equal to 0? True`);
}else{
console.log(`\nIs e1 greater than or equal to 0? False`);
}

let e2 = -3;
if (e2 > 0 || e2 === 0 ) {
console.log(`\nIs e2 greater than or equal to 0? True`);
}else{
console.log(`\nIs e2 greater than or equal to 0? False`);
}

let e3 = -3;
if (e3 < 0 || e3 === 0 ) {
console.log(`\nIs e3 less than or equal to 0? True`);
}else{
console.log(`\nIs e3 less than or equal to 0? False`);
}

let e4 = 2;
if (e4 < 0 || e4 === 0 ) {
console.log(`\nIs e4 less than or equal to 0? True`);
}else{
console.log(`\nIs e4 less than or equal to 0? False`);
}

let f = 100;
if (f > 0 && f%2 === 0 ) {
console.log(`\nIs f positive and even? True`);
}else{
console.log(`\nIs f positive and even? False`);
}

let f1 = 33;
if (f1 > 0 && f1%2 === 0 ) {
console.log(`\nIs f1 positive and even? True`);
}else{
console.log(`\nIs f1 positive and even? False`);
}

const myFruits: string[] = ["mango", "grapes", "pineapple", "bananna"];
const zz="mango"
if (myFruits.indexOf(zz) !==-1) {
    console.log(`\nIs mango in the list of myFruits? True`);
} else {
    console.log(`\nIs mango in the list of myFruits? False`);
}

const myFruits1: string[] = ["grapes", "pineapple", "bananna"];
const zz1="mango"
if (myFruits1.indexOf(zz1) !==-1) {
    console.log(`\nIs mango in the list of myFruits1? True`);
} else {
    console.log(`\nIs mango in the list of myFruits1? False`);
}

const myFruits2: string[] = ["mango", "grapes", "pineapple", "bananna"];
const zz2="cherry"
if (myFruits1.indexOf(zz2) ===-1) {
    console.log(`\nIs cherry not in the list of myFruits2? True`);
} else {
    console.log(`\nIs cherry not in the list of myFruits2? False`);
}

const myFruits3: string[] = ["mango", "grapes", "pineapple", "bananna","cherry"];
const zz3="cherry"
if (myFruits3.indexOf(zz3) ===-1) {
    console.log(`\nIs cherry not in the list of myFruits3? True`);
} else {
    console.log(`\nIs cherry not in the list of myFruits3? False`);
}
