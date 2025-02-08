// 1
function sum(firstNumber, secondNumber) {
  let sumNumber = firstNumber + secondNumber;

  return sumNumber;
}
console.log(sum(5, 7));
console.log(sum(8, 15));
sum();
// 2
function compareNumbers(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(`${numberOne} is greater than ${numberTwo}`);
  } else if (numberOne < numberTwo) {
    console.log(`${numberOne} is less than ${numberTwo}`);
  }
}

compareNumbers(5, 8);
compareNumbers(11, 6);
compareNumbers(1535353535353, 1232463434456);
compareNumbers();

// 3

function findGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(findGrade(85));
console.log(findGrade(72));
console.log(findGrade(95));
console.log(findGrade(58));
findGrade();
// 4
function checkTemperature(temperature) {
  if (temperature < 0) {
    return "Freezing";
  } else if (temperature >= 0 && temperature <= 20) {
    return "Cold";
  } else if (temperature >= 21 && temperature <= 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}

console.log(checkTemperature(-5));
console.log(checkTemperature(15));
console.log(checkTemperature(25));
console.log(checkTemperature(35));
checkTemperature();

//5
function greetUser() {
  let name = prompt("sheikvanet saxeli");

  if (name) {
    console.log(`Hello, ${name}! Welcome!`);
  } else {
    console.log("Hello, stranger! Welcome!");
  }
}

greetUser();
// 6
function proceedAction(shouldProceed) {
  if (shouldProceed && confirm("Do you want to proceed?")) {
    return "Action confirmed.";
  }
  return "Action canceled.";
}

console.log(proceedAction(true));
