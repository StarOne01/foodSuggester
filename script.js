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
const showResultsBtn = document.getElementById("submitButton");
const BMIShow = document.getElementById("resultBMI")

const getPDFBtn = document.getElementById("getPDFBtn");
console.log(getPDFBtn)

const resultsDiv = document.getElementById("results")


showResultsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let weight = document.getElementById("current_weight").value;
  let height = document.getElementById("current_height").value;
    const age = document.getElementById("current_age").value;
    const name = document.getElementById("client_name").value;
    const clientID = document.getElementById("membership_id").value;

    const BMI = weight / (height/100 * height/100);
    console.log(BMI)
    BMIShow.textContent = `Your BMI: ${BMI}`;
  /*
  let p = document.createElement("p");
  p.innerHTML = `Your BMI is ${weight / (height * height)}<br>Your BMR is ${
    10 * weight + 6.25 * height - 5 * age + 5
  }`;
  body.appendChild(p);*/

  resultsDiv.style.display = "block";
  var opts = {
    angle: -0.2, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    staticZones: [
      {strokeStyle: "#F03E3E", min: 0, max: 16}, // Red from 100 to 130
      {strokeStyle: "#FFDD00", min: 16, max: 17}, // Yellow
      {strokeStyle: "#30B32D", min: 18.5, max: 25}, // Green
      {strokeStyle: "#FFDD00", min: 25, max: 30}, // Yellow
      {strokeStyle: "#F03E3E", min: 35, max: 45}  // Red
   ],
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    staticLabels: {
      font: "10px sans-serif",  // Specifies font
      labels: [16, 17, 18.5, 25, 30, 35,40],  // Print labels at these values
      color: "#000000",  // Optional: Label text color
      fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
  }
  
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 45; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(BMI);
  var imagedata = target.toDataURL("image/png"); 
  downloadlink.href = imagedata
  getPDFBtn.style.display = "block";
});



getPDFBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  console.log("Clicked")
  let weight = document.getElementById("current_weight").value;
  let height = document.getElementById("current_height").value;
    const age = document.getElementById("current_age").value;
    const name = document.getElementById("client_name").value;
    const clientID = document.getElementById("membership_id").value;

    const BMI = weight / (height/100 * height/100);


    const docDefinition = {
      pageSize: 'A4',
      content: [
        {
          columns: [
            {
              width: 'auto',
              text: 'www.uruvamfitnesszone.in',
              fontSize: 8,
            },
            {
              width: '*',
              text: 'Uruvam Fitness Zone',
              fontSize: 16,
              alignment: 'center',
            },
            {
              width: 'auto',
              text: 'Sri MK Towers\nVeeranadhi Pirivu CRE-641047',
              fontSize: 8,
              alignment: 'right',
            },
        ],
      },
      {
        margin: [0, 20, 0, 0],
        columns: [

          {
            width: '*',
            text: 'UFZ\'S FOOD REPORT',
            fontSize: 16,
            alignment: 'center',
          },
        ],
      },
      {
        margin: [0, 10, 0, 0],
        columns: [
          [
            {
              width: 'auto',
              text: 'Client Name:',
              alignment: "left"
            },
            {
              width: '*',
              text: '',
            },
          ],
          [
            {
              width: 'auto',
              text: 'Client Id:',
              alignment: "left"
            },
            {
              width: '*',
              text: '',
              alignment: "left"
            },
          ],
        ],
      },
      {
        margin: [0, 10, 0, 0],
        columns: [
          [
            {
              width: 'auto',
              text: 'Current Weight:',
            },
            {
              width: 'auto',
              text: 'BMI',
            },
            {
              width: 'auto',
              text: 'Fat',
            },
          ],
          [
            {
              width: 'auto',
              text: '',
            },
            {
              width: 'auto',
              text: '',
            },
            {
              width: 'auto',
              text: '',
            },
          ],
        ],
      },
      {
        margin: [0, 10, 0, 0],
        columns: [
          [
            {
              width: 'auto',
              text: 'Current Height:',
            },
            {
              width: 'auto',
              text: 'Foot Energy',
            },
          ],
          [
            {
              width: 'auto',
              text: '',
            },
            {
              width: 'auto',
              text: '',
            },
          ],
        ],
      },
      {
        margin: [0, 10, 0, 0],
        text: 'Current Age\nGender',
      },
      {
        margin: [0, 10, 0, 0],
        text: 'Goal: Weight loss',
      },
      {
        margin: [0, 20, 0, 0],
        text: 'Based on your Response, we are designed your recommended food chart for you...',
      },
    ],
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

 // set actual value
// Optional: Hide datalist on outside clicks (add event listener to document and check for clicks outside the search container)

// let BMR = 10 * weight + 6.25 * height - 5 * age + 5;
