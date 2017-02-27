var minWidthDesktop = 769;
var divInputMobileVar = document.getElementById('divInputMobile');
var hello = 'Мы рады видеть Вас!';
var empty = 'Пожалуйста, введите значение для поиска';
var helloMobile = 'Это мобильная версия';
var divVar = document.getElementsByTagName('div');
//Общие функции и переменные
//*********************************************************************************
widthScreen();
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

	if (screenWidthVar > minWidthDesktop) desktop();
	else mobile();
}

//ФУНКЦИИ и переменные для Десктоп
function searchFunction() {
	var inpSearch = document.getElementById('inputSearch').value;

	if (inpSearch == '') alert(empty);
	else alert(inpSearch);
}

//ФУНКЦИИ и переменные для Мобильных устройств
//*********************************************************************************
function searchFunctionMobile() {
  var inpSearchMobile = document.getElementById('searchMobileInput').value;

	if (inpSearchMobile == '') alert(empty);
	else alert(inpSearchMobile.split(' ').reverse().join(' '));
}

function openbox() {
  if (divInputMobileVar.classList.contains('hide')) {
	  logoNameMobile.classList.remove('logo-name-mobile');
		divInputMobileVar.classList.remove('hide');
		divInputMobileVar.classList.add('disp-flex');
		logoNameMobile.classList.add('hide');
		menuMobile.classList.add('hide');
		secondLineHeaderMobile.classList.add('background-opacity');
  } else searchFunctionMobile();
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
//*********************************************************************************
window.onload = function() {
	widthScreen();
	//Поиск при клике на кнопку поиск(лупа)	десктопная версия
	//*********************************************************************************
	document.getElementById('buttonSearch').onclick = function() {
		searchFunction();}
	//Поиск при нажатии на Enter(клавиатура)
	//*********************************************************************************
	document.getElementById('inputSearch').onkeypress = function (){
	  if (event.keyCode == 13) searchFunction();
	}
	//Открытие поля ввода и Поиск при клике на кнопку поиск(лупа)	мобильная версия
	//*********************************************************************************
  document.getElementById('buttonSearchMobile').onclick = function () {
    openbox();
  }
	//скрытие поля ввода при клике в неактивном месте
	//*********************************************************************************
	document.getElementById('secondLineHeaderMobile').onclick = function() {
		closeBox();
	}
	//Поиск при нажатии на Enter(клавиатура) мобильная версия
	//*********************************************************************************
	document.getElementById('searchMobileInput').onkeypress = function (){
		if (event.keyCode == 13) searchFunctionMobile();
	}
	//Отслеживание изменения размера окна браузера и если это необходимо меняет Mobile-version на Desktop и наоборот
	//*********************************************************************************
	window.addEventListener("resize", function() {
		widthScreen();
	}, false);
}
