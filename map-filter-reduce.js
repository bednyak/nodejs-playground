function MyMapper() {
    const myArr = [1, 2, 3, 4, 5];

    const mappedArr = myArr.map(el => {
        return el + 5;
    })

    console.log(mappedArr);
}

function MyFilter() {
    const myArr = [23, 445, 54, 334, 1003];

    const myFilteredArr = myArr.filter(el => {
        if (el > 100 && el < 1000) {
            return el;
        }
    })

    console.log(myFilteredArr);
}

function MyReducer() {
    const myArr = [1,2,3,4,5];

    const myReducedArr = myArr.reduce((result, item) => {
        return result + item;
    }, 0)

    console.log(myReducedArr);
}

// MyMapper();
// MyFilter();
MyReducer();