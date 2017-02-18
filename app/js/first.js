var hello = 'Мы рады видеть Вас!';
var empty = 'Пожалуйста, введите значение для поиска';

window.onload = function() {
	alert(hello);

	function searchFunction() {
		var inpSearch = document.getElementById('inputSearch').value;
		if (inpSearch == '')  {
			alert(empty);
		}
		else {
	  	alert(inpSearch);
		}
	}

	document.getElementById('buttonSearch').onclick = function () {
		searchFunction();
	}

	document.getElementById('inputSearch').onkeypress = function (){
		if (event.keyCode == 13) searchFunction();
	}
}
