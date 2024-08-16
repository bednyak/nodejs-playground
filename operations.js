
function MyForLoop() {
    let myArray = ["Andrew", "John", "Linda", "Sten", "Barbara"]

    for (let i = 0 ; i < myArray.length; i ++) {
        console.log(myArray[i]);
    }
}

function MyForInLoop() {
    let myArray = ["Car", "Ball", "Zebra", "Troll", "Ship"]
    let myObject = {
        firstName: "Andrii",
        lastName: "Biedniak",
        age: 30,
        gender: "male"
    }

    for (let e in myArray) {
        console.log("Array element:", e);
    }

    for (let o1 in myObject) {
        console.log("Object element:", o1);
    }

    for (let o2 in myObject) {
        console.log(o2, ":", myObject[o2]);
    }
}

function MyForOfLoop() {
    let myArray = ["Tom", "Frank", "Steve", "Mike", "Ostin"];

    for (let e of myArray) {
        console.log(e)
    }
}

function MyMap() {

    console.log("====================");

    let myMap = new Map([
        ["Apples", 500],
        ["Bananas", 1000],
        ["Cherries", 2000]
    ])

    myMap.forEach((el, key) => {
        console.log(key, ":", el);
    })

    console.log("====================");

    myMap.set("Tomatoes", 3000);

    myMap.forEach((el, key) => {
        console.log(key, ":", el);
    })

    console.log("====================");

    myMap.delete("Apples");

    myMap.forEach((el, key) => {
        console.log(key, ":", el);
    })

    console.log("====================");
}

function MySet() {

    console.log("====================");

    let mySet = new Set(["John", "Sem", "Stive"])

    for (let el of mySet) {
        console.log(el);
    }

    console.log("====================");

    mySet.add("Tonny")

    for (let el of mySet) {
        console.log(el)
    }

    console.log("====================");

    let myIterator = mySet.values();

    for (let el of myIterator) {
        console.log(el);
    }

    console.log("====================");
}


// MyForLoop();
// MyForInLoop();
// MyForOfLoop();
// MyMap();
MySet();