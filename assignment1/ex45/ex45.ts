type Car = {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // setting up additional properties
};

function makeCar(manufacturer: string, modelName: string, ...options: any[]): Car {
    const car: Car = {
        manufacturer,
        modelName,
    };

    // Process additional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];

        car[key] = value;
    }

    return car;
}

let Car1=makeCar("Honda","Civic","year",2018,"color","gray")
console.log(Car1);
