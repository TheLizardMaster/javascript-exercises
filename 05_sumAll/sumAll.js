const sumAll = function (a, b) {

    let sum = 0;

    if ((a || b) < 0) {

        return "ERROR";

    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {

        return "ERROR"

    } else if (a > b) {

        for (let i = b; i <= a; i++) {
            sum += i;
          }
          return sum;


    } else if (b > a) {

        for (let i = a; i <= b; i++) {
            sum += i;
          }
          return sum;

    } else return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
