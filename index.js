/**
 * Kids With the Greatest Number of Candies
 *
 * Given an integer array `candies` and an integer `extraCandies`, return a boolean
 * array where each element indicates whether the corresponding kid can have the
 * greatest number of candies if given all `extraCandies`.
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    // Whats going on here? why are we doing this?
    // In this function, we are creating a new variable "greatest" 
    // that essentially finds the max in the "candies" parameter
    // array, using the Math.max method. We also use the spread operator
    // on the parameter "candies" to iterate through all the elements 
    // in the array. 

    let greatest = Math.max(...candies);


    // Whats going on here? why are we doing this?
    // We now return the "candies" array using the map method, which 
    // allows us to make a new array with the same amount of elements. We
    // then check inside map if "el" parameter for candies as the callback 
    // plus extraCandies is greater than or equal to the greatest
    // 
    return candies.map((el) => el + extraCandies >= greatest);
}

module.exports = kidsWithCandies;