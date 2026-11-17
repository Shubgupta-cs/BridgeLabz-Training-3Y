
function runCallbackPipeline(onComplete) {
    console.log("--- Starting Callback Hell Pipeline ---");
    setTimeout(() => {
        console.log("1. Design complete");
        setTimeout(() => {
            console.log("2. Build complete");
            setTimeout(() => {
                console.log("3. Test complete");
                setTimeout(() => {
                    console.log("4. Deploy complete");
                    setTimeout(() => {
                        console.log("5. Celebrate!");
                        if (onComplete) onComplete();
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function executeStage(stageMessage) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageMessage);
            resolve();
        }, 1000);
    });
}

async function runAsyncAwaitPipeline() {
    console.log("\n--- Starting Async/Await Pipeline ---");
    await executeStage("1. Design complete");
    await executeStage("2. Build complete");
    await executeStage("3. Test complete");
    await executeStage("4. Deploy complete");
    await executeStage("5. Celebrate!");
}

runCallbackPipeline(() => {
    runAsyncAwaitPipeline();
});
