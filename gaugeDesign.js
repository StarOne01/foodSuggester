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
      color: '#000000' // Fill color
    },
    staticZones: [{
      strokeStyle: "#f49797a3",
      min: 0,
      max: 16
    },
      // Red from 100 to 130
      {
        strokeStyle: "#ffaa5cb8",
        min: 16,
        max: 17,
        name:"Average"
      },
            {
        strokeStyle: "#ff9b68",
        min: 17,
        max: 18.5,
        name:"Average"
      },
      // Yellow
      {
        strokeStyle: "#35ff31",
        min: 18.5,
        max: 25
      },
      // Green
      {
        strokeStyle: "#7aff34af",
        min: 25,
        max: 30
      },
                  {
        strokeStyle: "#fff4aa",
        min: 30,
        max: 35,
        name:"Average"
      },
      // Yellow
      {
        strokeStyle: "#F03E3E",
        min: 35,
        max: 40
      },
            {
        strokeStyle: "#fc9393",
        min: 40,
        max: 45
      } // Red
    ],
    limitMax: false,
    // If false, max value increases automatically if value > maxValue
    staticLabels: {
      font: "10px sans-serif",
      // Specifies font
      labels: [16,
        17,
        18.5,
        25,
        30,
        35,
        40],
      // Print labels at these values
      color: "#000000",
      // Optional: Label text color
      fractionDigits: 0 // Optional: Numerical precision. 0=round off.
    },
    limitMin: true,
    // If true, the min value of the gauge will be fixed
    //colorStart: '#6FADCF',
    // Colors
    //colorStop: '#8FC0DA',
    strokeColor: 'cyan',
    generateGradient: true,
    highDpiSupport: true,

  };
var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); 
  gauge.setMinValue(0); 
    gauge.maxValue = 45; // set max gauge value
  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)*/
  gauge.set(0)
  
  
weightIn.addEventListener("keyup", (e)=> {
  weight = Number(e.target.value);
  })


heightIn.addEventListener("keyup", (e) => {
    height = Number(e.target.value);
    if(checkRadio() == "Male") {
      BMR = ca *(10 * weight + 6.25 * height  - 5 * age + 5)
    }
    else {
      BMR = ca *(10 * weight + 6.25 * height  - 5 * age - 161)
    }
    BMI = (Number(weight) / (Number(height) / 100 * (Number(height)) / 100)).toFixed(2)
    BMIn.textContent = `Your BMI: ${BMI}` 
    calorieN = BMR;
    fat = (calorieN/9).toFixed(2);
    carbs = (calorieN/4).toFixed(2);
    protein =  carbs;
    calorieNeeded.innerHTML = `<h5>${calorieN} Cal</h5>`;
    
    fatNeeded.innerHTML = `<h5>${fat} Cal</h5>`;
    carbNeeded.innerHTML = `<h5>${carbs} Cal</h5>`;
    
    proteinNeeded.innerHTML = `<h5>${protein} Cal</h5>`;
    BMRH.textContent = `Your BMR: ${BMR}`
    if (BMI < 45) {
            gauge.set(BMI);
     if(BMI <= 16) {
     userNature.textContent = "Severe Thinness"
   }
   else if (BMI < 18.5 && BMI > 16) {
     userNature.textContent = "Moderate Thinness"
   }
   
   else if (BMI < 25 && BMI > 18.5) {
     userNature.textContent = "Mild Thinness"
   }
   
   else if (BMI < 30 && BMI > 25) {
     userNature.textContent = "Normal"
   }
   
   else if (BMI >= 30 && BMI < 35) {
     userNature.textContent = "Slightly Overweight"
   }
     else if (BMI >= 35 && BMI < 40) {
     userNature.textContent = "Overweight"
     }
   
   else if (BMI >= 40 && BMI > 45) {
     userNature.textContent = "Obese"
   }
      
      
    }
  });


ageIn.addEventListener("keyup",(e)=> {
  age = Number(e.target.value)
})
