function calc() {
	var a = parseInt(document.querySelector('#number1').value);
	var b = parseInt(document.querySelector('#number2').value);
	var op = document.querySelector('#operation').value;
	var calc;

	if (op == 'add') {
		calc = a + b;
	} else if (op == 'min') {
		calc = a - b;
	} else if (op == 'mul') {
		calc = a * b;
	} else if (op == 'div') {
		calc = a / b;
	}

	if (isNaN(calc)) {
		document.querySelector('#result').innerHTML = 'You must insert numbers you stupid...';
	} else {
		document.querySelector('#result').innerHTML = calc;
	}
}