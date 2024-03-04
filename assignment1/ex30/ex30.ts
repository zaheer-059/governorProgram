let userName: string[] = ["Sir Qasim","Sir Zia","Sir Hanif","Ms.Hira","Admin"];
for (let user of userName){
    if (user==="Admin"){
        console.log("\nHello admin, would you like to see a status report?");        
    }else{
        console.log(`\nHello ${user}, thank you for logging in again.`);        
    }
}


