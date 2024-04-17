let weight = 0;
let height = 0;
let age = 0;
let BMI = 0;
let ca = 1;
let carbs = 0;
let redVal = 0;
let WorkOfTheDay = []
let protein = 0;
let condition = "";
let fat = 0;
let caloriesN = 0;

let fatCount = [0, 0, 0, 0, 0, 0, 0];
let carbsCount = [0, 0, 0, 0, 0, 0, 0];
let proteinCount = [0, 0, 0, 0, 0, 0, 0];
let calorieCount = [0, 0, 0, 0, 0, 0, 0];

let foodData = [
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
];

const tdtrObj = {
  wakeTr: document.querySelectorAll("#wakeTr td"),
  breakTr: document.querySelectorAll("#breakTr td"),
  snackOne: document.querySelectorAll("#snackOne td"),
  lunchTr: document.querySelectorAll("#lunchTr td"),
  snackTwo: document.querySelectorAll("#snackTwo td"),
  dinnerT: document.querySelectorAll("#dinnerT td"),
  sleepTr: document.querySelectorAll("#sleepTr td"),
  calorieRow: document.querySelectorAll("#calorieRow td"),
};

const daysNum = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const timeNum = {
  wakeTr: 0,
  breakTr: 1,
  snackOne: 2,
  lunchTr: 3,
  snackTwo: 4,
  dinnerT: 5,
  sleepTr: 6,
};

let BMR = 0;

let daysForThis = new Set();

let allChecked = 0;
