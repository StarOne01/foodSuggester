window.onload = () => {
  const weightIn = document.getElementById("current_weight");
  const heightIn = document.getElementById("current_height");
  const ageIn = document.getElementById("current_age");
  const nameIn = document.getElementById("client_name");
  const clientID = document.getElementById("membership_id");



  const showResultsBtn = document.getElementById("submitButton");
  const Timebtn = document.getElementById("timeBtn");
  let getPDFBtn = document.getElementById("getPDFBtn");
  const resultsDiv = document.getElementById("results");



  let weight = 0;
  let height = 1;
  let age = 0;
  const BMIShow = document.getElementById("resultBMI");

  let opts = {
    angle: -0.2,
    // The span of the gauge arc
    lineWidth: 0.2,
    // The line thickness
    radiusScale: 1,
    // Relative radius
    pointer: {
      length: 0.6,
      // // Relative to gauge radius
      strokeWidth: 0.035,
      // The thickness
      color: "#FFFFFF", // Fill color
    },
    staticZones: [
      {
        strokeStyle: "#F03E3E",
        min: 0,
        max: 16,
      },
      // Red from 100 to 130
      {
        strokeStyle: "#FFDD00",
        min: 16,
        max: 17,
        name: "Average",
      },
      {
        strokeStyle: "#ff9b68",
        min: 17,
        max: 18.5,
        name: "Average",
      },
      // Yellow
      {
        strokeStyle: "#30B32D",
        min: 18.5,
        max: 25,
      },
      // Green
      {
        strokeStyle: "#FFDD00",
        min: 25,
        max: 30,
      },
      {
        strokeStyle: "#ff9b68",
        min: 30,
        max: 35,
        name: "Average",
      },
      // Yellow
      {
        strokeStyle: "#F03E3E",
        min: 35,
        max: 45,
      }, // Red
    ],
    limitMax: false,
    // If false, max value increases automatically if value > maxValue
    staticLabels: {
      font: "10px sans-serif",
      // Specifies font
      labels: [16, 17, 18.5, 25, 30, 35, 40],
      // Print labels at these values
      color: "#FFFFFF",
      // Optional: Label text color
      fractionDigits: 0, // Optional: Numerical precision. 0=round off.
    },
    limitMin: true,
    // If true, the min value of the gauge will be fixed
    //colorStart: '#6FADCF',
    // Colors
    //colorStop: '#8FC0DA',
    strokeColor: "#E0E0E0",
    generateGradient: true,
    highDpiSupport: true,
  };



  var target = document.getElementById("foo"); // your canvas element
  var gauge = new Gauge(target).setOptions(opts);
  gauge.setMinValue(0);
  gauge.maxValue = 45; // set max gauge value
  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)*/
  gauge.set(0);

  weightIn.addEventListener("keyup", (e) => {
    weight = Number(e.target.value);
    if (weight / (((height / 100) * height) / 100) < 45) {
      gauge.set(Number(weight / (((height / 100) * height) / 100)));
    }
  });

  heightIn.addEventListener("keyup", (e) => {
    height = Number(e.target.value);
    if (weight / (((height / 100) * height) / 100) < 45) {
      gauge.set(Number(weight / (((height / 100) * height) / 100)));
    }
    let BMI = (weight / (((height / 100) * height) / 100)).toFixed(2);
    console.log(BMI);
    BMIShow.style.display = "block";
    BMIShow.textContent = `Your BMI: ${(BMI)}`;
  });

  ageIn.addEventListener("keyup", (e) => {
    age = Number(e.target.value);
  });

  const wakeUp = document.getElementById("wakeUpI");
  const breakfast = document.getElementById("breakfastI");
  const morningSnack = document.getElementById("morningSnackI");
  const lunch = document.getElementById("lunchI");
  const eveningSnack = document.getElementById("eveningSnackI");
  const dinner = document.getElementById("dinnerI");
  const beforeSleep = document.getElementById("beforeSleepI");
  /*
const selectElements = document.querySelectorAll("select");

selectElements.forEach((i)=>
    {
	i.setAttribute("class", "form-select");
    })
*/

  const calorieRow = document.querySelectorAll("#calorieRow td");
  const days = document.querySelectorAll("input[name='day']");
  let calorieCount = [0, 0, 0, 0, 0, 0, 0];
  let foodData = [
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
  ];

  const userInput = document.querySelectorAll("input[type='search']");
  let dataList = document.getElementById("itemList");
  const addButton = document.getElementById("addButton");
  const selectedItemsList = document.getElementsByClassName("selectedItems");
  var timeInput = document.querySelectorAll("input[type='time']");

  const body = document.body;

  const trItems = document.querySelectorAll("table tr");

  const trTh = document.querySelectorAll("tr th");

  const tdtrObj = {
    wakeTr: document.querySelectorAll("#wakeTr td"),
    breakTr: document.querySelectorAll("#breakTr td"),
    snackOne: document.querySelectorAll("#snackOne td"),
    lunchTr: document.querySelectorAll("#lunchTr td"),
    snackTwo: document.querySelectorAll("#snackTwo td"),
    dinnerT: document.querySelectorAll("#dinnerT td"),
    sleepTr: document.querySelectorAll("#sleepTr td"),
  };

  const selectAll = document.getElementById("Allday");

  const daysNum = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  let daysForThis = new Set();

  let allChecked = 0;

  const CheckAll = (i) => {
    if (!allChecked && i) {
      days.forEach((j) => {
        j.checked = true;
        daysForThis.add(j.value);
        allChecked = 1;
        selectAll.checked = true;
      });
    } else {
      daysForThis = new Set();
      days.forEach((j) => {
        j.checked = false;
      });
      allChecked = 0;
      selectAll.checked = false;
    }
  };

  selectAll.addEventListener("click", () => {
    CheckAll(1);
  });
  /*
timeInput.addEventListener("change", ()=> {
  var enteredTime = timeInput.value;
  trTh[]
})
*/
  days.forEach((i) => {
    i.addEventListener("click", (e) => {
      if (!e.target.checked) {
        daysForThis.delete(e.target.value);
      } else {
        daysForThis.add(e.target.value);
      }
    });
  });

  Timebtn.addEventListener("click", (e) => {
    e.preventDefault();
    for (let k = 0; k < 7; k++) {
      trTh[8 + k].textContent = `${trTh[8 + k].id} (${convertTime(
        timeInput[k].value
      )})`;
    }
  });

  function convertTime(timeString) {
    // Function to convert 24-hour time to 12-hour format with AM/PM
    var hours = parseInt(timeString.substring(0, 2));
    var minutes = timeString.substring(3);
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    return hours + ":" + minutes + " " + ampm;
  }

  showResultsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    /*
  let p = document.createElement("p");
  p.innerHTML = `Your BMI is ${weight / (height * height)}<br>Your BMR is ${
    10 * weight + 6.25 * height - 5 * age + 5
  }`;
  body.appendChild(p);*/

    resultsDiv.style.display = "block";

    console.log(getPDFBtn);

    var imagedata = target.toDataURL("image/png");
    downloadlink.href = imagedata;
    console.log(tdtrObj[trItems[2].id][2].textContent);
  });

  getPDFBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicked");
    let weight = document.getElementById("current_weight").value;
    let height = document.getElementById("current_height").value;
    const age = document.getElementById("current_age").value;
    const name = document.getElementById("client_name").value;
    const clientID = document.getElementById("membership_id").value;

    const BMI = weight / (((height / 100) * height) / 100);

    const docDefinition = {
      pageSize: "A4",
      content: [
        {
          columns: [
            {
              width: "auto",
              text: "www.uruvamfitnesszone.in",
              fontSize: 8,
            },
            {
              width: "*",
              text: "Uruvam Fitness Zone",
              fontSize: 16,
              alignment: "center",
            },
            {
              width: "auto",
              text: "Sri MK Towers\nVeeranadhi Pirivu CRE-641047",
              fontSize: 8,
              alignment: "right",
            },
          ],
        },
        {
          margin: [0, 20, 0, 0],
          columns: [
            {
              width: "*",
              text: "UFZ'S FOOD REPORT",
              fontSize: 16,
              alignment: "center",
            },
          ],
        },
        {
          margin: [0, 10, 0, 0],
          columns: [
            [
              {
                width: "auto",
                text: `Client Name: ${name}`,
                alignment: "left",
              },
              {
                width: "*",
                text: "",
              },
            ],
            [
              {
                width: "auto",
                text: `Client Id: ${clientID}`,
                alignment: "left",
              },
              {
                width: "*",
                text: "",
                alignment: "left",
              },
            ],
          ],
        },
        {
          margin: [0, 10, 0, 0],
          columns: [
            [
              {
                width: "auto",
                text: `Current Weight: ${weight}`,
              },
              {
                width: "auto",
                text: `BMI: ${BMI}`,
              },
            ],
            [
              {
                width: "auto",
                text: "",
              },
              {
                width: "auto",
                text: "",
              },
              {
                width: "auto",
                text: "",
              },
            ],
          ],
        },
        {
          margin: [0, 10, 0, 0],
          columns: [
            [
              {
                width: "auto",
                text: `Current Height: ${height}`,
              },
            ],
            [
              {
                width: "auto",
                text: "",
              },
              {
                width: "auto",
                text: "",
              },
            ],
          ],
        },
        {
          margin: [0, 10, 0, 0],
          text: `Current Age: ${age}         Gender: ${checkRadio()}`,
        },
        {
          margin: [0, 10, 0, 0],
          text: "Goal: Weight loss",
        },
        {
          margin: [0, 20, 0, 0],
          text: "Based on your Response, we have designed your recommended food chart for you...",
        },
        {
          margin: [0, 20, 0, 0],
          text: "",
        },
        {
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
            ],

            body: [
              [
                "",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              [
                {
                  text: `${trTh[8].textContent}`,
                  bold: true,
                },
                `${tdtrObj[trItems[1].id][0].textContent}`,
                `${tdtrObj[trItems[1].id][1].textContent}`,
                `${tdtrObj[trItems[1].id][2].textContent}`,
                `${tdtrObj[trItems[1].id][3].textContent}`,
                `${tdtrObj[trItems[1].id][4].textContent}`,
                `${tdtrObj[trItems[1].id][5].textContent}`,
                `${tdtrObj[trItems[1].id][6].textContent}`,
              ],
              [
                {
                  text: `${trTh[9].textContent}`,
                  bold: true,
                },
                `${tdtrObj[trItems[2].id][0].textContent}`,
                `${tdtrObj[trItems[2].id][1].textContent}`,
                `${tdtrObj[trItems[2].id][2].textContent}`,
                `${tdtrObj[trItems[2].id][3].textContent}`,
                `${tdtrObj[trItems[2].id][4].textContent}`,
                `${tdtrObj[trItems[2].id][5].textContent}`,
                `${tdtrObj[trItems[2].id][6].textContent}`,
              ],
              [
                {
                  text: `${trTh[10].textContent}`,
                  bold: true,
                },
                `${tdtrObj[trItems[3].id][0].textContent}`,
                `${tdtrObj[trItems[3].id][1].textContent}`,
                `${tdtrObj[trItems[3].id][2].textContent}`,
                `${tdtrObj[trItems[3].id][3].textContent}`,
                `${tdtrObj[trItems[3].id][4].textContent}`,
                `${tdtrObj[trItems[3].id][5].textContent}`,
                `${tdtrObj[trItems[3].id][6].textContent}`,
              ],
              [
                {
                  text: `${trTh[11].textContent}`,
                  bold: true,
                },
                `${tdtrObj[trItems[4].id][0].textContent}`,
                `${tdtrObj[trItems[4].id][1].textContent}`,
                `${tdtrObj[trItems[4].id][2].textContent}`,
                `${tdtrObj[trItems[4].id][3].textContent}`,
                `${tdtrObj[trItems[4].id][4].textContent}`,
                `${tdtrObj[trItems[4].id][5].textContent}`,
                `${tdtrObj[trItems[4].id][6].textContent}`,
              ],
              [
                {
                  text: `${trTh[12].textContent}`,
                  bold: true,
                },
                `${tdtrObj[trItems[5].id][0].textContent}`,
                `${tdtrObj[trItems[5].id][1].textContent}`,
                `${tdtrObj[trItems[5].id][2].textContent}`,
                `${tdtrObj[trItems[5].id][3].textContent}`,
                `${tdtrObj[trItems[5].id][4].textContent}`,
                `${tdtrObj[trItems[5].id][5].textContent}`,
                `${tdtrObj[trItems[5].id][6].textContent}`,
              ],
              [
                {
                  text: `${trTh[13].textContent}`,
                  bold: true,
                },
                `${tdtrObj[trItems[6].id][0].textContent}`,
                `${tdtrObj[trItems[6].id][1].textContent}`,
                `${tdtrObj[trItems[6].id][2].textContent}`,
                `${tdtrObj[trItems[6].id][3].textContent}`,
                `${tdtrObj[trItems[6].id][4].textContent}`,
                `${tdtrObj[trItems[6].id][5].textContent}`,
                `${tdtrObj[trItems[6].id][6].textContent}`,
              ],
              [
                {
                  text: `${trTh[14].textContent}`,
                  bold: true,
                },
                `${tdtrObj[trItems[7].id][0].textContent}`,
                `${tdtrObj[trItems[7].id][1].textContent}`,
                `${tdtrObj[trItems[7].id][2].textContent}`,
                `${tdtrObj[trItems[7].id][3].textContent}`,
                `${tdtrObj[trItems[7].id][4].textContent}`,
                `${tdtrObj[trItems[7].id][5].textContent}`,
                `${tdtrObj[trItems[7].id][6].textContent}`,
              ],
              [
                {
                  text: `Total Calorie`,
                  bold: true,
                },
                calorieCount[0],
                calorieCount[1],
                calorieCount[2],
                calorieCount[3],
                calorieCount[4],
                calorieCount[5],
                calorieCount[6],
              ],
            ],
          },
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

  userInput.forEach((i) => {
    i.addEventListener("keyup", (i) => showSuggestions(i.target));
  });

  function checkRadio() {
    let selectedRadio = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    let femaleQuestion = document.getElementById("female_questions");

    console.log(selectedRadio);
    if (selectedRadio == "male") {
      femaleQuestion.style.display = "none";
      return "Male";
    } else {
      femaleQuestion.style.display = "block";
      return "Female";
    }
  }

  const addSelected = (e, i) => {
    e.preventDefault();
    console.log(daysForThis);
    if (daysForThis.size === 0) {
      const toastLiveExample = document.getElementById("noDate");

      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
      return;
    }
    const selectedOption = userInput[i].value;
    if (selectedOption) {
      const newListItem = document.createElement("li");
      newListItem.innerHTML = `${selectedOption} <button type="button" class="btn btn-outline-danger btn-sm">Delete</button> `;
      selectedItemsList[i].appendChild(newListItem);
      // Clear input field after adding
      userInput[i].value = "";
      daysForThis.forEach((j) => {
        foodData[daysNum[j]][i].push(selectedOption);
        calorieCount[daysNum[j]] +=
          calorieCounts[items.indexOf(selectedOption)];
        calorieRow[daysNum[j]].textContent = calorieCount[daysNum[j]];
        console.log(calorieCount);
        let newp = document.createElement("p");
        newp.textContent = selectedOption + ", ";
        /* console.log((tdtrObj[(trItems[i+1].id)])[daysNum[j]]);*/
        tdtrObj[trItems[i + 1].id][daysNum[j]].appendChild(newp);
      });
      CheckAll(0);
    }
  };

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
};
// set actual value
// Optional: Hide datalist on outside clicks (add event listener to document and check for clicks outside the search container)

// let BMR = 10 * weight + 6.25 * height - 5 * age + 5;
