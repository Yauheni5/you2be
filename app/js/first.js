var minWidthDesktop = 769;
var hello = 'Мы рады видеть Вас!';
var empty = 'Пожалуйста, введите значение для поиска';
var helloMobile = 'Это мобильная версия';
var divVar = document.getElementsByTagName('div');
var inputSearchVar = document.getElementById('inputSearch');

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
		document.getElementById('buttonSearch').onclick = function() {
			searchFunction();
		}
	}
	else {
		elResponsiveClass.classList.add('mobile');
		elResponsiveClass.classList.remove('desktop');
		elOnlyDesktopClass.classList.add('hide');
		elOnlyMobileClass.classList.remove('hide');
		document.getElementById('buttonSearch').onclick = function() {
			openBox();
		}
	}
}

//ФУНКЦИИ и переменные для Десктоп

//ФУНКЦИИ и переменные для Мобильных устройств
//*********************************************************************************

function searchFunction() {

			var inpSearch = document.getElementById('inputSearch').value;

			if (inpSearch == '') alert(empty);
			else alert(inpSearch);
		}

function openBox() {
	if (document.getElementsByClassName("responsive")[0].classList.contains('open-box')) {
		searchFunction();
	} else document.getElementsByClassName("responsive")[0].classList.add('open-box');
	return
}

function closeBox() {
	document.getElementsByClassName("responsive")[0].classList.remove('open-box');
}
//Отслеживание изменения размера окна браузера и если это необходимо меняет Mobile-version на Desktop и наоборот
	//*********************************************************************************
	window.addEventListener("resize",	widthScreen);

	window.onload = function() {
	//Общие функции и переменные
//*********************************************************************************
	//Поиск при клике на кнопку поиск(лупа)	десктопная версия
	//*********************************************************************************

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
	document.getElementById('secondLineHeaderMobile').onclick = function() {
		closeBox();
	}
	//Поиск при нажатии на Enter(клавиатура) мобильная версия
	//*********************************************************************************
//	document.getElementById('searchMobileInput').onkeypress = function (){
//		if (event.keyCode == 13) searchFunctionMobile();
//	}

}
