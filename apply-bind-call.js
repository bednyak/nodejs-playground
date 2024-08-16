function MyBind() {
    let objMain = {
        a: 100,
        b: 200,
        func: function (c,d) {
            console.log(this.a + this.b + c + d);
        }

    }

    objMain.func(300, 400);

    let obj1 = {
        a: 200,
        b: 300
    }

    let obj1New = objMain.func.bind(obj1)

    obj1New(300, 400);
}

function MyThisSave() {
    let someObject = new Object({
       a: 100,
       b: 200,
       multi: function () {
           let result = this.a + this.b ;
           console.log(result)
           return result;
       }
    });

    // someObject.multi(400,1000);

    let display = someObject.multi.bind(someObject)

    setTimeout(display, 2000);
}

function MyCall() {

    let someObject = new Object({
        a: 100,
        b: 200,
        multi: function () {
            console.log(this.a, this.b);
        }
    })

    someObject.multi();

    let testObject = new Object({
        a: 200,
        b: 400
    })

    someObject.multi.call(testObject);
}

function MyApply() {

    let someObject = new Object({
        multi: function (c, d) {
            console.log(this.a + this.b + c + d);
        }
    })

    let testObject = new Object({
        a: 100,
        b: 200
    })

    someObject.multi.apply(testObject, [500, 600]);
}

// MyBind();
// MyThisSave();
// MyCall();
MyApply();