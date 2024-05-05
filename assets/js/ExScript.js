const CheckAllEx = () => {
  Exdays = new Set();
  console.log("In Exx");
  if (allCheckedEx === 0) {
    AlldayEx.checked = true;
    allCheckedEx = 1;
    DayExChks.forEach((j) => {
      j.checked = true;
      Exdays.add(j.id);
    });
  } else {
    AlldayEx.checked = false;
    allCheckedEx = 0;
    DayExChks.forEach((j) => {
      j.checked = false;
    });
  }
};

const sortableList = Sortable.create(document.getElementById("my-list"), {
  ghostClass: "dragging",
  animation: 150,
});

const filterOptionsEx = (userInputValueEx, targ) => {
  const filteredOptionsEx = exSessions[targ + "M"].filter((item) =>
    item.toLowerCase().includes(userInputValueEx.toLowerCase())
  );
  return filteredOptionsEx;
};

const showSuggestionsEx = (i) => {
  if (i.id === "HIIT") {
    return;
  }
  const userInputValue = i.value;
  const filteredOptions = filterOptionsEx(userInputValue, i.id);
  dataListEx.innerHTML = "";

  if (filteredOptions.length > 0) {
    filteredOptions.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      dataListEx.appendChild(optionElement);
    });
  }
};

const addInput = (e) => {

  for(const Selecteday of Exdays) {
    if (ExDb[Selecteday][`${e.target.id.substring(0, e.target.id.length - 3)}`].length >
  Number(
    e.target.value
  )
) {
  toastBody.textContent = "The existing number of exercises is greater than the variance set, Please delete some exercises";
  toastBootstrap.show();
  return;
}
    document.querySelector(
      `#${Selecteday}Tbl #${e.target.id.substring(0, e.target.id.length - 3)}Tr`
    ).innerHTML = "";
    
  };

  Exdays.forEach((Selecteday) => {

      const newTd = document.createElement("td");
      const newTdTime = document.createElement("td"); 
      newTdTime.innerHTML = `${e.target.id.substring(0, e.target.id.length - 3)}`
      let htm = "";
      htm = `<table id="${e.target.id.substring(0, e.target.id.length - 3)}TblR" width='100%'>`;
      console.log(`id="${e.target.id.substring(0, e.target.id.length - 3)}TblR"`);
      /*
     for(let g = 0;  ;g++) {
            
     htm += "<tr><td>Cell</td></tr>"
     
     }*/

      htm += "</table>";
      newTd.innerHTML = htm;
      document
      .querySelector(
        `#${Selecteday}Tbl #${e.target.id.substring(0, e.target.id.length - 3)}Tr`
      )
      .appendChild(newTdTime);
      document
        .querySelector(
          `#${Selecteday}Tbl #${e.target.id.substring(0, e.target.id.length - 3)}Tr`
        )
        .appendChild(newTd);
        ExDb[Selecteday][`${e.target.id.substring(0, e.target.id.length - 3)}`].forEach((fo) => {
          const newTr = document.createElement("tr");
          newTr.innerHTML = `<td>${fo}</td>`;
  
          document
            .querySelector(
              `#${Selecteday}Tbl #${e.target.id.substring(0, e.target.id.length - 3)}TblR`
            ).appendChild(newTr);
          });
    for (let lea = 0; lea < 3; lea++) {
      let htm1 = "";
      htm1 = `<table width='100%'>`;
      for (let j = 0; j < e.target.value; j++) {
        htm1 += `<input class='In${j}' style='margin:10px;' type='text'/>`;
      }

      htm1 += "</table>";
      const newTd1 = document.createElement("td");
      newTd1.innerHTML = htm1;
      document
        .querySelector(
          `#${Selecteday}Tbl #${e.target.id.substring(0, e.target.id.length - 3)}Tr`
        )
        .appendChild(newTd1);
    }

  });
};

