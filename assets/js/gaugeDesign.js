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
    color: "#00e7ac", // Fill color
  },
  staticZones: [
    {
      strokeStyle: "#f49797a3",
      min: 0,
      max: 16,
    },
    // Red from 100 to 130
    {
      strokeStyle: "#ffaa5cb8",
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
      strokeStyle: "#35ff31",
      min: 18.5,
      max: 25,
    },
    // Green
    {
      strokeStyle: "#7aff34af",
      min: 25,
      max: 30,
    },
    {
      strokeStyle: "#fff4aa",
      min: 30,
      max: 35,
      name: "Average",
    },
    // Yellow
    {
      strokeStyle: "#F03E3E",
      min: 35,
      max: 40,
    },
    {
      strokeStyle: "#fc9393",
      min: 40,
      max: 45,
    }, // Red
  ],
  limitMax: true,
  // If false, max value increases automatically if value > maxValue
  staticLabels: {
    font: "10px sans-serif",
    // Specifies font
    labels: [16, 17, 18.5, 25, 30, 35, 40],
    // Print labels at these values
    color: "#41ffb3",
    // Optional: Label text color
    fractionDigits: 0, // Optional: Numerical precision. 0=round off.
  },
  limitMin: true,
  // If true, the min value of the gauge will be fixed
  //colorStart: '#6FADCF',
  // Colors
  //colorStop: '#8FC0DA',
  strokeColor: "#ffffff",
  generateGradient: true,
  highDpiSupport: true,
};

var target = document.getElementById("foo");

var gauge = new Gauge(target).setOptions(opts);
gauge.setMinValue(0);
gauge.maxValue = 45;
gauge.animationSpeed = 32;
gauge.set(0);

weightIn.addEventListener("keyup", (e) => {
  weight = Number(e.target.value);
});

const BMIfunc = (e) => {
  if (checkRadio() == "Male") {
    BMR = ca * (10 * weight + 6.25 * height - 5 * age + 5);
  } else {
    BMR = ca * (10 * weight + 6.25 * height - 5 * age - 161);
  }
  BMI = Number(
    Number(weight) / (((Number(height) / 100) * Number(height)) / 100)
  ).toFixed(2);
  caloriesN = Number(redVal + Number(BMR)).toFixed(2);
  console.log(caloriesN);
  console.log("Here");
  BMIn.textContent = `Your BMI: ${BMI}`;
  fat = ((0.3 * caloriesN) / 9).toFixed(2);
  carbs = ((0.5 * caloriesN) / 4).toFixed(2);
  protein = ((0.2 * caloriesN) / 4).toFixed(2);
  calorieNeeded.innerHTML = `<h5>${BMR}g</h5>`;
  acutalCal.innerHTML = `<h5>${caloriesN}g</h5>`;
  fatNeeded.innerHTML = `<h5>${fat}g</h5>`;
  carbNeeded.innerHTML = `<h5>${carbs}g</h5>`;

  proteinNeeded.innerHTML = `<h5>${protein}g</h5>`;
  BMR = caloriesN;
  BMRH.textContent = `Your BMR: ${BMR}`;
  gauge.set(BMI);
  if (BMI <= 16) {
    userNature.textContent = "Severe Thinness";
    condition = "Severe Thinness";
  } else if (BMI < 18.5 && BMI > 16) {
    userNature.textContent = "Moderate Thinness";
    condition = "Moderate Thinness";
  } else if (BMI < 25 && BMI >= 18.5) {
    userNature.textContent = "Mild Thinness";
    condition = "Mild Thinness";
  } else if (BMI < 30 && BMI >= 25) {
    userNature.textContent = "Normal";
    condition = "Normal";
  } else if (BMI >= 30 && BMI < 35) {
    userNature.textContent = "Slightly Overweight";
    condition = "Overweight - Slightly";
  } else if (BMI >= 35 && BMI < 40) {
    userNature.textContent = "Overweight";
    condition = "Overweight";
  } else if (BMI >= 40 && BMI > 45) {
    userNature.textContent = "Obese";
    condition = "Obese";
  }
};
heightIn.addEventListener("keyup", (e) => {
  height = Number(e.target.value);
  BMIfunc(e);
});

ageIn.addEventListener("keyup", (e) => {
  age = Number(e.target.value);
});
