const fibonacci = function(fib) {

    let nacci = Math.floor(((1 + Math.sqrt(5))**fib - (1 - Math.sqrt(5))**fib) / (2**fib * Math.sqrt(5)));

    if (fib < 0) {
        return "OOPS";
    } else {
        return nacci;
    }
};

// Do not edit below this line
module.exports = fibonacci;
