// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

const loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let pattern = /love/gi
const newArr = loveSentence.match(pattern);
console.log(newArr.length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
let patternTwo = /because/gi;
const newArrTwo = becauseSentence.match(patternTwo);
console.log(newArrTwo.length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let regCheck = /[~`@!#$%\^&*+=\-\[\]\';,/{}|\\":<>\?]/g;

console.log(sentence.replace(regCheck, ''));

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regCheckTwo = /\d+/g;
const incomeNums = income.match(regCheckTwo);
console.log(incomeNums);
console.log((parseInt(incomeNums[0]) * 12) + (parseInt(incomeNums[1])) + (parseInt(incomeNums[2] * 12)));