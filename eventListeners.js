wakeUp.addEventListener("click", (e) => addSelected(e, 0));
breakfast.addEventListener("click", (e) => addSelected(e, 1));
morningSnack.addEventListener("click", (e) => addSelected(e, 2));
lunch.addEventListener("click", (e) => addSelected(e, 3));
eveningSnack.addEventListener("click", (e) => addSelected(e, 4));
dinner.addEventListener("click", (e) => addSelected(e, 5));
beforeSleep.addEventListener("click", (e) => addSelected(e, 6));
  
const checkRadio = () => {
let selectedRadio = document.querySelector('input[name="gender"]:checked').value;
let femaleQuestion = document.getElementById("female_questions");

if (selectedRadio == "male") {
femaleQuestion.style.display = "none";
return "Male";
} else {
femaleQuestion.style.display = "block";
return "Female";
}
}

ageIn.addEventListener("click", ()=> {
  age = ageIn.value
})

gender.forEach((i) => {
i.addEventListener("click", checkRadio);
});

selectAll.addEventListener("click", ()=> {
  CheckAll(1);
});

userInput.forEach((i) => {
i.addEventListener("keyup", (i) =>{ showSuggestions(i.target)
});
});

days.forEach((i)=> {
  i.addEventListener("click", (e)=> {
    if (!e.target.checked) {
      daysForThis.delete(e.target.value);
    } else {
      daysForThis.add(e.target.value);
    }
  }
  )});
  
  Timebtn.addEventListener("click", (e)=> {
  e.preventDefault();
  for (let k = 0; k < 7; k++) {
    trTh[8+k].textContent = `${trTh[8+k].id} (${convertTime(timeInput[k].value)})`;
  }});
  let last = 1;
  cactivity.addEventListener("change", (i) => {
    BMR /=last
    ca = Number(e.cactivity.value);
    BMR *= ca
    last = ca;
    
  })