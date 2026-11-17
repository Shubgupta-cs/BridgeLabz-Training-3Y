
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isApiFailure = Math.random() < 0.3;

            if (isApiFailure) {
                reject("API Error: Unable to fetch bugs from the server.");
            } else {
                const bugList = ["UI glitch", "API timeout", "Login failure"];
                resolve(bugList);
            }
        }, 1000);
    });
}

console.log("Fetching active bugs...");

getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        console.table(bugs);
    })
    .catch((error) => {
        console.error(error);
    });