const userInput = document.querySelectorAll("#userInput");
const dataList = document.getElementById("itemList");
const addButton = document.getElementById("addButton");
const selectedItemsList = document.getElementById("selectedItems");
const body = document.getElementById("body");
const submitButton = document.getElementById("submitButton");
const weight = document.getElementById("current_weight");

console.log(userInput)

let height = 0;
let weight = ;
const items = [
  "Apple",
  "Avocado Pear",
  "Banana",
  "Chickoo",
  "Cherries",
   "Kappa (Tapioca)",
  "Kappa Puzhukku (Steamed Tapioca)",
  "Thengai Puli (Coconut Tamarind Curry)",
  "Manga Curry (Mango Curry)",
  "Ennai Kathirikkai (Eggplant Stir-fry)",
  "Arachuvitta Sambar (Mung Bean Lentil Stew)",
  "Karamani (Black Chana)",
  "Karamani Vadai (Black Chana Fritters)",
  "Thuvaiyal (Garlic Chutney - specific type)",
  "Vazhaikai Thoran (Banana Blossom Stir-fry)",
  "Paruppu Urundai (Lentil Balls)",
  "Avalakki (Poha - flattened rice flakes)",
  "Avalakki Bath (Poha Upma)",
  "Nei Churruttu (Ghee Dosa - Dosa with Ghee)",
  "Settu (Rice Flakes)",
  "Settu Vadai (Rice Flakes Fritters)",
  "Manathakkali Curry (Yogurt Curry)",
  "Vazhakkai Meen Curry (Banana Stem and Fish Curry)",
  "Elaneer (Tender Coconut Water)",
  "Narthangai (Citron)",
  "Narthangai Chutney (Citron Chutney)",
  "Vellulli Regai (Garlic Pickle)",
  "Inji Puli (Ginger Tamarind Chutney)",
  "Elumichai Rasam (Horse Gram Rasam)",
  "Vazhakkai Varutharuval (Fried Banana Chips)",
  "Thengai Manga Kozhambu (Coconut Mango Curry)",
  "Vadam Curry (Sun-dried Lentil Fritter Curry)",
  "Kozhukkattai with Sweet Fillings (Sweet Dumplings)",
  "Paniyaram (Savory or Sweet Fritters)",
  "Ilaneer Payasam (Tender Coconut Milk Pudding)",
  "Palada Payasam (Milk Pudding)",
  "Agar Agar Payasam (Sweet made with Agar Agar)",
  "Obbattu (Sweet Flatbread)",
  "Therattipal (Honeycomb Toffee)",
  "Mittai (Candied Fruits)",
  "Butter Chicken (North India)",
  "Dosa (South India)",
  "Biryani (various regional variations)",
  "Samosa (nationwide)",
  "Chole Bhature (Chickpea Curry with Fried Bread - North India)",
  "Dal Makhani (Black Gram Lentils with Butter - North India)",
  "Tandoori Chicken (chicken marinated and cooked in tandoor)",
  "Saag Paneer (Spinach and Cottage Cheese Curry - North India)",
  "Idli (Steamed Rice and Lentil Cakes - South India)",
  "Vada (Lentil Fritters - South India)",
  "Aloo Gobi (Potato and Cauliflower Curry)",
  "Masala Dosa (Stuffed Dosa - South India)",
  "Naan (Leavened Flatbread)",
  "Roti (Unleavened Flatbread)",
  "Pav Bhaji (Spiced Vegetable Curry with Bread Rolls - West India)",
  "Jalebi (Syrup-soaked deep-fried batter)",
  "Gulab Jamun (Milk Solid Dumplings in Syrup)",
  "Lassi (Yogurt-based drink)",
  "Filter Coffee (South India)",
  "Chicken Tikka Masala (tomato-based curry with chicken)",
  "Palak Paneer (Spinach and Paneer Curry - North India)",
  "Rajma Masala (Kidney Bean Curry)",
  "Paneer Tikka Masala (marinated paneer in creamy gravy)",
  "Chana Masala (Chickpea Curry)",
  "Dhokla (Steamed Gram Flour Cake - Gujarat)",
  "Momos (Steamed Dumplings - Himalayan region)",
  "Uttapam (Thick Dosa topped with vegetables - South India)",
  "Pongal (Lentil Rice - South India)",
  "Chicken 65 (spicy deep-fried chicken)",
  "Kulfi (Indian Ice Cream)",
  "Chettinad Chicken",
  "Meen Kulambu (Fish Curry)",
  "Elai Vada (Savory lentil cakes wrapped in leaves)",
  "Kozhukattai (Steamed rice dumplings with fillings)",
  "Seeraga Samba Rice (Rice flavored with cumin)",
  "Nei Appam (Sweet pancakes made with ghee)",
  "Thenga chutney (Coconut chutney)",
  "Milagai podi (Spice powder)",
  "Aval (Flattened rice)",
  "Murtabak (Stuffed paratha)",
  "Idiyappam (String hoppers)",
  "Appam (Rice pancakes)",
  "Jackfruit Curry",
  "Vadam (Sun-dried lentil fritters)",
  "Nei Roast (Ghee roast - a South Indian stir fry)",
  "Aval Upma (Savory dish made with flattened rice)",
  "Keerai Vadai (greens fritters)",
  "Thuvaiyal (Spicy condiment)",
  "Arisi Upma (Savory semolina porridge)",
  "Thengai Paal (Coconut milk)",
  "Manathakkali Sadham (Yogurt rice)",
  "Vazhakkai Curry (Banana blossom curry)",
  "Elumichai Thoran (Horse gram stir fry)",
  "Kadamba (Steamed lentil dumplings)",
  "Puttu (Steamed rice cake)",
  "Arcot Mutton Biryani",
  "Jigarthanda (Cold milk-based beverage with ice cream)",
  "Halwa (Indian sweet dish)",
  "Payasam (Rice pudding)",
  "Mysore Pak (Sweet made with gram flour and ghee)",
  "Atho (Savory flattened rice flakes)",
  "Ney Poo (Deep-fried flowers in batter)",
  "Thattai (Murukku - Savory deep-fried twists)",
  "Seepankizhangu Chips (Sweet potato chips)",
  "Vazhakkai Chips (Banana chips)",
  "Dates",
  "Grapes Black",
  "Guava",
  "Kiwi Fruit",
  "Lychies",
  "Mangoes",
  "Orange",
  "Orange juice",
  "Papaya",
  "Peach",
  "Pears",
  "Pineapple",
  "Plums",
  "Strawberries",
  "Watermelon",
  "Pomegranate",
  "Broccoli",
  "Brinjal",
  "Cabbage",
  "Carrot",
  "Cauliflower",
  "Fenugreek (Methi)",
  "French beans",
  "Lettuce",
  "Mushroom",
  "Onion",
  "Peas",
  "Potato",
  "Spinach (100g)",
  "Spinach (1 leaf)",
  "Tomato",
  "Tomato juice",
  "Bajra",
  "Maize flour",
  "Rice",
  "Wheat flour",
  "Chapatti",
  "White bread slice",
  "Paratha (no filling)",
  "Butter",
  "Buttermilk",
  "Cheese",
  "Cream",
  "Ghee",
  "Milk Buffalo",
  "Milk Cow",
  "Milk Skimmed",
  "Sugar (1 tbsp)",
  "Honey (1 tbsp)",
  "Coconut water (100 ml)",
  "Coffee",
  "Tea",
  "Apple (2.75\" diameter)",
  "Apple juice (1 cup)",
  "Applesauce (1 cup unsweetened)",
  "Apricot (3 medium)",
  "Blueberries (1 cup)",
  "Cantaloupe (half of 5\" diameter)",
  "Grapefruit (half)",
  "Grapes, green (1 cup)",
  "Honeydew (6.5\" wedge)",
  "Kiwi (1)",
  "Mango (4 ounces)",
  "Nectarine (1)",
  "Pea Nuts (Roasted)",
  "Beer",
  "Wine",
  "Spirits",
  "Cornflakes with milk",
  "Chocolate Biscuits",
  "Wheat Bran",
  "Chicken Biryani",
  "Mutton Biryani",
  "Vegetable Biryani",
  "Onion Bajji",
  "Eggplant Bajji",
  "Paneer Bajji",
  "Potato Bonda",
  "Medu Vada",
  "Dahi Bhalla",
  "Palak Paneer Pakora (Spinach and Paneer Fritters)",
  "Gobi Manchurian (Cauliflower in Manchurian Sauce)",
  "Aloo Tikki (Spiced Potato Patties)",
  "Samosa (Pastry with Savory Fillings)",
  "Spring Rolls (Deep-fried Vegetable Rolls)",
  "Dahi Vada (Lentil Fritters in Yogurt)",
  "Dabeli (Spicy Potato Patty in a Bun)",
  "Parle-G",
  "Marie Gold",
  "Tiger",
  "Nice Time",
  "Little Hearts",
  "Pure Magic",
  "Milk Bikis",
  "NutriChoice Digestive",
  "NutriChoice Cream",
  "Good Day",
  "Crackers",
  "Krack Jack",
  "Monaco",
  "Monaco Gluco",
  "Hide and Seek",
  "Monaco Cheese Crackers",
  "Bourbon",
  "Milkmaid",
  "Milk Powder",
  "Treat",
  "Yummies",
  "Elaichi (Cardamom)",
  "Jeera (Cumin)",
  "Glucose",
  "Fruit Slice",
  "Milk Slice",
  "Coconut Slice",
  "Khwaaja",
  "Osmania",
  "Sunfeast Dark Fantasy",
  "Dark Fantasy Choco Fills",
  "Dark Fantasy Cocoa Bliss",
  "Dark Fantasy Cashew Cookies",
  "Sunfeast Farmlite Digestive",
  "Sunfeast Mom's Magic",
  "Sunfeast Glucose Marie",
  "Sunfeast Milk Bikis",
  "Britannia NutriChoice Oat Cookies",
  "Britannia NutriChoice Choco Chip Cookies",
  "Britannia NutriChoice Digestive Biscuits (Whole Wheat)",
  "Britannia NutriChoice Digestive Biscuits (Fiber Rich)",
  "Britannia NutriChoice Cream Cracker",
  "Britannia NutriChoice Thin Arrowroot",
  "Britannia Country Harvest",
  "Britannia Milk Bikis Minis",
  "Britannia Bourbon",
  "Britannia Good Day Cashew Cookies",
  "Britannia Good Day Choco Chip Cookies",
  "Britannia Macvita Digestive",
  "Britannia Jim Jam",
  "Unibic Fruit Roll",
  "Unibic Bourbon",
  "Unibic Milk Bikis",
  "Unibic Nice Time",
  "Unibic Tiger",
  "Unibic Glucose",
  "Unibic Marie",
  "Anmol Glucose",
  "Anmol Milk Bikis",
  "Anmol Nice Time",
  "Anmol Tiger",
  "Oreo (Vanilla & Chocolate)",
  "Oreo Double Stuf",
  "Oreo Peanut Butter",
  "Hide & Seek Chocolate Chip",
  "Hide & Seek Choco Fills",
  "Hide & Seek Milk",
  "Moments (Chocolate)",

// Note: This list is not exhaustive and may not include all biscuit brands or varieties available in India.

  "Idli",
  "Sambar",
  "Dosa",
  "Uttapam",
  "Vada",
  "Pongal",
  "Thakkali Sadham (Tomato Rice)",
  "Sambar Sadham (Rice with Lentil Curry)",
  "Thengai Sadham (Coconut Rice)",
  "Milagu Sadham (Pepper Rice)",
  "Paruppu Sadham (Lentil Rice)",
  "Karuvepillai Sadham (Curry Leaves Rice)",
  "Thayir Sadham (Curd Rice)",
  "Nei Sadham (Ghee Rice)",
  "Urulai Sadham (Potato Rice)",
  "Muttaikos Sadham (Cabbage Rice)",
  "Kudaimilagai Sadham (Capsicum Rice)",
  "Kootansoru (Mixed Vegetable Rice)",
  "Kothamalli Pudina Sadham (Coriander and Mint Rice)",
  "Manga Sadham (Mango Rice)",
  "Thatta payaru arisi paruppu Sadham (Cowpea and Lentil Rice)",
  "Chicken Chettinad",
  "Banana Bonda",
  "Rasam",
  "Paper Dosa (Cone-shaped Dosa)",
  "Murukku",
  "Lemon Rice",
  "Paruppu Payasam (Lentil Pudding)",
  "Prawns Kuzhambu (Prawn Curry)"
];


