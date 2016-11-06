/* Confirm the Ending */

/*
- Check if a string (first argument, str) ends with the given target string (second argument, target).
- This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
- But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
- Do not use the built-in method .endsWith() to solve the challenge.

- Helpful links:
 String.prototype.substr()
 String.prototype.substring()
 */

// substr() solution

// function confirmEnding(str, target) {
//     console.log(str.endsWith(target)); // tested with endsWith() for confirmation;
//     console.log(str.substr(-target.length) === target);
//     return (str.substr(-target.length) === target); // compares the part of string starting from the end of the string minus the target length to the target
// }
//
// confirmEnding("Bastian", "n"); //should return true.
// confirmEnding("Connor", "n"); //should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //should return false.
// confirmEnding("He has to give me a new name", "name"); //should return true.
// confirmEnding("Open sesame", "same"); //should return true.
// confirmEnding("Open sesame", "pen"); //should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //should return false.

// substring() solution

function confirmEnding(str, target) {
    console.log(str.substring(str.length - target.length) === target);
    return str.substring(str.length - target.length) === target; // subtracts target length from str length to find starting index of characters to compare to target
}                      // 7 - 1 = index 6 = n

confirmEnding("Bastian", "n"); //should return true.
confirmEnding("Connor", "n"); //should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //should return false.
confirmEnding("He has to give me a new name", "name"); //should return true.
confirmEnding("Open sesame", "same"); //should return true.
confirmEnding("Open sesame", "pen"); //should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //should return false.