/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
console.log("------------------------------Challenge 1------------------------------------------")
// 1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// 2. Calculate both their BMIs using the formula
function calculateBMI(mass, height) {
  return mass / height ** 2;
}

let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

function compareBMI(markBMI, johnBMI) {
    // biến lưu trữ kết quả so sánh
    let markHigherBMI = markBMI > johnBMI;
  if(markHigherBMI) {
        console.log(`Mark's BMI is higher than John's!`);
        console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);

  }
    else {
        console.log(`John's BMI is higher than Mark's!`);
        console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    }
}

// Test data 1
console.log(markBMI); // 27.309968138370508
console.log(johnBMI); // 24.194608809993426


// Test data 2
console.log(markBMI2)
console.log(johnBMI2)

console.log("------------------------------Challenge 2------------------------------------------")
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
 */

compareBMI(markBMI, johnBMI)
compareBMI(markBMI2, johnBMI2)

console.log("-------------------------- Challenge 3----------------------------------------------")
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */
// Test Data
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Function to calculate the average score
function calculateAverage(scoreArray) {
    const sum = scoreArray.reduce((acc, score) => acc + score, 0);
    return sum / scoreArray.length;
}

// Function to determine the winner
function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log('Dolphins win the trophy!');
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log('Koalas win the trophy!');
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log('It\'s a draw and both teams win the trophy!');
    } else {
        console.log('No team wins the trophy.');
    }
}

// Calculate and compare averages for Test Data 1
const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);
console.log(`Dolphins Avg: ${dolphinsAvg1}, Koalas Avg: ${koalasAvg1}`);
determineWinner(dolphinsAvg1, koalasAvg1);

// Calculate and compare averages for Bonus 1
const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);
console.log(`Dolphins Avg (Bonus 1): ${dolphinsAvgBonus1}, Koalas Avg (Bonus 1): ${koalasAvgBonus1}`);
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1);

// Calculate and compare averages for Bonus 2
const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);
console.log(`Dolphins Avg (Bonus 2): ${dolphinsAvgBonus2}, Koalas Avg (Bonus 2): ${koalasAvgBonus2}`);
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2);

console.log("------------------------------Challenge 4------------------------------------------")
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
 */

// Test Data
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// Function to calculate tip
function calculateTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}

// Calculate tips and total values for each bill
calculateTip(bill1); // Test with bill value 275
calculateTip(bill2); // Test with bill value 40
calculateTip(bill3); // Test with bill value 430





