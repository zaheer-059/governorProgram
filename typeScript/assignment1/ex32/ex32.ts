let oldUsers: string[] = ["zaheer","ayesha","hunain","maha","umar"];
let currentUsers: string[] = ["Maha","Umar","Shanzay","Huzaifa","Hafsa"];
for (let user of currentUsers){
    if (oldUsers.includes(user.toLowerCase())){
        console.log("\nYou need to enter a new username."); 
    }else{
        console.log(`\nthe username is available.`);        
    }
}
