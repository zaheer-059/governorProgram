let numberList = [1,2,3,4,5,6,7,8,9]
for (let num of numberList){
if (num===1){
    console.log(`\n${num}st`);
}

else if (num===2){
    console.log(`\n${num}nd`);
}
else if (num===3){
    console.log(`\n${num}rd`);
}
else{
    console.log(`\n${num}th`);
}
}
