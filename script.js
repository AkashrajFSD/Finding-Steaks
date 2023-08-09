function findMaxStreaks(intArray) {
  if (!Array.isArray(intArray) || intArray.length <= 1) {
    throw new Error("Input array must have a length greater than 1.");
  }

  let maxPositiveStreak = 0;
  let currentPositiveStreak = 0;
  let maxNegativeStreak = 0;
  let currentNegativeStreak = 0;

  intArray.forEach((num) => {
    if (num > 0) {
      currentNegativeStreak = 0;
      currentPositiveStreak++;
      maxPositiveStreak = Math.max(maxPositiveStreak, currentPositiveStreak);
    } else if (num < 0) {
      currentPositiveStreak = 0;
      currentNegativeStreak++;
      maxNegativeStreak = Math.max(maxNegativeStreak, currentNegativeStreak);
    } else {
      currentPositiveStreak = 0;
      currentNegativeStreak = 0;
    }
  });

  return {
    maxPositiveStreak,
    maxNegativeStreak,
  };
}

let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];
console.log(findMaxStreaks(intArray));
