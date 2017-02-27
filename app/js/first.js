var minWidthDesktop = 769;
function desktop(){
	mobileVersion.classList.add('hide');
	mobileVersion.classList.remove('mobile-version');
	desktopVersion.classList.remove('hide');
	desktopVersion.classList.add('desktop-version');
}
function mobile() {
	desktopVersion.classList.add('hide');
	mobileVersion.classList.add('mobile-version');
	mobileVersion.classList.remove('hide');
}
function widthScreen() {
	var screenWidthVar = window.outerWidth;
	if (screenWidthVar > minWidthDesktop) {
 		desktop();
	}
	else {
		mobile();
	}
}


widthScreen();

window.onload = function() {
	var hello = 'Мы рады видеть Вас!';
	var empty = 'Пожалуйста, введите значение для поиска';
	var helloMobile = 'Это мобильная версия';
	var divVar = document.getElementsByTagName('div');

	//ФУНКЦИИ и переменные для Десктоп
	function searchFunction() {
		var inpSearch = document.getElementById('inputSearch').value;
		if (inpSearch == '')  {
			alert(empty);
		}
		else {
		  alert(inpSearch);
		}
	}
	//ФУНКЦИИ и переменные для Мобильных устройств
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
	    logoNameMobile.classList.remove('logo-name-mobile');
	    divInputMobileVar.classList.remove('hide');
	    divInputMobileVar.classList.add('disp-flex');
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
	//События

	document.getElementById('buttonSearch').onclick = function() {
		searchFunction();}

	document.getElementById('inputSearch').onkeypress = function (){
	  if (event.keyCode == 13) searchFunction();
	}

  document.getElementById('buttonSearchMobile').onclick = function () {
    openbox();
  }

	document.getElementById('secondLineHeaderMobile').onclick = function() {
		closeBox();
	}

	document.getElementById('searchMobileInput').onkeypress = function (){
		if (event.keyCode == 13) searchFunctionMobile();
	}

	window.addEventListener("resize", function() {
		widthScreen();
	}, false);
}
