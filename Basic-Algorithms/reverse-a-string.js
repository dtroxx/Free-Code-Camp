/* Reverse a String
- Reverse the provided string.
- You may need to turn the string into an array before you can reverse it.
- Your result must be a string.
 */

function reverseString(str) {
    console.log(str.split('').reverse().join('')); // split into array, reverse array, join back into string
    return str.split('').reverse().join(''); // split into array, reverse array, join back into string
}

reverseString("hello"); // should become "olleh".
reverseString("Howdy"); // should become "ydwoH".
reverseString("Greetings from Earth"); // should return "htraE morf sgniteerG".
