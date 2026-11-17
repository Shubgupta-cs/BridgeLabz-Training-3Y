
function deployServerA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A deployment failed (Connection Reset)!");
            } else {
                resolve("Server A (2s)");
            }
        }, 2000);
    });
}

function deployServerB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B deployment failed (Out of Memory)!");
            } else {
                resolve("Server B (3s)");
            }
        }, 3000);
    });
}

const serverAPromise = deployServerA();
const serverBPromise = deployServerB();

Promise.race([serverAPromise, serverBPromise])
    .then((fastestServer) => {
        console.log(`Fastest response: ${fastestServer}`);
    })
    .catch((error) => {
        console.error(`Race Error: ${error}`);
    });

Promise.all([serverAPromise, serverBPromise])
    .then((results) => {
        console.log("Deployment completed for all servers:", results);
    })
    .catch((error) => {
        console.error(`All Deployment Error: ${error}`);
    });