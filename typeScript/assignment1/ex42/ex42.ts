let magicianNames1: string[] = ["John","Micheal","Nick"]
function makeGreat(){
    for (let i=0; i<magicianNames1.length; i++){
         magicianNames1[i]= "the great"+" "+magicianNames1[i]
    }
}
makeGreat()
console.log(magicianNames1);
