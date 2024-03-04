let orignalMagicianNames: string[] = ["John","Micheal","Nick"]
let modifiedMagicianNames: string[] = [];
function makeGreat(){
    for (let i=0; i<orignalMagicianNames.length; i++){
        modifiedMagicianNames.push(`the great ${orignalMagicianNames[i]}`);
    }
}
makeGreat();
console.log(modifiedMagicianNames);
console.log(orignalMagicianNames);