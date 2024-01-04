const removeFromArray = function (array, ...args) {

    return array.filter((value) => !args.includes(value))

}

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
