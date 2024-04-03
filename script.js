const wakeUp = document.getElementById("wakeUpI");
const breakfast = document.getElementById("breakfastI");
const morningSnack = document.getElementById("morningSnackI");
const lunch = document.getElementById("lunchI");
const eveningSnack = document.getElementById("eveningSnackI");
const dinner = document.getElementById("dinnerI");
const beforeSleep = document.getElementById("beforeSleepI");

const userInput = document.querySelectorAll("input[type='search']");
const dataList = document.getElementById("itemList");
const addButton = document.getElementById("addButton");
const selectedItemsList = document.getElementsByClassName("selectedItems");
const body = document.body;
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let weight = document.getElementById("current_weight").value;
  let height = document.getElementById("current_height").value;
  height /= 100;
  const age = document.getElementById("current_age").value;
  /*
  let p = document.createElement("p");
  p.innerHTML = `Your BMI is ${weight / (height * height)}<br>Your BMR is ${
    10 * weight + 6.25 * height - 5 * age + 5
  }`;
  body.appendChild(p);*/
    var docDefinition = {
        content: [
            `Your BMI is ${weight / (height * height)}`, `Your BMR is ${10 * weight + 6.25 * height - 5 * age + 5}`
        ],
        defaultStyle: {
        }
    };
    pdfMake.createPdf(docDefinition).open();
});
const filterOptions = (userInputValue) => {
  const filteredOptions = items.filter((item) =>
    item.toLowerCase().includes(userInputValue.toLowerCase())
  );
  return filteredOptions;
};

const showSuggestions = (i) => {
  const userInputValue = i.value;
  console.log(userInput);
  const filteredOptions = filterOptions(userInputValue);
  dataList.innerHTML = ""; // Clear existing options

  if (filteredOptions.length > 0) {
    filteredOptions.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      dataList.appendChild(optionElement);
    });
  }
};
/*

const addItem = (selectedItem, i) => {
  const listItem = document.createElement("li");
  listItem.textContent = selectedItem;
  console.log(selectedItem)
  selectedItemsList[0].appendChild(listItem);
  userInput.value = "";
};
*/

userInput.forEach((i) => {
  i.addEventListener("keyup", (i) => showSuggestions(i.target));
});

dataList.addEventListener("click", (event) => {
  const clickedOption = event.target; /*
  if (clickedOption.tagName === "OPTION") {
    addItem(event.target.value,event.target)
  }*/
});

function checkRadio() {
  let selectedRadio = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  let femaleQuestion = document.getElementById("female_questions");

  console.log(selectedRadio);
  if (selectedRadio == "male") {
    femaleQuestion.style.display = "none";
  } else {
    femaleQuestion.style.display = "block";
  }
}

function addSelected(e, i) {
  e.preventDefault();
  const selectedOption = userInput[i].value;
  console.log(selectedOption);
  if (selectedOption) {
    const newListItem = document.createElement("li");
    newListItem.textContent = selectedOption;
    selectedItemsList[i].appendChild(newListItem);
    userInput[i].value = ""; // Clear input field after adding
  }
}

wakeUp.addEventListener("click", (e) => addSelected(e, 0));
breakfast.addEventListener("click", (e) => addSelected(e, 1));
morningSnack.addEventListener("click", (e) => addSelected(e, 2));
lunch.addEventListener("click", (e) => addSelected(e, 3));
eveningSnack.addEventListener("click", (e) => addSelected(e, 4));
dinner.addEventListener("click", (e) => addSelected(e, 5));
beforeSleep.addEventListener("click", (e) => addSelected(e, 6));

let gender = document.querySelectorAll('input[name="gender"]');
gender.forEach((i) => {
  i.addEventListener("click", checkRadio);
});

// Optional: Hide datalist on outside clicks (add event listener to document and check for clicks outside the search container)

// let BMR = 10 * weight + 6.25 * height - 5 * age + 5;
