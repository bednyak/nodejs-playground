const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, async () => {
    let a = 0;
    let myPromise = new Promise((resolve, reject) => {

        if (a > 2) {
            reject("ERROR! Bigger then 2")
        }

        resolve("All good");
    })

    myPromise
        .then((v) => {
            console.log("Result:", v)
        })
        .catch((err) => {
            throw Error(err)
        })

    console.log(`Example app listening on port ${port}`)

    async function myAsyncPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('My async function');
            })
        });
    }

    console.log(await myAsyncPromise());
})