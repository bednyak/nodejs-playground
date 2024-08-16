function JustGenerator() {
    function* logGenerator() {
        yield "log1";
        yield "log2";
        yield "log3";
    }

    let logger = logGenerator();

    console.log(logger.next().value);
    console.log(logger.next().value);
    console.log(logger.next().value);
}

function JustGeneratorWithParams() {
    function* numberGenerator(number) {
        yield number;
        yield number+1;
        yield number+2;
    }

    let numGen = numberGenerator(200)
    console.log(numGen.next().value);
    console.log(numGen.next().value);
    console.log(numGen.next().value);
}

function JustGeneratorWithDynamicValues() {
    function* logGenerator() {
        console.log(yield);
        console.log(yield);
        console.log(yield);
    }

    let logger = logGenerator()

    logger.next();
    logger.next("INFO: All good");
    logger.next("INFO: All very good");
    logger.next("INFO: All very very good");
}

function JustGeneratorWithNestedGenerator() {
    function* mainGenerator() {
        yield 1;
        yield 2;
        yield* secondaryGenerator()
        yield 100;
    }

    function* secondaryGenerator() {
        yield 5;
        yield 6;
        yield 7;
    }

    let myGenerator = mainGenerator();

    console.log(myGenerator.next().value);
    console.log(myGenerator.next().value);
    console.log(myGenerator.next().value);
    console.log(myGenerator.next().value);
    console.log(myGenerator.next().value);
    console.log(myGenerator.next().value);
}

// JustGenerator();
// JustGeneratorWithParams();
// JustGeneratorWithDynamicValues();
JustGeneratorWithNestedGenerator();