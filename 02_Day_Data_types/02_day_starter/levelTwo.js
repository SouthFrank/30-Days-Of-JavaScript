// Using the console print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

// Using the console print out the following quote:

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof Number('10') == typeof 10);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.ceil(parseFloat(9.8)) === 10);

// Check if 'on' is found in both python and jargon
let pyth = 'python';
let jarg = 'jargon';
console.log(pyth.includes('on') && jarg.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargonSentence = 'I hope this course is not full of jargon.';
console.log(jargonSentence.includes('jargon'));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 100) + 1);

// Generate a random number between 50 and 100 inclusively.\

const mathRandomOne = Math.floor(Math.random() * 50) + 51;
console.log(mathRandomOne);

// Generate a random number between 0 and 255 inclusively.

const mathRandomTwo = Math.floor(Math.random() * 255) + 1;
console.log(mathRandomTwo);

// Access the 'JavaScript' string characters using a random number.

let newStr = 'JavaScript';
const mathRandomThree = Math.floor(Math.random() * newStr.length) + 1;
console.log(newStr[mathRandomThree]);