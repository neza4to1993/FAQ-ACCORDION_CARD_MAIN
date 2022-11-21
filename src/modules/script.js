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

function openText() {
	const divText = document.querySelectorAll('.title__item');
	const text = this.nextElementSibling;
	resetStyles(divText);

	divText.forEach(element => {
		element.addEventListener('click', openText);
	});
	console.log(text);
	if (text.getAttribute("open") === "false" & text.getAttribute("defaultActive") === "true"){
		text.setAttribute('open', 'true')
		console.log('я в text.setAttribute\(\'open\', \'true\'\)');
		
		text.style.cssText=`
		display: block;
		`
			openAfterTitle(this);
			animationText(text);
	} else {
		console.log('я в text.setAttribute\(\'open\', \'false\'\)');
		text.setAttribute('open', 'false')
			animationText(text);
			closeAfterTitle(this);
	}
}

function resetStyles(count) {
	count.forEach(element => {
		const countText = element.nextElementSibling;
		element.classList.remove('after');
		element.style.cssText=`
		font-weight: 400;
		`
		countText.classList.remove('animation');
		
					if(countText.getAttribute('defaultActive') === 'true'){
							countText.setAttribute('defaultActive', 'false');
							countText.setAttribute('open', 'false');
					} else{
						countText.setAttribute('defaultActive', 'true');
					}

		countText.style.cssText=`
		display: none;
		`
	});
}







