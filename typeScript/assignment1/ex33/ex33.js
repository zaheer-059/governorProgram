var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numberList_1 = numberList; _i < numberList_1.length; _i++) {
    var num = numberList_1[_i];
    if (num === 1) {
        console.log("\n".concat(num, "st"));
    }
    else if (num === 2) {
        console.log("\n".concat(num, "nd"));
    }
    else if (num === 3) {
        console.log("\n".concat(num, "rd"));
    }
    else {
        console.log("\n".concat(num, "th"));
    }
}
