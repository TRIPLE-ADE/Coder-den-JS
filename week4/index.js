//Exercise one
//task1
//using prompt to input their age and check if they are old enough or not
// let userAge = prompt('Enter your Age')

// if (userAge >= 18) {
//     console.log(`You are ${userAge}. You are old enough to drive`)
// } else { console.log(`You left with ${18 - userAge} years to drive.`) }

//task 2
// using user Age and compare it with my Age
// let myAge = 20;
// let yourAge = prompt('Enter your Age')

// if (myAge > yourAge) {
//     console.log(`I am ${myAge - yourAge} years older than you`)
// } else {
//     console.log(`you are ${yourAge - myAge} years older than you`);
// }


//task 3
// checking if a greater or less than b
 let a = 4;
 let b = 3;

 //using if else statement
if (a > b) {
     console.log('a is greater than b')
} else {
    console.log('a is less than b')
 }
//using ternary operator
a > b ? console.log("a is greater than b") : console.log("a is less than b");

//checking if number is even or not
let isNumEven = 95;

if ((isNumEven % 2) == 0) {
    console.log(`${isNumEven} is an even number`)
} else {
    console.log(`${isNumEven} is an odd number`);
}


//Exercise two
// task one
// giving grade to student according to their score

let studentScore =50;

if (studentScore >= 80 && studentScore <= 100) {
    console.log('A')
} else if (studentScore >= 70 && studentScore <= 79) {
    console.log('B')
} else if (studentScore >= 60 && studentScore <= 69) {
    console.log("C");
} else if (studentScore >= 50 && studentScore <= 59) {
    console.log('D')
} else if (studentScore >= 0 && studentScore <= 49) {
    console.log("F");
}

//task two
// Check if the season is Autumn, Winter, Spring or Summer
// let month = Prompt('Enter a month')

// if (month == "september" || month == "october" || month == "november") {
//   console.log("the season is Autumn");
// } else if (month == "december" || month == "january" || month == "february") {
//   console.log("the season is Winter");
// } else if (month == 'march' || month == 'april' || month == 'may') {
//      console.log("the season is Spring");
// } else if (month == 'june' || month == 'july'|| month == 'august') {
//     console.log("the season is Summer");
// }


//task three
// checking if a day is a working day or weekends
let day = 'sunday'
if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') {
    console.log(`${day} is a working day`)
} else if (day == 'saturday' || day == 'sunday') {
    console.log(`${day} is a weekends`);
} else {
    console.log("It is not a day ");
}

//Exercise level three
// task one

let monthDays = 'december'

switch (monthDays) {
  case "january":
    console.log("January has 31 days.");
    break;
  case "february":
    console.log("February has 28 days.");
    break;
  case "march":
    console.log("March has 31 days");
    break;
  case "april":
    console.log("April has 31 days");
    break;
  case "may":
    console.log("May has 31 days");
    break;
  case "june":
    console.log("june has 30 days");
    break;
  case "july":
    console.log("July has 31 days");
    break;
  case "august":
    console.log("August has 31 days");
    break;
  case "september":
    console.log("september has 30 days");
    break;
  case "october":
    console.log("October has 31 days");
    break;
  case "november":
    console.log("November has 30 days");
    break;
  case "december":
    console.log("December has 31 days");
    break;
  default:
    console.log("It is not a month of the year");
}


