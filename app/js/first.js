//Desktop version

var hello = 'Мы рады видеть Вас!';
var empty = 'Пожалуйста, введите значение для поиска';
var hello_mobile = 'Это мобильная версия'

window.onload = function() {
	if (window.matchMedia("screen and (max-width: 768px)").matches) {
    alert(hello_mobile);
  }
  else {
  	alert(hello);
  }
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

	document.getElementById('buttonSearchMobile').onclick = function () {
		openbox('divInputMobile');
		return false;
	}
	}
	function openbox() {
		var inpSearchMobile = document.getElementById('searchMobileInput').value;
		var divInputMobile = document.getElementById('divInputMobile');

		if(divInputMobile.style.display == 'none') {
			divInputMobile.style.display = 'flex';
		}
		else {
			divInputMobile.style.display = 'none';
		}
	}


