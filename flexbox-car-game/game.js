function makeGameSquare(){
	let containerElement = document.querySelector('#game-container')
	let squareElement = document.querySelector('#game')

	const makeHeightEqualToWidth = () => {
		let maxWidth = containerElement.offsetWidth;
		let maxHeight = containerElement.offsetHeight;
		console.log(maxWidth,  maxHeight);
		let size = Math.min(maxWidth,maxHeight);
		squareElement.style.height = size + 'px';
		squareElement.style.width = size + 'px';
	}
	onresize = makeHeightEqualToWidth
	makeHeightEqualToWidth()
}

function makeButtonsClickable(){
	let previousLevelButton = document.getElementById('previous-level-button')
	let nextLevelButton = document.getElementById('next-level-button')
	let successModalElement = document.getElementById('success-modal')
	let closeSucessModalElement = document.getElementById('close-success-modal')
	let submitButton = document.getElementById('submit')

	previousLevelButton.onclick = previousLevel
	nextLevelButton.onclick = nextLevel
	closeSucessModalElement.onclick = closeSucessModalAndGoToNextLevel
	submitButton.onclick = submitAnswer
}

function previousLevel(){
	let currentLevelIndex = levels.indexOf(currentLevel)
	if(levels[currentLevelIndex-1]){
		setLevel(levels[currentLevelIndex-1])
	}
}

function nextLevel(){
	let currentLevelIndex = levels.indexOf(currentLevel)
	if(levels[currentLevelIndex+1]){
		setLevel(levels[currentLevelIndex+1])
	}
}


let currentLevel;


let cars = [];

function setLevel(level){
	currentLevel = level


	//Set level name and remove label color
	let currentLevelElement = document.getElementById('current-level') 
	let currentLevelElementTop = document.getElementById('game-level-result-value')
	//game-level-result-value
	let levelNumber = levels.indexOf(level)+1;
	currentLevelElement.innerHTML = 'Nível '+levelNumber;
	currentLevelElementTop.innerHTML = levelNumber;
	currentLevelElement.className = ''

	//Intro
	// document.getElementById('intro').innerHTML = level.intro

	//Css editor
	let css = level.css
	let identationLevel = css.match(/^\s+/)[0].length-1
	let dedentedCss = css.split(/[\r\n]/).map(line => line.substr(identationLevel)).join('\r').trim()
	editor.setValue(dedentedCss, -1)


	//Hidden css
	let hiddenStyle = document.getElementById('hidden-style')
	if(!hiddenStyle){
		hiddenStyle = document.createElement('style')
		hiddenStyle.id = 'hidden-style'
		document.body.appendChild(hiddenStyle)
	}
	hiddenStyle.innerHTML = level.hiddenCss


	//Create cars
	var carTemplate = document.getElementById("car-template");
	var lotTemplate = document.getElementById("parking-lot-template");

	let carsLayer = document.getElementById('estacionamento');
	let lotsLayer = document.getElementById('parking-lots-layer')

	carsLayer.innerHTML = '';
	lotsLayer.innerHTML = '';
	cars =[]

	for(let carName of level.cars){
		var newCar = carTemplate.content.cloneNode(true).children[0]
		var newLot = lotTemplate.content.cloneNode(true).children[0]

		newCar.classList.add(carName)
		newLot.classList.add(carName)


		carsLayer.appendChild(newCar)
		lotsLayer.appendChild(newLot)

		cars.push({
			carElement:newCar,
			parkingLotElement:newLot
		})
	}



}


function createCar(){
	return {
		carElement:null,
		parkingLotElement: null,
	}
}
function carIsParked(car){
	let parkingLotBoundaries = car.parkingLotElement.getBoundingClientRect()
	let carBoundaries = car.carElement.getBoundingClientRect()

	return Math.abs(carBoundaries.left - parkingLotBoundaries.left) < 10
		&& Math.abs(carBoundaries.right - parkingLotBoundaries.right) < 10
		&& Math.abs(carBoundaries.top - parkingLotBoundaries.top) < 10
		&& Math.abs(carBoundaries.bottom - parkingLotBoundaries.bottom) < 10
}

function isAllCarsParked(){
	return cars.every(carIsParked)
}

let editor;


function submitAnswer(){
	if(isAllCarsParked()){
		showSuccessModal()
	} else {
		shakeSubmitButton()
	}
}

function shakeSubmitButton(){
	let submitButton = document.getElementById('submit')
	submitButton.classList.remove('shake')
	setTimeout(() => submitButton.classList.add('shake'), 100)
	
}


function prepareEditor(){
	var sheet = document.createElement('style')
	document.body.appendChild(sheet);

	editor = ace.edit("editor");
	editor.setTheme("ace/theme/chrome");
	editor.session.setMode("ace/mode/css");
	//Disable warnings
	editor.session.setUseWorker(false);
	editor.setOptions({
		fontFamily: "consolas",
		fontSize: "20pt"
	});

	editor.on("input", function() {
		sheet.innerHTML = editor.getValue()
	});
}

function showSuccessModal(){
	let successModalElement = document.getElementById('success-modal')
	successModalElement.className = 'modal visible'
}

function hideSuccessModal(){
	let successModalElement = document.getElementById('success-modal')
	successModalElement.className = 'modal'
}

function closeSucessModalAndGoToNextLevel(){
	hideSuccessModal()
	nextLevel()
}

function doEverything(){
	prepareEditor()
	setLevel(levels[0])
	makeButtonsClickable()
	makeGameSquare()
}

onload = doEverything