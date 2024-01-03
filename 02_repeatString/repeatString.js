const repeatString = function(string,num) {

    let repeatedString = string;

        for (let i=0; i < (num-1); i++) {
            repeatedString += string;
        }

        if (num > 0) {

            return repeatedString;

        } else if (num < 0) {

            return "ERROR";
            
        } else return "";
        
};

// Do not edit below this line
module.exports = repeatString;
