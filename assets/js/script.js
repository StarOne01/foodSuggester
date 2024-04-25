const CheckAll = () => {
  daysForThis = new Set();
  if (allChecked === 0) {
    selectAll.checked = true;
    allChecked = 1;
    days.forEach((j) => {
      j.checked = true;
      daysForThis.add(j.value);
    });
  } else {
    selectAll.checked = false;
    allChecked = 0;
    days.forEach((j) => {
      j.checked = false;
    });
  }

  console.log(daysForThis);
};

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
};

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
    if (inde === -1) {
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
    calorieTableDb[daysNum[i]][timeNum[time]] = (Number(calorieTableDb[daysNum[i]][timeNum[time]]) + Number(calorieCounts[inde])).toFixed(2);
    proteinTableDb[daysNum[i]][timeNum[time]] = (Number(proteinTableDb[daysNum[i]][timeNum[time]]) + Number(proteinCounts[option])).toFixed(2);
    carbsTableDb[daysNum[i]][timeNum[time]] = (Number(carbsTableDb[daysNum[i]][timeNum[time]]) + Number(carbohydrateCounts[option])).toFixed(2);
    fatTableDb[daysNum[i]][timeNum[time]] = (Number(fatTableDb[daysNum[i]][timeNum[time]]) + Number(fatCounts[option])).toFixed(2);


    calorieCount[daysNum[i]] = (
      Number(calorieCount[daysNum[i]]) + Number(calorieCounts[inde])
    ).toFixed(2);
    fatCount[daysNum[i]] = (
      Number(fatCount[daysNum[i]]) + Number(fatCounts[option])
    ).toFixed(2);
    proteinCount[daysNum[i]] = (
      Number(proteinCount[daysNum[i]]) + Number(proteinCounts[option])
    ).toFixed(2);
    carbsCount[daysNum[i]] = (
      Number(carbsCount[daysNum[i]]) + Number(carbohydrateCounts[option])
    ).toFixed(2);
  });
}

function deleteItem(option, time, e) {
  daysForThis.forEach((i) => {
    const dayData = foodData[daysNum[i]][timeNum[time]];
    if (dayData) {
      const index = dayData.indexOf(option);
      if (index !== -1) {
        dayData.splice(index, 1);
      } else {
        return;
      }
    }
    let inde = items.indexOf(option);
    calorieTableDb[daysNum[i]][timeNum[time]] = (Number(calorieTableDb[daysNum[i]][timeNum[time]]) - Number(calorieCounts[inde])).toFixed(2);
    proteinTableDb[daysNum[i]][timeNum[time]] = (Number(proteinTableDb[daysNum[i]][timeNum[time]]) - Number(proteinCounts[option])).toFixed(2);
    carbsTableDb[daysNum[i]][timeNum[time]] = (Number(carbsTableDb[daysNum[i]][timeNum[time]]) - Number(carbohydrateCounts[option])).toFixed(2);
    fatTableDb[daysNum[i]][timeNum[time]] = (Number(fatTableDb[daysNum[i]][timeNum[time]]) - Number(fatCounts[option])).toFixed(2);

    calorieCount[daysNum[i]] = (
      Number(calorieCount[daysNum[i]]) - Number(calorieCounts[inde])
    ).toFixed(2);
    fatCount[daysNum[i]] = (
      Number(fatCount[daysNum[i]]) - Number(fatCounts[option])
    ).toFixed(2);
    proteinCount[daysNum[i]] = (
      Number(proteinCount[daysNum[i]]) - Number(proteinCounts[option])
    ).toFixed(2);
    carbsCount[daysNum[i]] = (
      Number(carbsCount[daysNum[i]]) - Number(carbohydrateCounts[option])
    ).toFixed(2);
  });
  e.target.parentNode.remove();
}

updateTable();

