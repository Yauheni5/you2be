window.onload = function() {
	var hello = 'Мы рады видеть Вас!';
	var empty = 'Пожалуйста, введите значение для поиска';
	var helloMobile = 'Это мобильная версия';
	var widthScreenMax768 = window.matchMedia("screen and (max-width: 768px)").matches;

	if (widthScreenMax768) {
    alert(helloMobile);
    var divInputMobileVar = document.getElementById('divInputMobile');

    function searchFunctionMobile() {
    	var inpSearchMobile = document.getElementById('searchMobileInput').value;
			if (inpSearchMobile == '')  {
				alert(empty);
			}
			else {
	  		alert(inpSearchMobile.split(' ').reverse().join(' '));
			}
    }
    function openbox() {
    	if (divInputMobileVar.classList.contains('hide')) {
    		divInputMobileVar.classList.remove('hide');
    		divInputMobileVar.classList.add('disp-flex');
    		logoNameMobile.classList.remove('logo-name-mobile');
    		logoNameMobile.classList.add('hide');
				menuMobile.classList.add('hide');
				secondLineHeaderMobile.classList.add('background-opacity');
    	}
    	else {
    		searchFunctionMobile();
			}
		}
		function closeBox() {
			divInputMobileVar.classList.add('hide');
    	divInputMobileVar.classList.remove('disp-flex');
    	logoNameMobile.classList.add('logo-name-mobile');
    	logoNameMobile.classList.remove('hide');
			menuMobile.classList.remove('hide');
			secondLineHeaderMobile.classList.remove('background-opacity');
		}

    document.getElementById('buttonSearchMobile').onclick = function () {
    	openbox();
    }
		document.getElementById('secondLineHeaderMobile').onclick = function() {
			closeBox();
		}
		document.getElementById('searchMobileInput').onkeypress = function (){
		if (event.keyCode == 13) searchFunctionMobile();}
  }
	else {
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
		document.getElementById('buttonSearch').onclick = function() {
			searchFunction();}
		document.getElementById('inputSearch').onkeypress = function (){
		if (event.keyCode == 13) searchFunction();}
	}
}
