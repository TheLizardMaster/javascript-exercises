const palindromes = function (pal) {

    let palArray = pal.split('').filter(char => /[a-zA-Z0-9]/.test(char));
    const forwardJoin = palArray.join('');

    const revArray = palArray.reverse();
    const joinedArray = revArray.join('');

    if (joinedArray.toUpperCase() === forwardJoin.toUpperCase()) {
        return true;
    } else return false;

};

// Do not edit below this line
module.exports = palindromes;