const addSelectedEx = (e) => {
  e.preventDefault();
  if (`${e.target.id.substring(0, e.target.id.length - 3)}` === "HIIT") {
    return;
  }
  const selectedOption = document.getElementById(
    `${e.target.id.substring(0, e.target.id.length - 3)}`
  ).value;
  document.getElementById(
    `${e.target.id.substring(0, e.target.id.length - 3)}`
  ).value = "";
  for (const da of setDays) {
    if (
      document.getElementById(
        `${e.target.id.substring(0, e.target.id.length - 3)}Var`
      ).value === ""
    ) {
      toastBody.textContent = "Enter Varience before adding exercise";
      toastBootstrap.show();
      return;
    }
    if (
      ExDb[da][`${e.target.id.substring(0, e.target.id.length - 3)}`].length >=
      Number(
        document.getElementById(
          `${e.target.id.substring(0, e.target.id.length - 3)}Var`
        ).value
      )
    ) {
      toastBody.textContent = "Reached Varience limit";
      toastBootstrap.show();
      return;
    }

    if (
      ExDb[da][`${e.target.id.substring(0, e.target.id.length - 3)}`].indexOf(
        selectedOption
      ) !== -1
    ) {
      toastBody.textContent = "Um.. Again the Same Exercise ?";
      toastBootstrap.show();
      return;
    }
  }

  const newListItem = document.createElement("li");
  newListItem.innerHTML = `${selectedOption} <button id="${e.target.id.substring(
    0,
    e.target.id.length - 3
  )}${selectedOption.split(" ").join("")}" data-type="${e.target.id.substring(
    0,
    e.target.id.length - 3
  )}" data-item="${selectedOption}" type="button" class="delet btn btn-outline-danger btn-sm">Delete</button>`;
  document
    .getElementById(`${e.target.id.substring(0, e.target.id.length - 3)}Ul`)
    .appendChild(newListItem);
  setDays.forEach((da) => {
    ExDb[da][`${e.target.id.substring(0, e.target.id.length - 3)}`].push(
      selectedOption
    );
    console.log(ExDb);
    document.querySelector(
      `#${da}Tbl #${e.target.id.substring(0, e.target.id.length - 3)}TblR`
    ).innerHTML = "";
    ExDb[da][`${e.target.id.substring(0, e.target.id.length - 3)}`].forEach(
      (fo) => {
        const newTr = document.createElement("tr");
        newTr.innerHTML = `<td>${fo}</td>`;

        document
          .querySelector(
            `#${da}Tbl #${e.target.id.substring(0, e.target.id.length - 3)}TblR`
          )
          .appendChild(newTr);

        newTr.classList.add(
          `${e.target.id.substring(0, e.target.id.length - 3)}${selectedOption
            .split(" ")
            .join("")}`
        );

        console.log(
          `${e.target.id.substring(0, e.target.id.length - 3)}${selectedOption
            .split(" ")
            .join("")}`
        );
      }
    );
  });
  let delet = document.querySelectorAll(".delet");

  delet.forEach((i) => {
    i.addEventListener("click", (e) => {
      setDays.forEach((da) => {
        let delinde = ExDb[da][e.target.getAttribute("data-type")].indexOf(
          e.target.getAttribute("data-item")
        );
        if (delinde !== -1) {
          ExDb[da][e.target.getAttribute("data-type")].splice(delinde, 1);
        }

        document.querySelector(
          `#${da}Tbl #${e.target.getAttribute("data-type")}TblR`
        ).innerHTML = "";
        ExDb[da][`${e.target.getAttribute("data-type")}`].forEach((fo) => {
          const newTr = document.createElement("tr");
          newTr.innerHTML = `<td>${fo}</td>`;

          document
            .querySelector(
              `#${da}Tbl #${e.target.getAttribute("data-type")}TblR`
            )
            .appendChild(newTr);
        });
      });
      e.target.parentNode.remove();
    });
  });
};
