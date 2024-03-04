function largeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typeScript"; }
    console.log("\nThis shirt has size: \"".concat(size, "\" and prints a message \"").concat(message, "\""));
}
largeShirt();
largeShirt("small");
largeShirt("medium", "All is well");
