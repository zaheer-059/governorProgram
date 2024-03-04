function sandwich(...items:string[]){
    ;console.log(`\nA sandwich is ordered with the follwoing items:`);
    for (let i=0; i<items.length; i++){
        console.log(`${i+1}. ${items[i]}`);
    }
}

sandwich("Onion")
sandwich("Onion","chilly souce")
sandwich("Onion","chilly souce","Ketchup")