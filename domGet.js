const weightIn = document.getElementById("current_weight");
  const heightIn = document.getElementById("current_height");
  const ageIn = document.getElementById("current_age");
  const BMRH = document.getElementById("resultBMR");
  const userNature = document.getElementById("youAre")
  const wakeUp = document.getElementById("wakeUpI");
  const fatNeeded = document.getElementById("fatNeeded")
  const carbNeeded = document.getElementById("carbNeeded")
  const BMRTable = document.getElementById("BMRTable")
  const proteinNeeded = document.getElementById("proteinNeeded")
  const calorieNeeded = document.getElementById("calorieNeeded")
  const goals = document.getElementById("goal")
const breakfast = document.getElementById("breakfastI");
const morningSnack = document.getElementById("morningSnackI");
const lunch = document.getElementById("lunchI");
const fatRow = document.querySelectorAll("#fatRow td")
const proteinRow = document.querySelectorAll('#proteinRow td');
const carbRow = document.querySelectorAll("#carbRow td");
const eveningSnack = document.getElementById("eveningSnackI");
const dinner = document.getElementById("dinnerI");
const beforeSleep = document.getElementById("beforeSleepI");
const cactivity = document.getElementById("cactivity")
const calorieRow = document.querySelectorAll("#calorieRow td")
const days = document.querySelectorAll("input[name='day']");
const userInput = document.querySelectorAll("input[type='search']");
let dataList = document.getElementById("itemList");
const addButton = document.getElementById("addButton");
const selectedItemsList = document.getElementsByClassName("selectedItems");
var timeInput = document.querySelectorAll("input[type='time']");
const body = document.body;

const trItems = document.querySelectorAll("#foodTable tr");

const trTh = document.querySelectorAll("tr th");

const selectAll = document.getElementById("Allday");
const showResultsBtn = document.getElementById("sutButton");
const BMIn = document.getElementById("resultBMI");
let delt = [];
const Timebtn = document.getElementById("timeBtn");
let gender = document.querySelectorAll('input[name="gender"]');
let deltBtn = 0;

let getPDFBtn = document.getElementById("getPDFBtn");
const ctx = foo.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(20, 20, 150, 100);