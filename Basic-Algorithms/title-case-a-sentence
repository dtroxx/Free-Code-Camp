/* Title Case a Sentence
- Return the provided string with the first letter of each word capitalized.
- Make sure the rest of the word is in lower case.
- For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */

/* Using a for loop */

// function titleCase(str) {
//     var newArr = []; // declare empty holder array
//     var strSplit = str.split(' '); // split string into array by words
//     for (var i = 0; i < strSplit.length; i++) { // iterate through each word in array
          //push the first letter of each word to uppercase + rest of word to lowercase into newArr array
//        newArr.push(strSplit[i][0].slice(0,1).toUpperCase() + strSplit[i].slice(1).toLowerCase());
//     }
//     console.log(newArr.join(' ')); // join newArr into string
//     return newArr.join(' '); // join newArr into string   
// }
//
// titleCase("I'm a little tea pot") //should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt"); //should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return "Here Is My Handle Here Is My Spout".

/* Using map() method on array */

function titleCase(str) {
    str = str.split(' '); // split string into array by word
    var newArr = str.map(function(e){ // use map method on array to return 1st letter uppercase + rest of word lowercase into new array
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });

    console.log(newArr.join(' ')); // join newArr into string
    return newArr.join(' '); // join newArr into string
}

titleCase("I'm a little tea pot"); //should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); //should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return "Here Is My Handle Here Is My Spout".
