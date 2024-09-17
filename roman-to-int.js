/**
 * @param {string} s
 * @return {number}
 */
var romanToIntMoreStraightForward = function(s) {
    let number = 0;
    const romanToIntMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let arrOfSymbols = s.split('')

    for (let i = 0; i < arrOfSymbols.length; i++) {
        if (arrOfSymbols[i] === "I" && (arrOfSymbols[i + 1] === "X" || arrOfSymbols[i + 1] === "V")) {
            number = number + (romanToIntMap[arrOfSymbols[i+1]] - romanToIntMap[arrOfSymbols[i]]);
            i++;
        }
        else if (arrOfSymbols[i] === "X" && (arrOfSymbols[i + 1] === "L" || arrOfSymbols[i + 1] === "C")) {
            number = number + (romanToIntMap[arrOfSymbols[i+1]] - romanToIntMap[arrOfSymbols[i]]);
            i++;
        }
        else if (arrOfSymbols[i] === "C" && (arrOfSymbols[i + 1] === "D" || arrOfSymbols[i + 1] === "M")) {
            number = number + (romanToIntMap[arrOfSymbols[i+1]] - romanToIntMap[arrOfSymbols[i]]);
            i++;
        }
        else {
            number = number + romanToIntMap[arrOfSymbols[i]];
        }

    }

    return number;
};

var romanToIntMoreOptimized = function(s) {
    let number = 0;
    const romanToIntMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < s.length; i++) {
        const current = romanToIntMap[s[i]];
        const next = romanToIntMap[s[i + 1]];

        if (next && current < next) {
            number += next - current;
            i++;
        } else {
            number += current;
        }
    }

    return number;
};

console.log(romanToIntMoreOptimized('III'));
console.log(romanToIntMoreOptimized('LVIII'));
console.log(romanToIntMoreOptimized('MCMXCIV'));