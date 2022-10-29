//Exercise one
// task one
// Declare an empty array
let emptyArr = new Array()
// task two
// Declare an array with more than 5 number of elements
let moreThanFive = ['one','two','three', 'four', 'five', 'six', 'seven']
//task Three
// Find the length of your array
console.log(moreThanFive.length);
//task four
// Get the first item, the middle item and the last item of the array
console.log(moreThanFive[0], moreThanFive[3], moreThanFive[moreThanFive.length-1])
//task five
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['string', false, 1, null, undefined ]
//task six
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// task seven
// Print the array using console.log()
console.log(itCompanies)
//task eight
// Print the number of companies in the array
console.log(itCompanies.length)
//task nine
// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[itCompanies.length-4], itCompanies[itCompanies.length-1])
//task ten
// Print out each company
console.log(
  itCompanies[0],
  itCompanies[1],
  itCompanies[2],
  itCompanies[3],
  itCompanies[4],
  itCompanies[5],
  itCompanies[6],
  itCompanies[itCompanies.length - 1]
);
//task eleven
// Change each company name to uppercase one by one and print them out
console.log(
  itCompanies[0].toUpperCase(),
  itCompanies[1].toUpperCase(),
  itCompanies[2].toUpperCase(),
  itCompanies[3].toUpperCase(),
  itCompanies[4].toUpperCase(),
  itCompanies[5].toUpperCase(),
  itCompanies[6].toUpperCase(),
  itCompanies[itCompanies.length - 1].toUpperCase()
);
//task twelve
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  `${itCompanies[0]},
  ${itCompanies[1]},
  ${itCompanies[2]},
  ${itCompanies[3]},
  ${itCompanies[4]},
  ${itCompanies[5]},
  ${itCompanies[6]}
  and ${itCompanies[itCompanies.length - 1]} are big IT companies.`
);
//task thirteen
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes('Facebook')) {
    console.log(`${itCompanies[0]}`);
} else {
    console.log(`A company is not found`);
}
//task fourteen
// Filter out companies which have more than one 'o' without the filter method

//task fifteen
// Sort the array using sort() method
console.log(itCompanies.sort())
// task sixteen
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
//task seventeen
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))
//task eighteen
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4))
//task nineteen
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length/2),4))
//task twenty
// Remove the first IT company from the array
console.log(itCompanies.shift())
// task 21
// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2,2));
// task 22
// Remove the last IT company from the array
console.log(itCompanies.pop());
// task 23
// Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length))

//Exercise two
// task 1
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// import { countries } from './countries.js'
// import { webTechs } from "./web_techs.js";

// console.log(countries, webTechs)

// // task 2
// // First remove all the punctuations and change the string to array and count the number of words in the array
// let text =
//     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let words = text.replace(/[,.]/g,"").split("")
// console.log(words)
// console.log(words.length)
// // task 3
// // In the following shopping cart add, remove, edit items
// // add 'Meat' in the beginning of your shopping cart if it has not been already added
// // add Sugar at the end of you shopping cart if it has not been already added
// // remove 'Honey' if you are allergic to honey
// // modify Tea to 'Green Tea'
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('Meat')
// shoppingCart.push('sugar')
// let removeHoney = shoppingCart.slice(0, 4).concat(shoppingCart.slice(5, 6))
// shoppingCart[shoppingCart.indexOf("Tea")] = 'Green Tea' 
// console.log(shoppingCart, removeHoney)
// // task4
// // In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// if (countries.includes('Ethiopia')) {
//   console.log('ETHIOPIA')
// } else {
//   countries.push('ETHIOPIA')
// }
// // task5
// // In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// if (webTechs.includes("Sass")) {
//   console.log(`Sass is a Css preprocess`);
// } else {
//   webTechs.push("Sass");
//   console.log(webTechs)
// }
// task 6
// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack);
//Exercise 3
// task one
//The following is an array of 10 students ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()

console.log(ages)






