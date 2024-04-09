getPDFBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  let weight = document.getElementById("current_weight").value;
  let height = document.getElementById("current_height").value;
  const age = document.getElementById("current_age").value;
  const name = document.getElementById("client_name").value;
  const clientID = document.getElementById("membership_id").value;

  const BMI = weight / (height/100 * height/100);
const canvasy = document.getElementById("foo");
const imageData = canvasy.toDataURL("image/png");
  const docDefinition = {
    pageSize: 'A4',
    content: [{
      columns: [{
        width: 'auto',
        image: imageData,
      },
        {
          width: '*',
          text: 'Uruvam Fitness Zone',
          fontSize: 16,
          alignment: 'center',
        },
        {
          width: 'auto',
          text: 'Sri MK Towers\nVeeranadhi Pirivu CRE-641047\nwww.uruvamfitnesszone.in',
          fontSize: 8,
          alignment: 'right',
        },
      ],
    },
      {
        margin: [0,
          20,
          0,
          0],
        columns: [{
          width: '*',
          text: 'UFZ\'S FOOD REPORT',
          fontSize: 16,
          alignment: 'center',
        },
        ],
      },
      {
        margin: [0,
          10,
          0,
          0],
        columns: [
          [{
            width: 'auto',
            text: `Client Name: ${name}`,
            alignment: "left"
          },
            {
              width: '*',
              text: '',
            },
          ],
          [{
            width: 'auto',
            text: `Client Id: ${clientID}`,
            alignment: "left"
          },
            {
              width: '*',
              text: '',
              alignment: "left"
            },
          ],
        ],
      },
      {
        margin: [0,
          10,
          0,
          0],
        columns: [
          [{
            width: 'auto',
            text: `Current Weight: ${weight}`,
          },
            {
              width: 'auto',
              text: `BMI: ${BMI}`,
            },
          ],
          [{
            width: 'auto',
            text: '',
          },
            {
              width: 'auto',
              text: '',
            },
            {
              width: 'auto',
              text: '',
            },
          ],
        ],
      },
      {
        margin: [0,
          10,
          0,
          0],
        columns: [
          [{
            width: 'auto',
            text: `Current Height: ${height}`,
          },
          ],
          [{
            width: 'auto',
            text: '',
          },
            {
              width: 'auto',
              text: '',
            },
          ],
        ],
      },
      {
        margin: [0,
          10,
          0,
          0],
        text: `Current Age: ${age}         Gender: ${checkRadio()}`,
      },
      {
        margin: [0,
          10,
          0,
          0],
        text: 'Goal: Weight loss',
      },
      {
        margin: [0,
          20,
          0,
          0],
        text: 'Based on your Response, we have designed your recommended food chart for you...',
      },
      {
        margin: [0,
          20,
          0,
          0],
        text: '',
      },
      {

        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: ['auto',
            'auto',
            'auto',
            'auto',
            'auto',
            'auto',
            'auto',
            'auto'],

          body: [
            ['',
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'],
            [ {
              text: `${trTh[8].textContent}`,
              bold: true
            },
              `${((tdtrObj[trItems[1].id])[0]).textContent}`,
              `${((tdtrObj[trItems[1].id])[1]).textContent}`,
              `${((tdtrObj[trItems[1].id])[2]).textContent}`,
              `${((tdtrObj[trItems[1].id])[3]).textContent}`,
              `${((tdtrObj[trItems[1].id])[4]).textContent}`,
              `${((tdtrObj[trItems[1].id])[5]).textContent}`,
              `${((tdtrObj[trItems[1].id])[6]).textContent}`],
            [ {
              text: `${trTh[9].textContent}`,
              bold: true
            },
              `${((tdtrObj[trItems[2].id])[0]).textContent}`,
              `${((tdtrObj[trItems[2].id])[1]).textContent}`,
              `${((tdtrObj[trItems[2].id])[2]).textContent}`,
              `${((tdtrObj[trItems[2].id])[3]).textContent}`,
              `${((tdtrObj[trItems[2].id])[4]).textContent}`,
              `${((tdtrObj[trItems[2].id])[5]).textContent}`,
              `${((tdtrObj[trItems[2].id])[6]).textContent}`],
            [ {
              text: `${trTh[10].textContent}`,
              bold: true
            },
              `${((tdtrObj[trItems[3].id])[0]).textContent}`,
              `${((tdtrObj[trItems[3].id])[1]).textContent}`,
              `${((tdtrObj[trItems[3].id])[2]).textContent}`,
              `${((tdtrObj[trItems[3].id])[3]).textContent}`,
              `${((tdtrObj[trItems[3].id])[4]).textContent}`,
              `${((tdtrObj[trItems[3].id])[5]).textContent}`,
              `${((tdtrObj[trItems[3].id])[6]).textContent}`],
            [ {
              text: `${trTh[11].textContent}`,
              bold: true
            },
              `${((tdtrObj[trItems[4].id])[0]).textContent}`,
              `${((tdtrObj[trItems[4].id])[1]).textContent}`,
              `${((tdtrObj[trItems[4].id])[2]).textContent}`,
              `${((tdtrObj[trItems[4].id])[3]).textContent}`,
              `${((tdtrObj[trItems[4].id])[4]).textContent}`,
              `${((tdtrObj[trItems[4].id])[5]).textContent}`,
              `${((tdtrObj[trItems[4].id])[6]).textContent}`],
            [ {
              text: `${trTh[12].textContent}`,
              bold: true
            },
              `${((tdtrObj[trItems[5].id])[0]).textContent}`,
              `${((tdtrObj[trItems[5].id])[1]).textContent}`,
              `${((tdtrObj[trItems[5].id])[2]).textContent}`,
              `${((tdtrObj[trItems[5].id])[3]).textContent}`,
              `${((tdtrObj[trItems[5].id])[4]).textContent}`,
              `${((tdtrObj[trItems[5].id])[5]).textContent}`,
              `${((tdtrObj[trItems[5].id])[6]).textContent}`],
            [ {
              text: `${trTh[13].textContent}`,
              bold: true
            },
              `${((tdtrObj[trItems[6].id])[0]).textContent}`,
              `${((tdtrObj[trItems[6].id])[1]).textContent}`,
              `${((tdtrObj[trItems[6].id])[2]).textContent}`,
              `${((tdtrObj[trItems[6].id])[3]).textContent}`,
              `${((tdtrObj[trItems[6].id])[4]).textContent}`,
              `${((tdtrObj[trItems[6].id])[5]).textContent}`,
              `${((tdtrObj[trItems[6].id])[6]).textContent}`],
            [ {
              text: `${trTh[14].textContent}`,
              bold: true
            },
              `${((tdtrObj[trItems[7].id])[0]).textContent}`,
              `${((tdtrObj[trItems[7].id])[1]).textContent}`,
              `${((tdtrObj[trItems[7].id])[2]).textContent}`,
            `${((tdtrObj[trItems[7].id])[3]).textContent}`,
            `${((tdtrObj[trItems[7].id])[4]).textContent}`,
            `${((tdtrObj[trItems[7].id])[5]).textContent}`,
            `${((tdtrObj[trItems[7].id])[6]).textContent}`],
          [{
            text: `Total Calorie`,
            bold: true
          },
            calorieCount[0],
            calorieCount[1],
            calorieCount[2],
            calorieCount[3],
            calorieCount[4],
            calorieCount[5],
            calorieCount[6]]
        ]
      }
    },
  ],
};

  pdfMake.createPdf(docDefinition).open();
});