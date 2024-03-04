var userName1 = [""];
for (var _i = 0, userName1_1 = userName1; _i < userName1_1.length; _i++) {
    var user = userName1_1[_i];
    if (user === "") {
        console.log("We need to find some users!");
    }
    else if (user === "Admin") {
        console.log("\nHello admin, would you like to see a status report?");
    }
    else {
        console.log("\nHello ".concat(user, ", thank you for logging in again."));
    }
}
