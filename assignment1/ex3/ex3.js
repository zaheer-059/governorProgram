var name4 = "sir zeshan hanif";
console.log("this is lower case: ".concat(name4.toLowerCase()));
console.log("this is upper case: ".concat(name4.toUpperCase()));
var words1 = name4.split(" ");
for (var i = 0; i < words1.length; i++) {
    var word = words1[i];
    words1[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
}
var words2 = words1.join(" ");
console.log("this is title case: ".concat(words2));