function updateTable() {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (j < 6) {
        tdtrObjData[trItemsData[i + 1].id][j].innerHTML = `<span class='0'>Calories: ${((Number(calorieTableDb[j][i])/Number(caloriesN)) * 100).toFixed(2)}%</span> <br><span class='1'>Protein: ${((Number(proteinTableDb[j][i])/Number(protein)) * 100).toFixed(2)}%</span> <br><span class='2'>Carbs: ${((Number(carbsTableDb[j][i])/Number(carbs)) * 100).toFixed(2)}%</span> <br><span class='3'>Fat: ${((Number(fatTableDb[j][i])/Number(fat)) * 100).toFixed(2)}% </span> `;
        if (trItemsData[i + 1].id === "WakeupData" || trItemsData[i + 1].id === "SleepData") {
        if(calorieTableDb[j][i] > (caloriesN * 0.02) && calorieTableDb[j][i] < (caloriesN * 0.03)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("0")[0].style.color = "#2AFA3B";
        }
        if(proteinTableDb[j][i] > (protein * 0.02) && proteinTableDb[j][i] < (protein * 0.03)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("1")[0].style.color = "#2AFA3B";
        }
        if(carbsTableDb[j][i] > (carbs * 0.02) && carbsTableDb[j][i] < (carbs * 0.03)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("2")[0].style.color = "#2AFA3B";
        }
        if(fatTableDb[j][i] > (fat * 0.02) && fatTableDb[j][i] < (fat * 0.03)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("3")[0].style.color = "#2AFA3B";
        }

        if(calorieTableDb[j][i] > (caloriesN * 0.03)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("0")[0].style.color = "#FA2A2A";
        }
        if(proteinTableDb[j][i] > (protein * 0.03)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("1")[0].style.color = "#FA2A2A";
        }
        if(carbsTableDb[j][i] > (carbs * 0.03)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("2")[0].style.color = "#FA2A2A";
        }
        if(fatTableDb[j][i] > (fat * 0.03)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("3")[0].style.color = "#FA2A2A";
        }
      }

      if (trItemsData[i + 1].id === "Meal1Data" || trItemsData[i + 1].id === "Meal2Data" || trItemsData[i + 1].id === "Meal3Data") {
        if(calorieTableDb[j][i] > (caloriesN * 0.2) && calorieTableDb[j][i] < (caloriesN * 0.3)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("0")[0].style.color = "#2AFA3B";
        }
        if(proteinTableDb[j][i] > (protein * 0.2) && proteinTableDb[j][i] < (protein * 0.3)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("1")[0].style.color = "#2AFA3B";
        }
        if(carbsTableDb[j][i] > (carbs * 0.2) && carbsTableDb[j][i] < (carbs * 0.3)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("2")[0].style.color = "#2AFA3B";
        }
        if(fatTableDb[j][i] > (fat * 0.2) && fatTableDb[j][i] < (fat * 0.3)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("3")[0].style.color = "#2AFA3B";
        }

        if(calorieTableDb[j][i] > (caloriesN * 0.3)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("0")[0].style.color = "#FA2A2A";
        }
        if(proteinTableDb[j][i] > (protein * 0.3)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("1")[0].style.color = "#FA2A2A";
        }
        if(carbsTableDb[j][i] > (carbs * 0.3)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("2")[0].style.color = "#FA2A2A";
        }
        if(fatTableDb[j][i] > (fat * 0.3)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("3")[0].style.color = "#FA2A2A";
        }
      }


      if (trItemsData[i + 1].id === "Snack1Data" || trItemsData[i + 1].id === "Snack2Data") {
        if(calorieTableDb[j][i] > (caloriesN * 0.05) && calorieTableDb[j][i] < (caloriesN * 0.12)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("0")[0].style.color = "#2AFA3B";
        }
        if(proteinTableDb[j][i] > (protein * 0.05) && proteinTableDb[j][i] < (protein * 0.12)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("1")[0].style.color = "#2AFA3B";
        }
        if(carbsTableDb[j][i] > (carbs * 0.05) && carbsTableDb[j][i] < (carbs * 0.12)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("2")[0].style.color = "#2AFA3B";
        }
        if(fatTableDb[j][i] > (fat * 0.05) && fatTableDb[j][i] < (fat * 0.12)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("3")[0].style.color = "#2AFA3B";
        }

        if(calorieTableDb[j][i] > (caloriesN * 0.12)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("0")[0].style.color = "#FA2A2A";
        }
        if(proteinTableDb[j][i] > (protein * 0.12)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("1")[0].style.color = "#FA2A2A";
        }
        if(carbsTableDb[j][i] > (carbs * 0.12)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("2")[0].style.color = "#FA2A2A";
        }
        if(fatTableDb[j][i] > (fat * 0.12)) {
          tdtrObjData[trItemsData[i + 1].id][j].style.color = "black";
          tdtrObjData[trItemsData[i + 1].id][j].getElementsByClassName("3")[0].style.color = "#FA2A2A";
        }
      }

      }
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
