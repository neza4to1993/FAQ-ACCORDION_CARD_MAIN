document.querySelectorAll('.title__item').forEach(element => {element.addEventListener('mouseover', changingСube)});
document.querySelectorAll('.title__item').forEach(element => {element.addEventListener('click', openText)});

function changingСube() {
	document.querySelectorAll('.title__item').forEach(element => {
		element.addEventListener('mouseout', changingСube)
	});
		const cube = document.getElementById('cube');
		if (cube.getAttribute('mouseover') === 'false'){
			cube.setAttribute('mouseover', 'true')
			cube.style.cssText = `
			transition-duration: 0.5s;
			z-index: 10;
			position: absolute;
			top: 42%;
			left: -92px;
		`
		} else {
			cube.setAttribute('mouseover', 'false')
			cube.style.cssText = `
			transition-duration: 0.5s;
			z-index: 10;
			top: 42%;
			left: -130px;
			`
	}
}

function openAfterTitle(iconArrow) {

	iconArrow.classList.toggle('after');
	iconArrow.style.cssText = `
	font-weight: 700;
	`
}

function animationText(animation) {
	animation.classList.toggle('animation');
}

function closeAfterTitle(iconArrow) {
	iconArrow.classList.toggle('after');
	iconArrow.style.cssText = `
	font-weight: 400;
	`
}

function openText(event) {
	const divText = document.querySelectorAll('.title__item');
	const text = this.nextElementSibling;
	const numberRow = event.target.attributes[1].nodeValue;
	resetStyles(divText, numberRow);

	divText.forEach(element => {
		element.addEventListener('click', openText);
	});
	if (text.getAttribute("open") === "false" & text.getAttribute("defaultactive") === "true"){
		text.setAttribute('open', 'true')
		
		text.style.cssText=`
		display: block;
		`
			openAfterTitle(this);
			animationText(text);
	} else {
		text.setAttribute('open', 'false')
			animationText(text);
			closeAfterTitle(this);
	}
}

function resetStyles(count, numberRow) {
count.forEach(element => {
	const countText = element.nextElementSibling;

		if(element.id !== numberRow){
			element.classList.remove('after');
			element.style.cssText=`
			font-weight: 400;
			`
			countText.classList.remove('animation');
						countText.setAttribute('open', 'false');
						countText.style.cssText=`
						display: none;
						`
						countText.setAttribute('defaultactive', 'false')
				}else{
					if(countText.getAttribute('defaultactive') === 'true'){
						countText.setAttribute('defaultactive', 'false');
						countText.style.cssText=`
						display: none;
						`
					}else {
						countText.setAttribute('defaultactive', 'true');
					}
				}

		
	});
}









