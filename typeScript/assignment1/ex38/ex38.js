function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n".concat(city, " is in ").concat(country));
}
describeCity("Karachi");
describeCity("Lahore");
describeCity("Mumbai", "India");
