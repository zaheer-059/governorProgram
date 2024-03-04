let userName1: string[] = [""];
for (let user of userName1){
    if (user===""){
        console.log("We need to find some users!");
    }
    else if (user==="Admin"){
        console.log("\nHello admin, would you like to see a status report?");        
    }else{
        console.log(`\nHello ${user}, thank you for logging in again.`);        
    }
}

