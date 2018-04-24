 function cardShowHide() {
	var ShowHideElement = document.getElementById("main_quizExplain_frame");
	var DisplayValue = window.getComputedStyle(ShowHideElement,null).getPropertyValue("display");

	if (DisplayValue=="none") {
		ShowHideElement.style.display="initial";
	}else{
		ShowHideElement.style.display="none";
	}
}
