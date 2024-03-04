let guests2: string[] = [ 'Zakir', 'Baba', 'Umar', 'Waheed', 'Nana', 'Zainab' ]

console.log("I am sorry to inform that only two people are invited to the dinner");

console.log( `Dear ${guests2.pop()}, I am sorry to inform you that you are not invited to the dinner`);
console.log( `\nDear ${guests2.pop()}, I am sorry to inform you that you are not invited to the dinner`);
console.log( `\nDear ${guests2.pop()}, I am sorry to inform you that you are not invited to the dinner`);
console.log( `\nDear ${guests2.pop()}, I am sorry to inform you that you are not invited to the dinner`);

console.log( `\nDear ${guests2[0]}, I will see you at the dinner`);
console.log( `\nDear ${guests2[1]}, I will see you at the dinner`);

guests2.pop()
guests2.pop()

console.log(`\n ${guests2}`);

