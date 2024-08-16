function createPair<T, M>(v1: T, v2: M): [T, M] {
    return [v1, v2];
}

console.log(createPair("Andrew", 31));
console.log(createPair(122234, 555554));