submitButton.addEventListener("click", ()=> {
    var newText = document.createTextNode(height.value);
    body.appendChild(newText);
    
})

const filterOptions = (userInputValue) => {
  const filteredOptions = items.filter((item) =>
    item.toLowerCase().includes(userInputValue.toLowerCase())
  );
  return filteredOptions;
};

const showSuggestions = () => {
  const userInputValue = userInput.value;
  const filteredOptions = filterOptions(userInputValue);
  dataList.innerHTML = ""; // Clear existing options

  if (filteredOptions.length > 0) {
    filteredOptions.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      dataList.appendChild(optionElement);
    });
  }

  // Enable add button only when there's an option selected
 // addButton.disabled = userInputValue === "";
};

const addItem = (selectedItem) => {
  const listItem = document.createElement("li");
  listItem.textContent = selectedItem;
  selectedItemsList.appendChild(listItem);
  userInput.value = ""; // Clear input field after adding
  //addButton.disabled = true; // Disable button again
};

userInput.forEach(i => {
    i.addEventListener("keyup", showSuggestions)
});

dataList.addEventListener("click", (event) => {
  const clickedOption = event.target;
  if (clickedOption.tagName == "option") {
    addItem(clickedOption.value);
  }
});

function checkRadio() {
  let selectedRadio = document.querySelector('input[name="gender"]:checked').value;
  let femaleQuestion = document.getElementById("female_questions");

  console.log(selectedRadio)
  if (selectedRadio == "male") {
      femaleQuestion.style.display = "none";
  } else {
      femaleQuestion.style.display = "block";
  }
}

let gender = document.querySelectorAll('input[name="gender"]');
gender.forEach(i => {
  i.addEventListener("click",checkRadio)
});

// Optional: Hide datalist on outside clicks (add event listener to document and check for clicks outside the search container)




// BMR Calculator
let weight = 50;
let height = 171;
let age = 20;
let BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;

console.log(`Your BMR: ${BMR}`)


