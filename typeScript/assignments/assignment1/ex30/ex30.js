var userName = ["Sir Qasim", "Sir Zia", "Sir Hanif", "Ms.Hira", "Admin"];
for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
    var user = userName_1[_i];
    if (user === "Admin") {
        console.log("\nHello admin, would you like to see a status report?");
    }
    else {
        console.log("\nHello ".concat(user, ", thank you for logging in again."));
    }
}
