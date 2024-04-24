const weightIn = document.getElementById("current_weight");
const heightIn = document.getElementById("current_height");
const ageIn = document.getElementById("current_age");
const toastLiveExample = document.getElementById("noDate");
const AlldayEx = document.getElementById("AlldayEx");
const DayExChks = document.querySelectorAll("input[name='dayEx']");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

const toastBody = document.getElementById("toastBody");
const BMRH = document.getElementById("resultBMR");
const userNature = document.getElementById("youAre");
const wakeUp = document.getElementById("wakeUpI");
const fatNeeded = document.getElementById("fatNeeded");
const exEnteries = document.getElementById("exEnteries");
const carbNeeded = document.getElementById("carbNeeded");
const BMRTable = document.getElementById("BMRTable");
const proteinNeeded = document.getElementById("proteinNeeded");
const ExTblTr = document.querySelectorAll(".ExTbl tr");
const ExTbl = document.querySelectorAll(".ExTbl");
let orderLi = document.querySelectorAll("#my-list li");
const setOrderBtn = document.getElementById("setOrder");

const calorieNeeded = document.getElementById("calorieNeeded");
const goals = document.getElementById("goal");
const breakfast = document.getElementById("breakfastI");
const morningSnack = document.getElementById("morningSnackI");
const lunch = document.getElementById("lunchI");
const fatRow = document.querySelectorAll("#fatRow td");
const proteinRow = document.querySelectorAll("#proteinRow td");
const carbRow = document.querySelectorAll("#carbRow td");
const eveningSnack = document.getElementById("eveningSnackI");
const dinner = document.getElementById("dinnerI");
const beforeSleep = document.getElementById("beforeSleepI");
const cactivity = document.getElementById("cactivity");
const calorieRow = document.querySelectorAll("#calorieRow td");
const days = document.querySelectorAll("input[name='day']");
const userInput = document.querySelectorAll("[list='itemList']");
const userInputEx = document.querySelectorAll("[list='itemListEx']");

const detailedInfo = document.querySelectorAll("input[name='detailedInfo']");
const detailedForm = document.getElementById("detailedForm");
let dataList = document.getElementById("itemList");
let dataListEx = document.getElementById("itemListEx");
const addButton = document.getElementById("addButton");
const selectedItemsEx = document.getElementsByClassName("selectedItemsEx");
const selectedItemsList = document.getElementsByClassName("selectedItems");
var timeInput = document.querySelectorAll("input[type='time']");
const body = document.body;

const trItems = document.querySelectorAll("#foodTable tr");

const trTh = document.querySelectorAll("tr th");

const selectAll = document.getElementById("Allday");
const BMIn = document.getElementById("resultBMI");
const Timebtn = document.getElementById("timeBtn");
let gender = document.querySelectorAll('input[name="gender"]');
let deltBtn = 0;
const acutalCal = document.getElementById("aCalorieNeeded");
let getPDFBtn = document.getElementById("getPDFBtn");

const DataTable = document.getElementById("DataTable")
const WakeupData = document.getElementById("WakeupData")
const Meal1Data = document.getElementById("Meal1Data")
const Snack1Data =document.getElementById("Snack1Data")
const Meal2Data = document.getElementById("")
