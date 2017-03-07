var minWidthDesktop = 769;
var empty = "Введите запрос!"
var inputSearchVar = document.getElementById('inputSearch');

widthScreen();


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
		closeBox();
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

function closeBox() {
	document.getElementsByClassName("responsive")[0].classList.remove('open-box');
}

window.addEventListener("resize",	widthScreen);

window.onload = function() {

	document.getElementById('inputSearch').onkeypress = function (){
	if (event.keyCode == 13) searchFunction();
	}

	document.getElementById('secondLineHeaderMobile').onclick = function() {
		closeBox();
	}
}
