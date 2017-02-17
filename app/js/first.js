var hello = 'Мы рады видеть Вас!';
var empty = 'Пожалуйста, введите значение для поиска';
var inpSearch = document.getElementById('inputSearch').value;

window.onload = function() {
	alert(hello);
	document.getElementById('buttonSearch').onclick = function() {
		if (inpSearch == '') {
			alert(empty);
		}
		else {
	  	alert(inpSearch);
		}
	}
}


