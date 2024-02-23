const findTheOldest = function(personArray) {

    // MAP Method

    const giveDeath = personArray.map((person) => {
        if (person.yearOfDeath) {
           return person;
        } else if (!person.yearOfDeath){
            person.yearOfDeath = 2024;
            return person;
        }
    });
    
    // SORT Method
    
    const sortedByOldest = giveDeath.sort((a,b) => {
    
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
            return -1;
        } else {
            return 1;
        }
    
    })

    return sortedByOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
