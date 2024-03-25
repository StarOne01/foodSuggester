function checkRadio() {
    var selectedRadio = document.querySelector('input[name="gender"]:checked');

    if (selectedRadio) {
	alert("Selected Color: " + selectedRadio.value);
    } else {
	alert("No color selected!");
    }
}

var selectedRadio = document.querySelector('input[name="gender"]');

