//Exercise one
//task1
//Declaring firstName, lastName, country, city, age, isMarried, year variable and assigning value to it and check the typeof data types.

//declaring variable and assigning value
let firstName = "Abdulrasheed";
let lastName = "Abdulsalam";
let country = "Nigeria";
let city = "Minna";
let age = 21;
let isMarried = false;
let year = new Date().getFullYear();

//checking the typeof variable
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//task 2
//checking if type of string 10 is equal to type of number 10
let str = '10';
let num = 10;
console.log(typeof str == typeof num )
 
//task 3
// Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt('9.8') == typeof 10);

//task 4
// Write three JavaScript statement which provide truthy value.


//Write three JavaScript statement which provide fasly value.

//task 5
// using console to confirm the following expression
console.log(4 > 3,
4 >= 3,
4 < 3,
4 <= 3,
4 == 4,
4 === 4,
4 != 4,
4 !== 4,
4 != '4',
4 == '4',
4 === '4',
"python".length != "jargon".length)

//task 6
// using console to confirm the following expression
console.log(4 > 3 && 10 < 12,
4 > 3 && 10 > 12,
4 > 3 || 10 < 12,
4 > 3 || 10 > 12,
!(4 > 3),
!(4 < 3),
!(false),
!(4 > 3 && 10 < 12),
!(4 > 3 && 10 > 12),
!(4 === '4'), "dragon"&&"python".includes(!"on"))

//task 7
// using date object to do print 
let now = new Date()
let currentYear = now.getFullYear()
let currentMonthNum =now.getMonth()
let currentDate = now.getDate()
let currentDay = now.getDay()
let currentHour = now.getHours()
let currentMinute = now.getMinutes()
let past = new Date('1970-01-01')

console.log(currentYear)
console.log(currentMonthNum)
console.log(currentDate)
console.log(currentDay)
console.log(currentHour)
console.log(currentMinute)
console.log((now - past)/1000)


//Exercise level 2
//task one
// calculate the area of a triangle by allowing user to enter the height and base of the triangle
let triangleBase = prompt('Enter the base of a triangle')
let triangleHeight = prompt('Enter the height of a triangle')
let area = 0.5 * triangleBase * triangleHeight

console.log(area);

//task two
// calculate the perimeter of a triangle by allowing user to enter the three sides of the triangle 
let sideA = prompt('Enter the side a of a triangle')
let sideB = prompt('Enter the side b of a triangle')
let sideC = prompt('Enter the side c of a triangle')
let perimeter =  Number(sideA) + Number(sideB) + Number(sideC)

console.log(perimeter)

//task three
// calculate area and perimeter of a rectangle by allowing user to enter length and width
let rectangleLength = prompt('Enter the length of a rectangle')
let rectangleWidth = prompt('Enter the width of a rectangle')
let rectangleArea = rectangleWidth * rectangleLength
let rectanglePerimeter = 2 * (Number(rectangleLength) + Number(rectangleWidth))

console.log(rectangleArea, rectanglePerimeter)

//task four
// calculate the radius and circumference of a circle by using a constant pi and getting radius from user
const PI = 3.14
let radius = prompt('Enter the radius of a circle') 
let circleArea = PI * radius**2
let circumference = 2 * PI * radius

console.log(circleArea, circumference)

//task 5
//


//task 6
// calculate the slope between two points using th formula m= (y2 - y1)/(x2 - x1)
let y2 = 10
let y1 = 2
let x2 = 6
let x1 = 2
let slope = (y2-y1)/(x2-x1)

console.log(slope)

//task 7
// compare the slope in question 5 and 6


//task 8
// calculate the value of y as y=x2 + 6x + 9 and check for at what value of x is y = 0

//The value y equal zero at x equal to -3
let x = -3;
let y = x ** 2 + 6 * x + 9;
console.log(y)


//task 9
// calculating weekly earnings by allowing user enter hours and rate per hours

let workingHours = prompt('Enter your working hours')
let ratePerHours = prompt('Enter your rate per hours')

let weeklyEarning = workingHours * ratePerHours

console.log(weeklyEarning)


// task 10
//check if the length of name is greater than 7 and print name is long else your name is short
let myName = 'Abdulrasheed'

//using ternary operator 
myName.length > 7
? console.log("Name is long") : console.log("Name is short")

//task11
// Comparing first name length and family name length and printing to the console
let myFirstName = 'Abdulrasheed'
let familyName = 'Abdulsalam'

//using ternary operator 
myFirstName.length > familyName.length
? console.log(`Your first name, ${myFirstName} is longer than your family name, ${familyName}`) : console.log(`Your first name, ${myFirstName} is shorter than your family name, ${familyName}`) 


//task 12
// declaring two myAge and yourAge and print it to the console

let myAge = 20;
let yourAge = 15;

//using ternary operator 
myAge > yourAge
  ? console.log(`I am ${myAge - yourAge} years older than you.`)
    : console.log(`I am ${yourAge - myAge} years younger than you.`);
  

//task 13
// calculating a userAge and check if they are old enough to drive or not by
let birthYear = prompt('Enter your birth Year')
let userAge = new Date().getFullYear() - Number(birthYear)

//using ternary operator
userAge >= 18
? console.log(`You are ${userAge}. You are old enough to drive`) : console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`)

// task 14
// calculating the number of seconds a person has lived by allowing user to enter the number of years they have lived
let userYears = prompt('Enter the number of years you have lived')
let weekInYear = 52
let daysInWeeks = 7
let hoursInDay = 24
let minsInHour = 60
let secondsInMinute = 60
let secondsLived = userYears * weekInYear * daysInWeeks * hoursInDay * minsInHour * secondsInMinute

console.log(secondsLived)



// task 15
//Creating a human readable time format using the Date time object
let nowFormat = new Date();
let currentYear1 = now.getFullYear();
let currentMonth1 = now.getMonth();
let currentDate1 = now.getDate();
let currentHour1 = now.getHours();
let currentMinute1 = now.getMinutes();

console.log(
  `${currentYear1}-${currentMonth1 + 1}-${currentDate1} ${currentHour1}:${currentMinute1}`
);
console.log(
  `${currentDate1}-${currentMonth1 + 1}-${currentYear1} ${currentHour1}:${currentMinute1}`
);
console.log(
  `${currentDate1}/${currentMonth1 + 1}/${currentYear1} ${currentHour1}:${currentMinute1}`
);


// Exercise level 3
// task 1
// Creating a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
console.log(
  `${currentYear1}-${currentMonth1 + 1}-${currentDate1} ${currentHour1}:${currentMinute1}`
);















