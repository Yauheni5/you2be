var minWidthDesktop = 769;
var hello = 'Мы рады видеть Вас!';
var empty = 'Пожалуйста, введите значение для поиска';
var helloMobile = 'Это мобильная версия';
var divVar = document.getElementsByTagName('div');
var divInputMobileVar = document.getElementById('divInputMobile');

widthScreen();

function widthScreen() {
	var screenWidthVar = window.outerWidth;
	var elResponsiveClass = document.getElementsByClassName("responsive")[0];
	var elOnlyMobileClass = document.getElementsByClassName("only-mobile")[0];
	var elOnlyDesktopClass = document.getElementsByClassName("only-desktop")[0];

	if (screenWidthVar > minWidthDesktop) {
		elResponsiveClass.classList.add('desktop');
		elResponsiveClass.classList.remove('mobile');
		elOnlyDesktopClass.classList.remove('hide');
		elOnlyMobileClass.classList.add('hide');
	}
	else {
		elResponsiveClass.classList.add('mobile');
		elResponsiveClass.classList.remove('desktop');
		elOnlyDesktopClass.classList.add('hide');
		elOnlyMobileClass.classList.remove('hide');
	}
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
//Отслеживание изменения размера окна браузера и если это необходимо меняет Mobile-version на Desktop и наоборот
	//*********************************************************************************
window.addEventListener("resize",	widthScreen);

window.onload = function() {
	//Общие функции и переменные
//*********************************************************************************
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
//  document.getElementById('buttonSearch').onclick = function () {
//    openbox();
//  }
	//скрытие поля ввода при клике в неактивном месте
	//*********************************************************************************
//	document.getElementById('secondLineHeaderMobile').onclick = function() {
//		closeBox();
//	}
	//Поиск при нажатии на Enter(клавиатура) мобильная версия
	//*********************************************************************************
//	document.getElementById('searchMobileInput').onkeypress = function (){
//		if (event.keyCode == 13) searchFunctionMobile();
//	}

}
