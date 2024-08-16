function MyObjectWorker() {
    let myObject = new Object({});

    myObject.firstName = "Andrii";
    myObject.lastName = "Biedniak";
    myObject.age = 30;
    myObject.gender = "male";

    console.log(myObject);
}

function MyObjectConstructor() {
   let User = function (name, id) {
       this.name = name;
       this.id = id;
       this.sayHello = function() {
           console.log("Hello, my name is", this.name);
       }
   }

   let John = new User("John", 100)

    John.sayHello();

   console.log(John.constructor)
   console.log(John.__proto__.constructor)

    User.prototype.sayHi = function () {
       console.log("Hi, my name is", this.name);
    }

    John.sayHi();
}

function MyObjectInheritance() {
    let User = function (name, id) {
        this.name = name;
        this.id = id;
    }

    User.prototype.sayHello = function() {
        console.log("Hello, my name is", this.name);
    }

    let Admin = function (code) {

        this.code = code;

        this.getAdminCode = function () {
            console.log("Admin code is:", this.code);
        }
    }

    Admin.prototype = new User();

    let Mike = new User("Mike", 100);

    let Steve = new Admin(4242342);

    Steve.name = "Steve";
    // Admin.code = code;
    //
    // Admin.prototype.getCode = function () {
    //     console.log("My admin code is", this.code);
    // }


    console.log("Mike is instance of User:", Mike instanceof User);
    console.log("Mike is instance of Admin:", Mike instanceof Admin);
    console.log("Steve is instance of User:", Steve instanceof User);
    console.log("Steve is instance of Admin:", Steve instanceof Admin);
    Mike.sayHello();
    Steve.sayHello();
    Steve.getAdminCode();
    // Sten.getCode();


}

function MySingleton(name, id) {
    let instance;

    if (!instance) {
          let singleObject = function(name, id) {
            this.name = name;
            this.id = name;
            this.sayHello = function () {
                console.log("Hello, my name is", this.name);
            }
        }

        instance = new singleObject(name, id);
    }

    return instance;
}

let myInstance = MySingleton("Andrew", 100);

myInstance.sayHello();
// MyObjectWorker();
// MyObjectConstructor();
// MyObjectInheritance();
MySingleton();