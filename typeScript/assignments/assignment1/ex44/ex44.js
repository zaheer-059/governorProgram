function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    ;
    console.log("\nA sandwich is ordered with the follwoing items:");
    for (var i = 0; i < items.length; i++) {
        console.log("".concat(i + 1, ". ").concat(items[i]));
    }
}
sandwich("Onion");
sandwich("Onion", "chilly souce");
sandwich("Onion", "chilly souce", "Ketchup");
