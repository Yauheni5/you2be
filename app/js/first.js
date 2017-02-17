var hello = 'Мы рады видеть Вас!';
var empty = 'Пожалуйста, введите значение для поиска';

window.onload = function() {
	alert(hello);

	document.getElementById('buttonSearch').onclick = function() {
		var inpSearch = document.getElementById('inputSearch').value;
		if (inpSearch == '')  {
			alert(empty);
		}
		else {
	  	alert(inpSearch);
		}
	}

	document.getElementById('inputSearch').onkeypress = function() {
		if (event.keyCode == 13) {
			var inpSearch = document.getElementById('inputSearch').value;
			if (inpSearch == '') {
				alert(empty);
			}
			else {
				alert(inpSearch);
			}
		}
	}
}
