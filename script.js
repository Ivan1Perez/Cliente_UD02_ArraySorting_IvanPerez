let selectedMethod;
let whichMethodMsg = "Which sorting method would you like to use?\n\n";
let sortingMethodsMsg =
  '   - Sort --> Enter "1".\n   - Bubble Sort --> Enter "2".\n   - Insertion --> Enter "3".\n   - Selection --> Enter "4".\n\n';
let selectMethodCompleteMsg = new Array(whichMethodMsg, sortingMethodsMsg);
let genericErrorMsg =
  "Error. The character introduced is not valid. Please. Try again.\n";
let answerIsValid = true;
let methodOptions = "1234";
let numAmount;
let numAmountMsg = "Enter the amount of numbers you want to sort:";
let numAmoutErrorMsg =
  "Error. Only numeric characters are allowed. Please, try again.\n";
let numbersToSort;
let sortedNums;
let time, timeStart, timeFinish;
let showNumbersAnswer;
let showNumbersFrontHeaderMsg;
let showNumbersBackHeaderMsg;
let yesNoMsg = '   - Yes --> Enter "1".\n   - No --> Enter "2".';
let showNumbersCompleteMsg;
let goBackInitialMenuMsg = "Go to the inital menu?\n";
let goBackInitialMenuCompleteMsg = new Array(goBackInitialMenuMsg, yesNoMsg);
let goInitialMenuAnswer;
let goBack = true;

//Funcion principal
function main() {
  selectedMethod = optionsFunct(
    selectMethodCompleteMsg,
    genericErrorMsg,
    answerIsValid
  );
  do {
    if (
      selectedMethod !== "1" &&
      selectedMethod !== "2" &&
      selectedMethod !== "3" &&
      selectedMethod !== "4"
    ) {
      answerIsValid = false;
      selectedMethod = optionsFunct(
        selectMethodCompleteMsg,
        genericErrorMsg,
        answerIsValid
      );
    } else {
      answerIsValid = true;
    }
  } while (!answerIsValid);

  numAmount = prompt(numAmountMsg);

  do {
    if (numAmount.trim() === "" || isNaN(numAmount)) {
      numAmount = prompt(`${numAmoutErrorMsg}${numAmountMsg}`);
    }
  } while (numAmount.trim() === "" || isNaN(numAmount));

  numbersToSort = randomNums(numAmount);
  console.log(
    "The numbers are getting sorted. Please, be patient, this could take a while."
  );

  switch (selectedMethod) {
    case "1":
      timeStart = new Date();
      numbersToSort.slice().sort((a, b) => a - b);
      timeFinish = new Date();
      time = (timeFinish - timeStart) / 1000;
      break;

    case "2":
      timeStart = new Date();
      sortedNums = bubbleSort(numbersToSort);
      timeFinish = new Date();
      time = (timeFinish - timeStart) / 1000;
      break;

    case "3":
      break;

    case "4":
      break;

    default:
      break;
  }

  showNumbersFrontHeaderMsg = `Total numbers: ${numAmount}\nSorted in `;
  showNumbersBackHeaderMsg = `${time} seconds.\nDo you want to see the sorted numbers?\n`;
  showNumbersCompleteMsg = new Array(
    showNumbersFrontHeaderMsg,
    showNumbersBackHeaderMsg,
    yesNoMsg
  );

  showNumbersAnswer = optionsFunct(
    showNumbersCompleteMsg,
    genericErrorMsg,
    answerIsValid
  );
  do {
    if (showNumbersAnswer !== "1" && showNumbersAnswer !== "2") {
      answerIsValid = false;
      showNumbersAnswer = optionsFunct(
        showNumbersCompleteMsg,
        genericErrorMsg,
        answerIsValid
      );
    } else {
      answerIsValid = true;
    }
  } while (!answerIsValid);

  if (showNumbersAnswer === "1") {
    for (const iterator of sortedNums) {
      console.log(iterator);
    }
  }

  goInitialMenuAnswer = optionsFunct(
    goBackInitialMenuCompleteMsg,
    genericErrorMsg,
    answerIsValid
  );
  do {
    if (goInitialMenuAnswer !== "1" && goInitialMenuAnswer !== "2") {
      answerIsValid = false;
      goInitialMenuAnswer = optionsFunct(
        goBackInitialMenuCompleteMsg,
        genericErrorMsg,
        answerIsValid
      );
    } else {
      answerIsValid = true;
    }
  } while (!answerIsValid);

  if (goInitialMenuAnswer === "2") {
    goBack = false;
    window.alert("Thanks for playing.");
  }
}

//Funciones:

function optionsFunct(messages, errorMsg, isValid) {
  let completeMsg = "";

  for (const message of messages) {
    completeMsg += message;
  }

  if (!isValid) {
    completeMsg = errorMsg + completeMsg;
  }

  return prompt(`${completeMsg}`);
}

function randomNums(numAmount) {
  let availableNumbers = new Array();
  let unsortedNums = new Array();
  let num;
  let randomIndex;

  for (let i = 0; i <= numAmount; i++) {
    availableNumbers.push(i);
  }

  while (unsortedNums.length < numAmount) {
    randomIndex = Math.floor(Math.random() * availableNumbers.length);
    num = availableNumbers[randomIndex];
    unsortedNums.push(num);
    availableNumbers.splice(randomIndex, 1);
  }

  return unsortedNums;
}

function bubbleSort(numbers) {
  let sortedNums = numbers;
  let aux;

  for (let i = 0; i < sortedNums.length; i++) {
    for (let j = 0; j < sortedNums.length; j++) {
      if (sortedNums[j] > sortedNums[j + 1]) {
        aux = sortedNums[j];
        sortedNums[j] = sortedNums[j + 1];
        sortedNums[j + 1] = aux;
      }
    }
  }

  return sortedNums;
}

while (goBack) {
  main();
  console.clear();
}
