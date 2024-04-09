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


function convertTime(timeString) {
  let hours = parseInt(timeString.substring(0, 2));
  let minutes = timeString.substring(3);
  let ampm = hours >= 12 ? "PM": "AM";
  hours = hours % 12;
  hours = hours ? hours: 12; 
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
}};

let numIn = 0;

const addSelected = (e, i) => {
e.preventDefault();
if (daysForThis.size === 0) {
const toastLiveExample = document.getElementById('noDate')

const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
toastBootstrap.show()
return;
}
const selectedOption = userInput[i].value;
if (selectedOption) {
const newListItem = document.createElement("li");
newListItem.innerHTML = `${selectedOption} <button type="button" class="delt btn btn-outline-danger btn-sm">Delete</button>`;
selectedItemsList[i].appendChild(newListItem);
newListItem.setAttribute("data-in", selectedOption)
let delt = document.querySelectorAll(".delt");
delt.forEach((i) =>  {
  i.addEventListener("click", (e)=> {
    deleteItem(e.target.parentNode.getAttribute("data-in"),e.target.parentNode.parentNode.getAttribute("data-parent"),e)
    updateTable();
})
})
userInput[i].value = "";
addItem(selectedOption, newListItem.parentNode.getAttribute("data-parent"))
updateTable()
}
}

function addItem(option, time) {
  daysForThis.forEach((i) => {
    foodData[daysNum[i]][timeNum[time]].push(option)
    console.log(items.indexOf(option))
    calorieCount[daysNum[i]] += calorieCounts[items.indexOf(option)]
  })
}

function deleteItem(option, time,e) {
  daysForThis.forEach((i) => {
    const dayData = foodData[daysNum[i]][timeNum[time]]; 
    if (dayData) { 
      const index = dayData.indexOf(option);
      if (index !== -1) {
        dayData.splice(index, 1);
        console.log("Removed item from", daysNum[i], timeNum[time]);
      }
    }
    calorieCount[daysNum[i]] -= calorieCounts[items.indexOf(option)]
  });
  e.target.parentNode.remove()
}

updateTable()

function updateTable() {
  for(let i = 0; i < 7; i++) {
    for(let j = 0; j < 7;j++){
      ((tdtrObj[trItems[j+1].id])[i]).innerHTML = "";
      for(let k = 0; k < (foodData[i][j]).length; k++ ) {
        let newp = document.createElement("p");
newp.innerHTML = `${foodData[i][j][k]} , `;
      ((tdtrObj[trItems[j+1].id])[i]).appendChild(newp);
  newp.textContent = foodData[i][j][k];
      }
    }
    calorieRow[i].textContent = calorieCount[i]
  }
}