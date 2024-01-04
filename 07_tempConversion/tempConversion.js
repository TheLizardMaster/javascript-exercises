const convertToCelsius = function(faren) {
    const number = (faren -32) * (5/9);
    return Math.round(number * 10) / 10;
};

const convertToFahrenheit = function(cels) {
    const number = (cels * (9/5)) + 32;
    return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
