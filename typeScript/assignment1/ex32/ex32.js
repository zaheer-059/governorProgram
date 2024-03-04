var oldUsers = ["zaheer", "ayesha", "hunain", "maha", "umar"];
var currentUsers = ["Maha", "Umar", "Shanzay", "Huzaifa", "Hafsa"];
for (var _i = 0, currentUsers_1 = currentUsers; _i < currentUsers_1.length; _i++) {
    var user = currentUsers_1[_i];
    if (oldUsers.includes(user.toLowerCase())) {
        console.log("\nYou need to enter a new username.");
    }
    else {
        console.log("\nthe username is available.");
    }
}
