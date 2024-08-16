const fs = require("fs");

function one() {
    setTimeout(() => {
        console.log("1");
    })
    setImmediate(() => console.log('2'));
}

function two() {
    fs.readFile('./test.txt', () => {
        setTimeout(() => {
            console.log("1");
        }, 0)
        setImmediate(() => {
            console.log("2");
        })
    })
}

function three() {
    setTimeout(() => {
        console.log("1");
    }, 50);
    process.nextTick(() => {
        console.log("4");
    });
    setImmediate(() => {
        console.log("2");
    });
    process.nextTick(() => {
        console.log("3");
    })
}

function four() {
    setTimeout(() => {
        console.log("1");
    }, 50);
    process.nextTick(() => {
        console.log("4");
    })
    setImmediate(() => {
        console.log("2")
    })
    process.nextTick(() => {
        setTimeout(() => {
            console.log("3")
        }, 1000)
    })
}

// one();
// two();
// three()
four()


