var orignalMagicianNames = ["John", "Micheal", "Nick"];
var modifiedMagicianNames = [];
function makeGreat() {
    for (var i = 0; i < orignalMagicianNames.length; i++) {
        modifiedMagicianNames.push("the great ".concat(orignalMagicianNames[i]));
    }
}
makeGreat();
console.log(modifiedMagicianNames);
console.log(orignalMagicianNames);
