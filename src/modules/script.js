const btnTitle = document.querySelectorAll('.title__item').forEach(element => {element.addEventListener('mouseover', changingСube)});

function changingСube() {
	document.querySelectorAll('.title__item').forEach(element => {element.addEventListener('mouseout', changingСube)});
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













// .title__item:hover .item__cube {
// 	z-index: 1;
// 	position: absolute;
// 	top: 4%;
// 	left: -92px;
// }