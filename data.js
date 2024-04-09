let weight = 0;
let height = 1;
let age = 0;
let BMI = 0;

let calorieCount = [0, 0, 0, 0, 0, 0, 0]
let foodData = [[[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []]];




const tdtrObj = {
  "wakeTr": document.querySelectorAll("#wakeTr td"),
  "breakTr": document.querySelectorAll("#breakTr td"),
  "snackOne": document.querySelectorAll("#snackOne td"),
  "lunchTr": document.querySelectorAll("#lunchTr td"),
  "snackTwo": document.querySelectorAll("#snackTwo td"),
  "dinnerT": document.querySelectorAll("#dinnerT td"),
  "sleepTr": document.querySelectorAll("#sleepTr td"),
  "calorieRow":document.querySelectorAll("#calorieRow td")
};


const daysNum = {
  "Sunday": 0,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6
};

const timeNum = {
  "wakeTr": 0,
  "breakTr": 1,
  "snackOne": 2,
  "lunchTr": 3,
  "snackTwo": 4,
  "dinnerT": 5,
  "sleepTr": 6
};


let daysForThis = new Set();

let allChecked = 0;
