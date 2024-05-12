
/**
 * This file contains event listeners for various elements in the application.
 * It handles click events, change events, and keyup events for different elements.
 * The event listeners perform various actions such as adding selected items, updating display, and handling user input.
 * @file FILEPATH: /home/StarBoy/Code/Projects/Official/foodSuggester/assets/js/eventListeners.js
 */
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
      e.target.classList.add("selected");
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


let goal = '';

goals.addEventListener("change", (e) => {

 goal = e.target.value;
  console.log(goal);
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
      .join("")}" '>${order[i].textContent}</label><br />
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
    document.getElementById(`${order[i].textContent.split(" ").join("")}Var`).addEventListener("change", (e)=> addInput(e));
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
      htm += "</table>";
      newTd.innerHTML = htm;
      document
        .querySelector(
          `#${Selecteday}Tbl #${order[i].textContent.split(" ").join("")}Tr`
        )
        .appendChild(newTd);

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

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = reject;
  });
}

let FileIds = ['UpOneId', 'UpTwoId', 'UpThreeId']
async function handleImageUpload(event, i) {
  let label = document.getElementById (FileIds[i]);
  label.innerHTML = (i+1) + ') Please wait, Compressing... <br> '
  const imageFile = event.target.files[0];
  console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  const options = {
    maxSizeMB: 0.6,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }
  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
    blobToBase64(compressedFile)
  .then(base64String => {
    console.log("Base64 encoded image:", base64String);
    uploadImg[i] = base64String;
    // Use the base64String for further processing (e.g., display, send to server)
  })

  label.innerHTML = (i+1) + ') Ready to Generate PDF<br>'
    console.log(uploadImg[i])
  } catch (error) {
    console.log(error);
  }

}

fileInputs.forEach(ele  =>{
  ele.addEventListener('change', (e) => {
    const selectedFiles = event.target.files;
  console.log(selectedFiles)
  })
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

