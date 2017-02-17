var hello = 'Мы рады видеть Вас!';
var empty = 'Пожалуйста, введите значение для поиска';


window.onload = function() {
	alert(hello);
	document.getElementById('buttonSearch').onclick = function() {
		if (document.getElementById('inputSearch').value == '') {
			alert(empty);
		}
		else {
	  	alert(document.getElementById('inputSearch').value);
		}
	}
}


