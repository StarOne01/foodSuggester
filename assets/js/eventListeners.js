wakeUp.addEventListener("click", (e) => addSelected(e, 0));
breakfast.addEventListener("click", (e) => addSelected(e, 1));
morningSnack.addEventListener("click", (e) => addSelected(e, 2));
lunch.addEventListener("click", (e) => addSelected(e, 3));
eveningSnack.addEventListener("click", (e) => addSelected(e, 4));
dinner.addEventListener("click", (e) => addSelected(e, 5));
beforeSleep.addEventListener("click", (e) => addSelected(e, 6));

orderLi.forEach((i) => {
  i.addEventListener("click", (e) => {
    const indexOfele = WorkOfTheDay.indexOf(e.target.textContent);
    if (indexOfele >= 0) {
      e.target.classList.remove("selected");
      const indexToDelete = WorkOfTheDay.indexOf(e.target.textContent);
      if (indexToDelete !== -1) {
        WorkOfTheDay.splice(indexToDelete, 1);
      }
      if (e.target.textContent === "Rest") {
        isRest = false;
      }
      return;
    }
    if (!isRest) {
      WorkOfTheDay.push(e.target.textContent);
      e.target.classList.add("selected");
    }
    if (e.target.textContent === "Rest") {
      isRest = true;
      orderLi.forEach((j) => {
        j.classList.remove("selected");
      });
      e.target.classList.push("selected");
      WorkOfTheDay = [];
      WorkOfTheDay.push(e.target.textContent);
    }
  });
});

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
  j.addEventListener("click", () => {
    let selectedRadio = document.querySelector(
      'input[name="detailedInfo"]:checked'
    ).value;
    if (selectedRadio == "yes") {
      detailedForm.style.display = "block";
    } else {
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
    if (allChecked) {
      selectAll.checked = false;
      allChecked = 0;
    }
    if (e.target.checked) {
      daysForThis.add(e.target.value);
    } else {
      daysForThis.delete(e.target.value);
    }

    console.log(daysForThis);
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
  BMIfunc(e);
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

  let order = document.getElementsByClassName("selected");
  const indexOfele = WorkOfTheDay.indexOf("Rest");
  if (indexOfele >= 0) {
    return;
  }
  if (Exdays.size === 0) {
    toastBody.textContent = "Select alteast a day";
    toastBootstrap.show();
    return;
  }
  setDays = Exdays;
  Exdays.forEach((Selecteday) => {
    document.getElementById(
      `${Selecteday}Tbl`
    ).innerHTML = `           <tr class="table-dark">
              <th>
              ${Selecteday}
              </th>
              <th>Exercise</th>
              <th>Rep</th>
              <th>Set</th>
              <th>Rest</th>
            </tr>`;
  });
  exEnteries.innerHTML = "";

  let orderId = [];

  for (let i = 0; i < order.length; i++) {
    orderId.push(`${order[i].textContent.split(" ").join("")}`);
  }
  Exdays.forEach((da) => {
    console.log("Keys");
    console.log(Object.keys(ExDb[da]));
    for (const x in ExDb[da]) {
      console.log("x " + x);
      if (ExDb[da][x].length > 0) {
        if (orderId.indexOf(x) === -1) {
          ExDb[da][x] = [];
        }
      }
    }
  });

  for (let i = 0; i < order.length; i++) {
    Exdays.forEach((Selecteday) => {
      const newTr = document.createElement("tr");
      if (
        !ExDb[Selecteday].hasOwnProperty(
          `${order[i].textContent.split(" ").join("")}`
        )
      ) {
        ExDb[Selecteday][`${order[i].textContent.split(" ").join("")}`] = [];
      }
      newTr.innerHTML = `<td id="${order[i].textContent
        .split(" ")
        .join("")}Td">${order[i].textContent}</td>
`;
      document.getElementById(`${Selecteday}Tbl`).appendChild(newTr);
      newTr.setAttribute("id", `${order[i].textContent.split(" ").join("")}Tr`);
    });
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<label for="${order[i].textContent
      .split(" ")
      .join("")}">${order[i].textContent}</label><br />
  <label>Varience:</label>
  <input id="${order[i].textContent
    .split(" ")
    .join("")}Var" type="number" class="varient"> <br>
        <input
          type="search"
          list="itemListEx"
          id='${order[i].textContent.split(" ").join("")}'
          placeholder="Search items..."
        />

        <button class="btn btn-outline-secondary btn-sm" id="${order[
          i
        ].textContent
          .split(" ")
          .join("")}Add">
          Add Exercise
        </button>
        <br />
        <ul id="${order[i].textContent
          .split(" ")
          .join("")}Ul" class="selectedItemsEx"></ul><br>`;
    exEnteries.appendChild(newDiv);
    VarBtn = document.querySelectorAll(".VarBtn");
    document
      .getElementById(`${order[i].textContent.split(" ").join("")}Add`)
      .addEventListener("click", addSelectedEx);
    const userInputEx = document.querySelectorAll("[list='itemListEx']");
    console.log(userInputEx);
    userInputEx.forEach((j) => {
      j.addEventListener("keyup", (k) => {
        showSuggestionsEx(k.target);
      });
    });

    Exdays.forEach((Selecteday) => {
      console.log(`${Selecteday}Tbl`);

      const newTd = document.createElement("td");
      let htm = "";
      htm = `<table id="${order[i].textContent
        .split(" ")
        .join("")}TblR" width='100%'>`;
      console.log(`id="${order[i].textContent.split(" ").join("")}TblR"`);
      /*
     for(let g = 0;  ;g++) {
            
     htm += "<tr><td>Cell</td></tr>"
     
     }*/

      htm += "</table>";
      newTd.innerHTML = htm;
      document
        .querySelector(
          `#${Selecteday}Tbl #${order[i].textContent.split(" ").join("")}Tr`
        )
        .appendChild(newTd);
      for (let lea = 0; lea < 3; lea++) {
        const newTd1 = document.createElement("td");
        let htm1 = "";
        htm1 = `<table width='100%'>`;
        htm1 += "</table>";
        newTd1.innerHTML = htm1;
        document
          .querySelector(
            `#${Selecteday}Tbl #${order[i].textContent.split(" ").join("")}Tr`
          )
          .appendChild(newTd1);
        newTd1.setAttribute("contenteditable", "true");
      }
    });

    Exdays.forEach((da) => {
      document.querySelector(
        `#${da}Tbl #${order[i].textContent.split(" ").join("")}TblR`
      ).innerHTML = "";
      console.log(ExDb);
      ExDb[da][`${order[i].textContent.split(" ").join("")}`].forEach((fo) => {
        const newTr = document.createElement("tr");
        newTr.innerHTML = `<td>${fo}</td>`;

        document
          .querySelector(
            `#${da}Tbl #${order[i].textContent.split(" ").join("")}TblR`
          )
          .appendChild(newTr);
      });
    });
  }
});

DayExChks.forEach((i) => {
  i.addEventListener("click", (e) => {
    if (allCheckedEx) {
      AlldayEx.checked = false;
      allCheckedEx = 0;
    }
    if (e.target.checked) {
      Exdays.add(e.target.id);
    } else {
      Exdays.delete(e.target.id);
    }

    console.log(Exdays);
  });
});

AlldayEx.addEventListener("click", CheckAllEx);
