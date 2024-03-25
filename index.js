function checkRadio() {
    let selectedRadio = document.querySelector('input[name="gender"]:checked');

    if (selectedRadio) {
	alert("Selected Color: " + selectedRadio.value);
    } else {
	alert("No color selected!");
    }
}

let gender = document.querySelector('input[name="gender"]');

console.log(gender)

