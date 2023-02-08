// Official definition of recursion
// In computer science, recursion is a method of solving a problem
// where the solution depends on solutions to smaller instances of
// the same problem.

// Unoficial definition of recursion
// Any situation where you do something, and depending on the
// results, you might do it again.

// In programming, recursion occurs when a function calles itself.
// Any iterative function (aka function with loop) can be 
// recursive instead.

// Iterator function
const countToTen = (num = 1) => {
    while (num <= 10) {
        console.log(num);
        num++;
    }
}

// countToTen();

// Recursive functions have 2 parts:
// 1) the resursive call to the function
// 2) at least one condition to exit

const recurToTen = (num = 1) => {
    if (num > 10) return;
    console.log(num);
    num++;
    recurToTen(num);
}

// recurToTen();

// Reasons to use Recursion
// 1) Less Code
// 2) Elegant Code 
// 3) Increased readability

// Reasons to not use recursion
// 1) Performence
// 2) Possibly more difficult to debug
// 3) Is the readability improved?

// The Standard Example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

// Without recursion
const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}

// console.log(fibonacci(7));

// With recursion
// const fib = (num, array = [0, 1]) => {
//     if (num <= 2) return array;
//     const [nextToLast, last] = array.slice(-2);
//     return fib(num - 1, [...array, nextToLast + last]);
// }

// console.log(fib(12));

// What number is in the nth position of the Fibonacci Sequence?
// Whithout recursion
const fibonacciPos = (pos) => {
    if (pos <= 1) return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast, last);
    }
    return seq[pos];
}

// console.log(fibonacciPos(8));

// With recursion
const fibPos = (pos) => {
    if (pos < 2) return pos;
    return fibPos(pos - 1) + fibPos(pos - 2);
}

// console.log(fibPos(8));

// Real-life Examples:
// 1) Continuation Token from API
// 2) A Parser
// a company directory
// the DOM - a web crawler
// An XML or JSON data export

const artistByGeneres = {
    jazz: ['Miles Davis', 'John Coltrane'],
    rock: {
        classic: ['Bob Sager', 'The Eagles'],
        hair: ['Def Leppard', 'Whitesnake', 'Poison'],
        alt: {
            classic: ['Pearl Jam', 'The Killers'],
            current: ['Joywave', 'Sir Sly']
        }
    },
    unclasified: {
        new: ['Caamp', 'Neil Young'],
        classic: ['Seal',  'Morcheeba', 'Chris Stapleton']
    }
}

const getArtistByName = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist);
            });
        }
        getArtistByName(dataObj[key], arr);
    });
    return arr;
}

console.log(getArtistByName(artistByGeneres));