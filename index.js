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