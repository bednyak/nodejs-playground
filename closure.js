function MyClosure() {
    let incrementCounter = (function () {
        let i = 0;
        return function () {
            i = i + 1;
            return i;
        }
    })();

    console.log(incrementCounter());
    console.log(incrementCounter());
    console.log(incrementCounter());
}

MyClosure();