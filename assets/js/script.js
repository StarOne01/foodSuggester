const CheckAll = () => {
  daysForThis = new Set()
    if(allChecked === 0){
      selectAll.checked = true;
      allChecked = 1;
      days.forEach((j) => {
        j.checked = true;
        daysForThis.add(j.value);
      });
    }
    else {
      selectAll.checked = false;
      allChecked = 0;
      days.forEach((j) => {
        j.checked = false;
      });
    }

  console.log(daysForThis)
};

const CheckAllEx = () => {
  Exdays = new Set()
  console.log("In Exx")
    if(allCheckedEx === 0){
      AlldayEx.checked = true;
      allCheckedEx = 1;
      DayExChks.forEach((j) => {
        j.checked = true;
        Exdays.add(j.id);
      });
    }
    else {
      AlldayEx.checked = false;
      allCheckedEx = 0;
      DayExChks.forEach((j) => {
        j.checked = false;
      });
    }

  
};
AlldayEx.addEventListener("click",CheckAllEx)

function convertTime(timeString) {
  let hours = parseInt(timeString.substring(0, 2));
  let minutes = timeString.substring(3);
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return hours + ":" + minutes + " " + ampm;
}

const filterOptions = (userInputValue) => {
  const filteredOptions = items.filter((item) =>
    item.toLowerCase().includes(userInputValue.toLowerCase())
  );
  return filteredOptions;
};

const sortableList = Sortable.create(document.getElementById("my-list"), {
  ghostClass: 'dragging',
  animation: 150
});

const showSuggestions = (i) => {
  const userInputValue = i.value;
  const filteredOptions = filterOptions(userInputValue);
  dataList.innerHTML = "";

  if (filteredOptions.length > 0) {
    filteredOptions.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      dataList.appendChild(optionElement);
    });
  }
}

let numIn = 0;
const addSelected = (e, i) => {
  e.preventDefault();
  if (daysForThis.size === 0) {
    toastBody.textContent = "Select alteast a day";
    toastBootstrap.show();
    return;
  }
  const selectedOption = userInput[i].value;
      const inde = items.indexOf(selectedOption);
  if (selectedOption) {
    
    if(inde === -1) {
      toastBody.textContent = "Please select items from the dropdown";
      toastBootstrap.show();
      return;
    }
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `${selectedOption} <button type="button" class="delt btn btn-outline-danger btn-sm">Delete</button>`;
    selectedItemsList[i].appendChild(newListItem);
    newListItem.setAttribute("data-in", selectedOption);
    let delt = document.querySelectorAll(".delt");
    delt.forEach((i) => {
      i.addEventListener("click", (e) => {
        deleteItem(
          e.target.parentNode.getAttribute("data-in"),
          e.target.parentNode.parentNode.getAttribute("data-parent"),
          e
        );
        updateTable();
      });
    });
    userInput[i].value = "";
    addItem(selectedOption, newListItem.parentNode.getAttribute("data-parent"));
    updateTable();
  }
};

function addItem(option, time) {
  daysForThis.forEach((i) => {
    
        const inde = items.indexOf(option);
    foodData[daysNum[i]][timeNum[time]].push(option);
    console.log(calorieCount[daysNum[i]] + calorieCounts[inde])
    calorieCount[daysNum[i]] = (Number(calorieCount[daysNum[i]]) + Number(calorieCounts[inde])).toFixed(2);
    fatCount[daysNum[i]] = (Number(fatCount[daysNum[i]]) + Number(fatCounts[option])).toFixed(2);
    proteinCount[daysNum[i]] = (Number(proteinCount[daysNum[i]]) + Number(proteinCounts[option])).toFixed(2);
    carbsCount[daysNum[i]] = (Number(carbsCount[daysNum[i]]) + Number(carbohydrateCounts[option])).toFixed(2);
  });
}

function deleteItem(option, time, e) {
  daysForThis.forEach((i) => {
    const dayData = foodData[daysNum[i]][timeNum[time]];
    if (dayData) {
      const index = dayData.indexOf(option);
      if (index !== -1) {
        dayData.splice(index, 1);
      }
      else {
        return;
      }
    }
    let inde = items.indexOf(option);
    calorieCount[daysNum[i]] = (Number(calorieCount[daysNum[i]]) - Number(calorieCounts[inde])).toFixed(2);
    fatCount[daysNum[i]] = (Number(fatCount[daysNum[i]]) - Number(fatCounts[option])).toFixed(2);
    proteinCount[daysNum[i]] = (Number(proteinCount[daysNum[i]]) - Number(proteinCounts[option])).toFixed(2);
    carbsCount[daysNum[i]] = (Number(carbsCount[daysNum[i]]) - Number(carbohydrateCounts[option])).toFixed(2);
  });
  e.target.parentNode.remove();
}

updateTable();

function updateTable() {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      tdtrObj[trItems[j + 1].id][i].innerHTML = "";
      for (let k = 0; k < foodData[i][j].length; k++) {
        let newp = document.createElement("p");
        newp.innerHTML = `${foodData[i][j][k]} , `;
        tdtrObj[trItems[j + 1].id][i].appendChild(newp);
      }
    }
    fatRow[i].textContent = `${fatCount[i]}     (${fat})`;
    proteinRow[i].textContent = `${proteinCount[i]}     (${protein})`;
    carbRow[i].textContent = `${carbsCount[i]}     (${carbs})`;
    calorieRow[i].textContent = `${calorieCount[i]}     (${caloriesN})`;
  }
}
