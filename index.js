// Base Check
// Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

// The string may contain integers, and uppercase or lowercase characters.
// The check should be case-insensitive.
// The base can be any number 2-36.
// A number is valid if every character is a valid digit in the given base.
// Example of valid digits for bases:
// Base 2: 0-1
// Base 8: 0-7
// Base 10: 0-9
// Base 16: 0-9 and A-F
// Base 36: 0-9 and A-Z

function isValidNumber(n, base) {
  console.log(n, base);
  const baseString = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // take base - 1 to create dynamic regex expression
  let newString = baseString.slice(0, base);
  console.log(newString);
  let re = new Regex(`${newString}`, 'g');
  console.log(re.test(n));
  // if n !contains digits > base - 1
  // return false
  // else return true
  //  return n;
}

// let arrayOfStrings = ['James', 'Bond', 'is', 'cool'];
// let largeText = "The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Fleming's death in 1964, eight other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jeffery Deaver, William Boyd, and Anthony Horowitz. The latest novel is With a Mind to Kill by Anthony Horowitz, published in May 2022. Additionally Charlie Higson wrote a series on a young James Bond, and Kate Westbrook wrote three novels based on the diaries of a recurring series character, Moneypenny.";

//    for(let word of arrayOfStrings) {
//         console.log(`check word`, word);
// create dynamic regex for each word
// dynamic just means that each regex will be different for each word
// remember to use backticks `` to use Template literals in Javascript
//         let re = new RegExp(`${word}`, 'g');
//         let isMatch = largeText.match(re);
//         if(isMatch) {
//             console.log(`log matching word in text`, isMatch);
//         } else {
//             console.log(`no matching words found for ${word}`);
//         }
//     };

// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.
// The start and end parameters specifies the part of the string to extract.
// The first position is 0, the second is 1, ...
// A negative number selects from the end of the string.
