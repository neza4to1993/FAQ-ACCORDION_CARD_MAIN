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

function openText() {
	const divText = document.querySelectorAll('.item__text');
	console.log(this.children);
	
	divText.forEach(element => {
		element.addEventListener('click', openText)
	});
	console.log(this.children);
	if (this.getAttribute("open") === "false"){
		this.setAttribute('open', 'true')
	} else {
		this.setAttribute('open', 'false')
	}
}















