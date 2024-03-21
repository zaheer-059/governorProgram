let name4 : string = "sir zeshan hanif";

console.log(`this is lower case: ${name4.toLowerCase()}`);
console.log(`this is upper case: ${name4.toUpperCase()}`);

let words1 : string[] = name4.split(" ");
for ( let i =0; i<words1.length; i++){
    let word = words1[i];
    words1[i]=word[0].toUpperCase()+word.slice(1).toLowerCase();
}

let words2 : string = words1.join(" ");
console.log(`this is title case: ${words2}`);
