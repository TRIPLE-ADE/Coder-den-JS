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

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.");


console.log("10" == 10)
console.log(Math.round(parseFloat("9.8")) == 10);









