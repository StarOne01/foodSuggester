wakeUp.addEventListener("click", (e) => addSelected(e, 0));
breakfast.addEventListener("click", (e) => addSelected(e, 1));
morningSnack.addEventListener("click", (e) => addSelected(e, 2));
lunch.addEventListener("click", (e) => addSelected(e, 3));
eveningSnack.addEventListener("click", (e) => addSelected(e, 4));
dinner.addEventListener("click", (e) => addSelected(e, 5));
beforeSleep.addEventListener("click", (e) => addSelected(e, 6));

const checkRadio = () => {
  let selectedRadio = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  let femaleQuestion = document.getElementById("female_questions");

  if (selectedRadio == "male") {
    femaleQuestion.style.display = "none";
    return "Male";
  } else {
    femaleQuestion.style.display = "block";
    return "Female";
  }
};

ageIn.addEventListener("click", () => {
  age = ageIn.value;
});

gender.forEach((i) => {
  i.addEventListener("click", checkRadio);
});

detailedInfo.forEach((j) => {
  j.addEventListener("click", ()=> {
     let selectedRadio = document.querySelector(
    'input[name="detailedInfo"]:checked'
  ).value;
  if(selectedRadio == "yes") {
    detailedForm.style.display = "block";
  }
  else {
    detailedForm.style.display = "none";
  }
  });
});

selectAll.addEventListener("click", () => {
  CheckAll();
  
});

userInput.forEach((i) => {
  i.addEventListener("keyup", (i) => {
    showSuggestions(i.target);
  });
});

days.forEach((i) => {
  i.addEventListener("click", (e) => {
    if(allChecked) {
      selectAll.checked = false;
      allChecked = 0;
      }
    if (e.target.checked) {
      daysForThis.add(e.target.value);
    } else {
      daysForThis.delete(e.target.value);
    }

  console.log(daysForThis)
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

goals.addEventListener("change", (e) => {
  let goal = e.target.value;
  if (goal === "weight_loss" || goal === "fat_loss") {
   
    redVal = -500;
  } else if (goal === "weight_gain") {
    
    redVal = 500;
  } else if (goal === "clean_bulking") {
    caloriesN = caloriesN + 200;
    redVal = 200;
  } else if (goal === "bikini") {
 
    redVal = -600;
  }
  console.log("Trig")
  BMIfunc(e)
});

let last = 1;
cactivity.addEventListener("change", (e) => {
  BMR = (BMR / last).toFixed(1);
  ca = Number(e.target.value);
  BMR *= ca;
  last = ca;
});
