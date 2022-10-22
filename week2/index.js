//Exercise one
// declaring a variable and assigning it a value
//task1
let challenge = "30 Days Of JavaScript";

// printing it value out in the console
//task2
console.log(challenge);

// checking the length of the string
// task3
console.log(challenge.length);

// changing the values it to uppercase letter
// task4
console.log(challenge.toUpperCase());

// changing the values it to lowercase letter
// task5
console.log(challenge.toLowerCase());

// slicing out the first word in the string
// task6
console.log(challenge.substr(0, 2));

// slicing out the word  Days Of JavaScript in the string
// task7
console.log(challenge.substring(3))

// Check if the string contains a word Script
// task8
console.log(challenge.includes("Script"))

// splitting the string into an array
// task9
console.log(challenge.split(""))

// splitting the string into an array using th space in between them
// task10
console.log(challenge.split(" "))

//splitting this new string into an array using the comma in between
// task11
console.log(('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon').split(","))

// replacing the word JavaScipt with python in the string
// task12
console.log(challenge.replace("JavaScript", "Python")); 

// checking for character at index 15 of the string
// task13
console.log(challenge.charAt(15))

//checking for the character code of J 
// task14
console.log(challenge.charCodeAt(challenge.length - 10));

//checking for the index of character a in the string
// task15
console.log(challenge.indexOf('a'));

//checking for the last index of character a in the string
// task16
console.log(challenge.lastIndexOf('a'));

// checking for the position of the first occurrence of the word because using indexof
// task 17
console.log(('You cannot end a sentence with because because because is a conjunction').indexOf('because'))

// checking for the position of the last occurrence of the word because using lastindexof
// task 18
console.log(('You cannot end a sentence with because because because is a conjunction').lastIndexOf('because'))

// searching for the position of the word because
// task 19
console.log(('You cannot end a sentence with because because because is a conjunction').search('because'))

//trimming out empty space at the beginning and end of the sentence
// task 20
console.log(challenge.trim())

//checking if the word matches the word at the beginning of the sentence
// task 21
console.log(challenge.startsWith('30'))

//checking if the word matches the word at the end of the sentence
// task 22
console.log(challenge.endsWith('JavaScript'))

//checking for all a's in the sentence
// task 23
console.log(challenge.match(/a/gi))

//joining two different string together 
// task 24
let string = '30 Days of';
console.log(string.concat(' JavaScript'))

//using repeat to print the sentence twice
// task 25
console.log(challenge.repeat(2))


//Exercise two

//task 1
// printing to the console
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//task2
// printing to the console use escape characters
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.");

//task 3
// checking if two numbers are equal
console.log("10" == 10)

//task 4
// checking if two numbers are equal
console.log(Math.round(parseFloat("9.8")) == 10);

//task 5
// checking if a string contains "on"
console.log('python'.includes("on"))
console.log('jargon'.includes("on"));

//task 6
// checking if a word is in a string
let isJargonThere = "I hope this course is not full of jargon";
console.log(isJargonThere.includes("jargon"))

// task 7
// generating random number from 0 to 100
let num1 = Math.floor(Math.random() * 101);

console.log(num1)

// task 8
// generating a random number from 50 to 100
let num2 = Math.floor(Math.random() * (51) + 50);

console.log(num2)

// task 9
// generating random number from 0 to 255
let num3 = Math.floor(Math.random() * 256);

console.log(num3)

// task 10
// 
let strIndex = 'Javascript';
console.log(strIndex.charAt(Math.floor(Math.random() * 10)))

// task 11
// printing to console and escape character to move to next line
let useEscapeCharacter = " 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125";

console.log(useEscapeCharacter);

// task 12
//slicing out the string "because because because" from the original string
let sliceOut = "You cannot end a sentence with because because because is a conjunction";

console.log(sliceOut.substr(31, 23 ))



//Exercise 3
// task 1
// counting the number of the word love in the string
let countLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(countLove.match(/love/gi));

// task 2
// using match to check for all the word because in the string
let matchBecause ='You cannot end a sentence with because because because is a conjunction'
console.log(matchBecause.match(/because/gi))

// task 3
// 
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[%&$@#;]/gi, ''));

// task 4
// calculate the total income from the string
let message = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let monthlyIncome = Number(message.slice(9, 13) * 12);
let annualBonus = Number(message.slice(42, 47));
let coursesPerMonth = Number(message.slice(67, 72) * 12);

console.log(monthlyIncome + annualBonus + coursesPerMonth + " euro");





