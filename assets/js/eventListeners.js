wakeUp.addEventListener("click", (e) => addSelected(e, 0));
breakfast.addEventListener("click", (e) => addSelected(e, 1));
morningSnack.addEventListener("click", (e) => addSelected(e, 2));
lunch.addEventListener("click", (e) => addSelected(e, 3));
eveningSnack.addEventListener("click", (e) => addSelected(e, 4));
dinner.addEventListener("click", (e) => addSelected(e, 5));
beforeSleep.addEventListener("click", (e) => addSelected(e, 6));


orderLi.forEach(i => {
  i.addEventListener("click", (e) => {
    if(WorkOfTheDay.has(e.target.textContent)) {
        e.target.classList.remove("selected")
        WorkOfTheDay.delete(e.target.textContent)
        if(e.target.textContent === "Rest") {
          isRest = false;
        }
        return;
    }
    if(!isRest) {
      WorkOfTheDay.add(e.target.textContent)
      console.log(WorkOfTheDay)
       e.target.classList.add("selected");
    }
    if (e.target.textContent === "Rest") {
      isRest = true
      orderLi.forEach(j =>{
        j.classList.remove("selected")
      } )
        e.target.classList.add("selected");
      WorkOfTheDay = new Set()
        WorkOfTheDay.add(e.target.textContent)
        console.log(WorkOfTheDay)
  }
  }
      );
      
})


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



setOrderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let  order = document.getElementsByClassName("selected")
  if(WorkOfTheDay.has("Rest")) {
    return;
  }
  if (Exdays.size === 0) {
    toastBody.textContent = "Select alteast a day";
    toastBootstrap.show();
    return;
  }
          Exdays.forEach(Selecteday => {
         document.getElementById(`${Selecteday}Tbl`).innerHTML=`           <tr class="table-dark">
              <th>
              ${Selecteday}
              </th>
              <th>Exercise</th>
              <th>Rep</th>
              <th>Set</th>
              <th>Rest</th>
            </tr>`
        })
        exEnteries.innerHTML=""
  for (let i = 0; i < order.length; i++) {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `<label for="'${order[i].textContent.split(" ").join("")}">${order[i].textContent}</label><br />
  <label>Varience:</label><input id="${order[i].textContent.split(" ").join("")}Var" type="number" class="varient">        <button class="btn btn-outline-secondary btn-sm VarBtn" id="${order[i].textContent.split(" ").join("")}VarBtn">
          Set Varience
        </button><br>
        <input
          type="search"
          list="itemListEx"
          id='${order[i].textContent.split(" ").join("")}'
          placeholder="Search items..."
        />

        <button class="btn btn-outline-secondary btn-sm" id="">
          Add Exercise
        </button>
        <br />
        <ul class="selectedItemsEx"></ul><br>`
        exEnteries.appendChild(newDiv)
        VarBtn = document.querySelectorAll(".VarBtn")
        
        
        document.getElementById(`${order[i].textContent.split(" ").join("")}VarBtn`).addEventListener("click", (e)=>{
          
    e.preventDefault()
    
    Exdays.forEach(Selecteday => {
      console.log(`${Selecteday}Tbl`)

     console.log()
     for(let j = 0; j < 4; j++) {
       const newTd = document.createElement('td')
       let htm = ""
    htm = "<table border='2'>"
     for(let g = 0; g < Number(document.getElementById(`${order[i].textContent.split(" ").join("")}Var`).value) ;g++) {
            
     htm += "<tr><td>Cell</td></tr>"
     
     }
     htm+= "</table>"
     newTd.innerHTML = htm
     console.log(`${e.target.id.substring(0,e.target.id.length-6)}Tr`)
    document.querySelector(`#${Selecteday}Tbl #${e.target.id.substring(0,e.target.id.length-6)}Tr`).appendChild(newTd);
     }
      
    
})
  })
        
        
        

            Exdays.forEach(Selecteday => {
        const newTr = document.createElement('tr');
        newTr.innerHTML = `<td>${order[i].textContent}</td>
`;
    document.getElementById(`${Selecteday}Tbl`).appendChild(newTr)
    newTr.setAttribute("id", `${order[i].textContent.split(" ").join("")}Tr`)
        })
  }
})



DayExChks.forEach((i) => {
  i.addEventListener("click", (e) => {
    if(allCheckedEx) {
      AlldayEx.checked = false;
      allCheckedEx = 0;
      }
    if (e.target.checked) {
      Exdays.add(e.target.id);
    } else {
      Exdays.delete(e.target.id);
    }

  console.log(Exdays)
  });
});


AlldayEx.addEventListener("click",CheckAllEx)
