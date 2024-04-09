const weightIn = document.getElementById("current_weight");
  const heightIn = document.getElementById("current_height");
  const ageIn = document.getElementById("current_age");
  const nameIn = document.getElementById("client_name");
  const clientID = document.getElementById("membership_id");
  const BMRH = document.getElementById("resultBMI");
  const userNature = document.getElementById("youAre")
  const wakeUp = document.getElementById("wakeUpI");
const breakfast = document.getElementById("breakfastI");
const morningSnack = document.getElementById("morningSnackI");
const lunch = document.getElementById("lunchI");
const eveningSnack = document.getElementById("eveningSnackI");
const dinner = document.getElementById("dinnerI");
const beforeSleep = document.getElementById("beforeSleepI");
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

const offCanvasText = document.getElementById("offcanvasText");

const selectAll = document.getElementById("Allday");
const showResultsBtn = document.getElementById("submitButton");
const BMIShow = document.getElementById("resultBMI");
let delt = [];
const Timebtn = document.getElementById("timeBtn");
let gender = document.querySelectorAll('input[name="gender"]');
let deltBtn = 0;

let getPDFBtn = document.getElementById("getPDFBtn");
