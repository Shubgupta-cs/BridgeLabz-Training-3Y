
const getRandomDelay = () => Math.floor(Math.random() * 1000) + 1000;

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a 20% random chance of failure
            if (Math.random() < 0.2) {
                reject("Error: Kettle malfunctioned while boiling water!");
            } else {
                console.log("Step 1: Water is boiled.");
                resolve();
            }
        }, getRandomDelay());
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Error: Coffee grounds spilled during brewing!");
            } else {
                console.log("Step 2: Coffee is brewed.");
                resolve();
            }
        }, getRandomDelay());
    });
}

function pourIntoCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Error: Cup cracked while pouring!");
            } else {
                console.log("Step 3: Coffee poured into the cup.");
                resolve();
            }
        }, getRandomDelay());
    });
}
console.log("Starting the morning coffee maker...");

boilWater()
    .then(() => brewCoffee())
    .then(() => pourIntoCup())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error(error);
    });