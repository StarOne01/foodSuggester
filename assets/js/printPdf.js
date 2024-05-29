
/**
 * Represents an event listener for the "getPDFBtn" button click.
 * @param {Event} e - The click event object.
 */

function fetchAndConvert(item) {
  // URL of the image you want to fetch
  
}


function printPdf(e, i) {


  e.preventDefault();
  const nameval = document.getElementById("client_name").value;
  const clientid = document.getElementById("membership_id").value;
  const PhNo = Number(document.getElementById("phone_number").value)
  console.log(goal)
  const canvasy = document.getElementById("foo");
  const imageData = canvasy.toDataURL();
  //docDefinition
  const DataDef = {
    pageSize: "A4",
    content: [
      {
        columns: [
          {
            margin: [0, -40, 0, 0],
            image: logo,
            width: 100,
            height: 100,
          },
          {
            width: "*",
            text: "Uruvam Fitness Zone",
            fontSize: 16,
            alignment: "center",
          },
          {
            width: "auto",
            text: "Sri MK Towers\nVeeranadhi Pirivu CBE-641047\nwww.uruvamfitnesszone.in",
            fontSize: 8,
            alignment: "right",
          },
        ],
      },
      {
        margin: [20, 10, 0, 0],
        columns: [

          [
            {
              width: "auto",
              text: `Name: ${nameval}`,
              alignment: "left",
            },
          ],
          [
            {
              width: "auto",
              text: `Id: ${clientid}`,
            },
          ],
        ],
      },
      {
        margin: [20, 10, 0, 0],
        columns: [
          [
            {
              width: "auto",
              text: `Current Weight: ${weight}`,
            },
          ],
          [
            {
              width: "auto",
              text: `Current height: ${height}`,
              alignment: "left",
            },
          ],
        ],
      },
      {
        margin: [20, 10, 0, 0],
        columns: [

          [
            {
              width: "auto",
              text: `Age: ${age}`,
              alignment: "left",
            },
          ],
          [
            {
              width: "auto",
              text: `Goal: ${goal}`,
            },
          ],
        ],
      },
      {
        margin: [20, 10, 0, 0],
        columns: [
          [
            {
              width: "auto",
              text: `Body Mass Index (BMI): ${BMI}`,
            },
          ],
          [
            {
              width: "auto",
              text: `Basic Metabolic Rate (BMR): ${BMR}`,
              alignment: "left",
            },
          ],
        ],
      },


      {
        margin: [20, 50, 0, 0],
        columns: [
          [
            {
              table: {
                body: [
                  [{ text: "Protein", bold: true }, `${protein}`],
                  [{ text: "Cabs", bold: true }, `${carbs}`],
                  [{ text: "fat", bold: true }, `${fat}`],
                  [{ text: "Calorie", bold: true }, `${caloriesN}`],
                ],
              },
            },
          ],
          [
            {

              margin: [0, -10, 0, 0],
              image: imageData,
              width: 200,
              height: 100,
            },
            {
              margin: [-40, 0, 0, 0],
              width: 40,
              text: `${condition}`,
              alignment: "center",
            },
          ],
        ],
      },
    ],
  };

  let ImagesPDF = {
    margin: [20, 30, 0, 0],
    columns: []
  }

  for (const img of uploadImg) {
    ImagesPDF.columns.push([
      {
        margin: [0, 20, 0, 0],
        image: img,
        height: 150,
        width: 150
      },
    ])
  };

  DataDef.content.push(ImagesPDF)

  /**
   * Represents a table of recommended food chart based on user response.
   * @type {Array<Object>}
   */
  let foodTable = [

    {
      margin: [20, 20, 0, 0],
      text: "Based on your Response, we have designed your recommended food chart for you...",
    },
    {
      margin: [0, 20, 0, 0],
      text: "",
    },
    {
      margin: 0,
      table: {
        headerRows: 1,
        widths: [55, 55, 55, 55, 55, 55, 55, 55],

        body: [
          [
            "",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          [
            {
              text: `${trTh[8].textContent}`,
              bold: true,
            },
            `${tdtrObj[trItems[1].id][0].textContent}`,
            `${tdtrObj[trItems[1].id][1].textContent}`,
            `${tdtrObj[trItems[1].id][2].textContent}`,
            `${tdtrObj[trItems[1].id][3].textContent}`,
            `${tdtrObj[trItems[1].id][4].textContent}`,
            `${tdtrObj[trItems[1].id][5].textContent}`,
            `${tdtrObj[trItems[1].id][6].textContent}`,
          ],
          [
            {
              text: `${trTh[9].textContent}`,
              bold: true,
            },
            `${tdtrObj[trItems[2].id][0].textContent}`,
            `${tdtrObj[trItems[2].id][1].textContent}`,
            `${tdtrObj[trItems[2].id][2].textContent}`,
            `${tdtrObj[trItems[2].id][3].textContent}`,
            `${tdtrObj[trItems[2].id][4].textContent}`,
            `${tdtrObj[trItems[2].id][5].textContent}`,
            `${tdtrObj[trItems[2].id][6].textContent}`,
          ],
          [
            {
              text: `${trTh[10].textContent}`,
              bold: true,
            },
            `${tdtrObj[trItems[3].id][0].textContent}`,
            `${tdtrObj[trItems[3].id][1].textContent}`,
            `${tdtrObj[trItems[3].id][2].textContent}`,
            `${tdtrObj[trItems[3].id][3].textContent}`,
            `${tdtrObj[trItems[3].id][4].textContent}`,
            `${tdtrObj[trItems[3].id][5].textContent}`,
            `${tdtrObj[trItems[3].id][6].textContent}`,
          ],
          [
            {
              text: `${trTh[11].textContent}`,
              bold: true,
            },
            `${tdtrObj[trItems[4].id][0].textContent}`,
            `${tdtrObj[trItems[4].id][1].textContent}`,
            `${tdtrObj[trItems[4].id][2].textContent}`,
            `${tdtrObj[trItems[4].id][3].textContent}`,
            `${tdtrObj[trItems[4].id][4].textContent}`,
            `${tdtrObj[trItems[4].id][5].textContent}`,
            `${tdtrObj[trItems[4].id][6].textContent}`,
          ],
          [
            {
              text: `${trTh[12].textContent}`,
              bold: true,
            },
            `${tdtrObj[trItems[5].id][0].textContent}`,
            `${tdtrObj[trItems[5].id][1].textContent}`,
            `${tdtrObj[trItems[5].id][2].textContent}`,
            `${tdtrObj[trItems[5].id][3].textContent}`,
            `${tdtrObj[trItems[5].id][4].textContent}`,
            `${tdtrObj[trItems[5].id][5].textContent}`,
            `${tdtrObj[trItems[5].id][6].textContent}`,
          ],
          [
            {
              text: `${trTh[13].textContent}`,
              bold: true,
            },
            `${tdtrObj[trItems[6].id][0].textContent}`,
            `${tdtrObj[trItems[6].id][1].textContent}`,
            `${tdtrObj[trItems[6].id][2].textContent}`,
            `${tdtrObj[trItems[6].id][3].textContent}`,
            `${tdtrObj[trItems[6].id][4].textContent}`,
            `${tdtrObj[trItems[6].id][5].textContent}`,
            `${tdtrObj[trItems[6].id][6].textContent}`,
          ],
          [
            {
              text: `${trTh[14].textContent}`,
              bold: true,
            },
            `${tdtrObj[trItems[7].id][0].textContent}`,
            `${tdtrObj[trItems[7].id][1].textContent}`,
            `${tdtrObj[trItems[7].id][2].textContent}`,
            `${tdtrObj[trItems[7].id][3].textContent}`,
            `${tdtrObj[trItems[7].id][4].textContent}`,
            `${tdtrObj[trItems[7].id][5].textContent}`,
            `${tdtrObj[trItems[7].id][6].textContent}`,
          ],
          [
            {
              text: `Total Calorie`,
              bold: true,
            },
            `${calorieCount[0]}g`,
            `${calorieCount[1]}g`,
            `${calorieCount[2]}g`,
            `${calorieCount[3]}g`, `${calorieCount[4]}g`, `${calorieCount[5]}g`, `${calorieCount[6]}g`,
          ],
          [
            {
              text: `Total Protein`,
              bold: true,
            },
            `${proteinCount[0]}g`,
            `${proteinCount[1]}g`,
            `${proteinCount[2]}g`,
            `${proteinCount[3]}g`,
            `${proteinCount[4]}g`,
            `${proteinCount[5]}g`,
            `${proteinCount[6]}g`,
          ],
          [
            {
              text: `Total fat`,
              bold: true,
            },
            `${fatCount[0]}g`,
            `${fatCount[1]}g`,
            `${fatCount[2]}g`,
            `${fatCount[3]}g`,
            `${fatCount[4]}g`,
            `${fatCount[5]}g`,
            `${fatCount[6]}g`,
          ],
          [
            {
              text: `Total Carbohydrates`,
              bold: true,
            },
            `${carbsCount[0]}g`,
            `${carbsCount[1]}g`,
            `${carbsCount[2]}g`,
            `${carbsCount[3]}g`,
            `${carbsCount[4]}g`,
            `${carbsCount[5]}g`,
            `${carbsCount[6]}g`,
          ],
        ],

      }
    }
  ];

  //widths: [85, 103, 93, 93, 93],
  let exerciseTable = [
    {
      margin: [0, 20, 0, 0],
      text: "Exercise Plan",
      style: 'header',
    },
  ];


  let DaysEx = {

    Day1: {
      margin: [0, 10, 0, 0],
      table: {
        widths: [85, 103, 93, 93, 93],
        body: [
          [
            { text: "Day 1", bold: true },
            { text: "Exercise", bold: true },
            { text: "Rep", bold: true },
            { text: "Sets", bold: true },
            { text: "Rest", bold: true },
          ],
        ],
      },
    },

    Day2: {
      margin: [0, 10, 0, 0],
      table: {
        widths: [85, 103, 93, 93, 93],
        body: [
          [
            { text: "Day 2", bold: true },
            { text: "Exercise", bold: true },
            { text: "Rep", bold: true },
            { text: "Sets", bold: true },
            { text: "Rest", bold: true },
          ],
        ],
      },
    },

    Day3: {
      margin: [0, 10, 0, 0],
      table: {
        widths: [85, 103, 93, 93, 93],
        body: [
          [
            { text: "Day 3", bold: true },
            { text: "Exercise", bold: true },
            { text: "Rep", bold: true },
            { text: "Sets", bold: true },
            { text: "Rest", bold: true },
          ],
        ],
      },
    },


    Day4: {
      margin: [0, 10, 0, 0],
      table: {
        widths: [85, 103, 93, 93, 93],
        body: [
          [
            { text: "Day 4", bold: true },
            { text: "Exercise", bold: true },
            { text: "Rep", bold: true },
            { text: "Sets", bold: true },
            { text: "Rest", bold: true },
          ],
        ],
      },
    },


    Day5: {
      margin: [0, 10, 0, 0],
      table: {
        widths: [85, 103, 93, 93, 93],
        body: [
          [
            { text: "Day 5", bold: true },
            { text: "Exercise", bold: true },
            { text: "Rep", bold: true },
            { text: "Sets", bold: true },
            { text: "Rest", bold: true },
          ],
        ],
      },
    },


    Day6: {
      margin: [0, 10, 0, 0],
      table: {
        widths: [85, 103, 93, 93, 93],
        body: [
          [
            { text: "Day 6", bold: true },
            { text: "Exercise", bold: true },
            { text: "Rep", bold: true },
            { text: "Sets", bold: true },
            { text: "Rest", bold: true },
          ],
        ],
      },
    },


    Day7: {
      margin: [0, 10, 0, 0],
      table: {
        widths: [85, 103, 93, 93, 93],
        body: [
          [
            { text: "Day 7", bold: true },
            { text: "Exercise", bold: true },
            { text: "Rep", bold: true },
            { text: "Sets", bold: true },
            { text: "Rest", bold: true },
          ],
        ],
      },
    },
  }





  for (const daysL in ExDb) {
    let jo = 0;
    for (const x in ExDb[daysL]) {
      DaysEx[daysL].table.body.push([{ text: x, bold: true }, { layout: 'lightHorizontalLines', table: { body: [] } }, { layout: 'lightHorizontalLines', table: { body: [] } }, { layout: 'lightHorizontalLines', table: { body: [] } }, { layout: 'lightHorizontalLines', table: { body: [] } }]);
      let lim = Number(document.querySelectorAll(`#${daysL}Tbl .${x}SubTd .In0`)[0].getAttribute('data-lim'));
      for (const y in ExDb.Day1[x]) {
        DaysEx[daysL].table.body[1 + jo][1].table.body.push([ExDb.Day1[x][y]])
      }
      for (let i = 0; i < lim; i++) {
        DaysEx[daysL].table.body[1 + jo][2].table.body.push([document.querySelectorAll(`#${daysL}Tbl .${x}SubTd .In${i}`)[0].value])
        DaysEx[daysL].table.body[1 + jo][3].table.body.push([document.querySelectorAll(`#${daysL}Tbl .${x}SubTd .In${i}`)[1].value])
        DaysEx[daysL].table.body[1 + jo][4].table.body.push([document.querySelectorAll(`#${daysL}Tbl .${x}SubTd .In${i}`)[2].value])

      }
      jo++;
    }

    exerciseTable.push(DaysEx[daysL]);
  }




  let remarks = [
    {
      margin: [0, 20, 0, 0],
      text: "Remarks:",

      style: 'header',
    },
    {
      margin: [0, 10, 0, 0],
      text: `${remarksTextArea.value}`,
    },
    ,
  ];

  let HIITImgs = {
    margin: [20, 30, 0, 0],
    columns: []
  }

  for (const daysL in ExDb) {
    if(ExDb[daysL].hasOwnProperty('HIIT'))
    for (const x of ExDb[daysL]['HIIT']) {
  console.log(daysL + "    -    " + x)
  item =x
  console.log(item)
  var imageUrl = "https://starone01.github.io/foodSuggester/assets/HIIT/"+item+".jpg";

  // Create a new Image object
  var img = new Image();

  // Set crossOrigin property to anonymous to allow for cross-origin requests
  img.crossOrigin = "anonymous";

  // Set the src attribute of the image to the image URL
  img.src = imageUrl;

  // Once the image is loaded, convert it to base64
  img.onload = function() {
      // Create a canvas element
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      // Get the canvas context
      var ctx = canvas.getContext('2d');

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);
      let base64ImageData=  canvas.toDataURL('image/jpeg')
      console.log("Base64 Image Data:", base64ImageData);
      // Get the base64 representation of the image
      HIITImgs.columns.push([
        {
          text: daysL
        },
        {
          margin: [0, 20, 0, 0],
          image: base64ImageData, 
          height: 150,
          width: 150
        },
      ]) // Change 'image/jpeg' to the desired format
      // Store the base64 image data in a variable or use it as needed
      let d = new Date()
let dateDb = [ d.getDate(),d.getMonth(),d.getFullYear(),d.getHours(),d.getHours(),d.getMinutes()]
let nameO = `${nameval}-${PhNo}//${nameval}-${PhNo}_${dateDb[0]}-${dateDb[1]}-${dateDb[2]}_${dateDb[3]}-${dateDb[4]}` ;
  if(i === 0 || i===2) {
  DataDef.content.push(foodTable);
  nameO += "-Diet"
  }
  if(i === 1 || i===2) {
  DataDef.content.push(exerciseTable);
  DataDef.content.push(HIITImgs);
  nameO += "-Workout"
  }
  
  DataDef.content.push(remarks);
  DataDef.styles = style;
  pdfMake.createPdf(DataDef).download(nameO);
  nameO+= '-Plan.pdf'
return [DataDef,nameO, PhNo]; 
  };

  // If there's an error loading the image
  img.onerror = function() {
      console.error("Error loading image:", imageUrl);
  };

  }
}


  let style = {
    defaultStyle: {
      fontSize: 8,
      bold: true,
    },
    header: {
      fontSize: 18,
      bold: true,
    },
  };


//    console.log(blobO)
  //  return [blobO, nameO];
};
