const btnTitle = document.querySelectorAll('.title__item').forEach(element => {element.addEventListener('mouseover', changingСube)});
const btnTitleOpenText = document.querySelectorAll('.title__item').forEach(element => {element.addEventListener('click', openText)});

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
	console.log(iconArrow);
	iconArrow.style.cssText = `
	font-weight: 700;
	`
}
function closeAfterTitle(iconArrow) {
	iconArrow.classList.toggle('after');
	console.log(iconArrow)
	iconArrow.style.cssText = `
	font-weight: 400;
	`
}

function openText() {
	const divText = document.querySelectorAll('.title__item');
	const text = this.nextElementSibling;
	

	divText.forEach(element => {
		element.addEventListener('click', openText);
	});

	if (text.getAttribute("open") === "false"){
		text.setAttribute('open', 'true')
			text.style.cssText = `
			display:block;
			color: black;
			`
			openAfterTitle(this)
	} else {
		text.setAttribute('open', 'false')
		text.style.cssText = `
			display:none
			`
			closeAfterTitle(this)
	}
}









