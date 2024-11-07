function delayedConsoleLog(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

delayedConsoleLog("Hello, world!", 2000);