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
  selectedMethod = null;
  numAmount = null;
  numbersToSort = null;
  sortedNums = null;
  showNumbersAnswer = null;
  goInitialMenuAnswer = null;

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
      sortedNums = numbersToSort.slice().sort((a, b) => a - b);
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
      timeStart = new Date();
      sortedNums = insertionSort(numbersToSort);
      timeFinish = new Date();
      time = (timeFinish - timeStart) / 1000;
      break;

    case "4":
      timeStart = new Date();
      sortedNums = selectionSort(numbersToSort);
      timeFinish = new Date();
      time = (timeFinish - timeStart) / 1000;
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
    for (let iterator of sortedNums) {
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
  let aux;

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        aux = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = aux;
      }
    }
  }

  return numbers;
}

function insertionSort(numbers) {
  let aux;
  let j;

  for (let i = 1; i < numbers.length; i++) {
    aux = numbers[i];
    j = i - 1;
    while (j >= 0 && numbers[j] > aux) {
      numbers[j + 1] = numbers[j];
      j = j - 1;
    }
    numbers[j + 1] = aux;
  }
  return numbers;
}

function selectionSort(numbers) {
  let aux;
  let min;

  for (let i = 0; i < numbers.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    if (min !== i) {
      aux = numbers[i];
      numbers[i] = numbers[min];
      numbers[min] = aux;
    }
  }
  return numbers;
}

while (goBack) {
  main();
  console.clear();
}
