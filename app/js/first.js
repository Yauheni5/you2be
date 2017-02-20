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
	var divInputMobile = document.getElementById('divInputMobile');
	function openbox() {
		if (divInputMobile.style.display == 'none') {
			divInputMobile.style.display = 'flex';
		}
		else	{
			divInputMobile.style.display = 'flex';
		}
	}
	function searchFunctionMobile() {
		if (divInputMobile.style.display == 'flex') {
			var inpSearchMobile = document.getElementById('searchMobileInput').value;
			if (inpSearchMobile == '')  {
				alert(empty);
			}
			else {
	  		alert(inpSearchMobile.split(' ').reverse().join(' '));
			}
		}
		else {
			return openbox();
		}
	}
	document.getElementById('buttonSearchMobile').onclick = function () {
		openbox();
	}
	document.getElementById('buttonSearchMobile').onclick = function () {
		searchFunctionMobile();
	}
	document.getElementById('secondLineHeaderMobile').onclick = function () {
		divInputMobile.style.display = 'none';
	}
	document.getElementById('searchMobileInput').onkeypress = function (){
		if (event.keyCode == 13) searchFunctionMobile();
	}
}
