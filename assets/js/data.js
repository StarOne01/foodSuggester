

/**
 * This file contains variables and data structures used in the foodSuggester application.
 * 
 * @file FILEPATH: /home/StarBoy/Code/Projects/Official/foodSuggester/assets/js/data.js
 * @summary Contains variables and data structures for the foodSuggester application.
 * @since 0.0.1
 */
let weight = 0;
let height = 0;
let age = 0;
let BMI = 0;
let ca = 1;
let isRest = false;
let carbs = 0;
let redVal = 0;
let WorkOfTheDay = [];
let protein = 0;
let condition = "";
let fat = 0;
let caloriesN = 0;

let listBefore = {Wakeup: []}

let uploadImg = []

let UpImgNo = 0

let Exdays = new Set();

let NoOfImgs = 0;

let fatCount = [0, 0, 0, 0, 0, 0, 0];
let carbsCount = [0, 0, 0, 0, 0, 0, 0];
let proteinCount = [0, 0, 0, 0, 0, 0, 0];
let calorieCount = [0, 0, 0, 0, 0, 0, 0];

let calorieTableDb = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],

];

let proteinTableDb = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],

];

let carbsTableDb = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],

];

let fatTableDb = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],

];

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

const tdtrObjData = {
  WakeupData: document.querySelectorAll("#WakeupData td"),
  Meal1Data: document.querySelectorAll("#Meal1Data td"),
  Snack1Data: document.querySelectorAll("#Snack1Data td"),
  Meal2Data: document.querySelectorAll("#Meal2Data td"),
  Snack2Data: document.querySelectorAll("#Snack2Data td"),
  Meal3Data: document.querySelectorAll("#Meal3Data td"),
  SleepData: document.querySelectorAll("#SleepData td"),
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
let diff = new Set();
let setDays = [];
let ExDb = {};
let ExDataDB = {};

let BMR = 0;

DayExChks.forEach((i) => {
  ExDb[i.id] = {};
});

let daysForThis = new Set();

let allChecked = 0;
let delt = [];
let allCheckedEx = 0;