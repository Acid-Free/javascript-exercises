const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  const oldest = people.sort((a, b) => {
    const ageA =
      ("yearOfDeath" in a ? a.yearOfDeath : currentYear) - a.yearOfBirth;
    const ageB =
      ("yearOfDeath" in b ? b.yearOfDeath : currentYear) - b.yearOfBirth;

    return ageB - ageA;
  })[0];

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
