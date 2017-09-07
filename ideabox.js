var titleInput = $('.title-input');
var ideaInput = $('.body-input');
var myArray = [];


$('.save-button').on('click', saveFunction);
$(window).on('load', function(){
	loadFromStorage();
	console.log(localStorage);
})

// $('.ideas').on('click', downIdeaQuality);

Object.keys(localStorage)
//grab all ids by key and populate the DOM on every event. iterate through keys and build idea cards

function saveFunction(event) {
	event.preventDefault();
	var titleInputValue = titleInput.val()
	var ideaInputValue = ideaInput.val()
	var idea = new Idea(titleInputValue, ideaInputValue);
	myArray.push(idea);

	
	createCard(idea);
	clearInputFields();
	storage(idea);
	// uniqueID();
}

function createCard(idea){
	$('.ideas').prepend(
		`<div class="ideaBox" id="${idea.id}" >
			<h2 class="title-input" contenteditable="true">${idea.title}</h2>
				<div class="delete"></div>
				<p class="idea-input" contenteditable="true">${idea.body}</p>
				<div class="up"></div>
				<div class="down"></div>
				<p class="quality">quality:<span class="quality-type">${idea.quality}</span></p><hr color="#D1D3D4"/>
		</div>`
	);
}

function clearInputFields(){
	titleInput.val('');
	ideaInput.val('');
};

function Idea(titleInputValue, ideaInputValue){
	this.id = Date.now();
	this.title = titleInputValue;
	this.body = ideaInputValue;
	this.quality = 'swill';
}

function storage(idea){
	var stringyArray = JSON.stringify(idea);
	localStorage.setItem(`${idea.id}`, stringyArray);
}

function loadFromStorage(idea){
	var keys = Object.keys(localStorage);
	for (var i = 0; i < localStorage.length; i++){
		var ideaString = localStorage.getItem(keys[i]);
		var ideaObject = JSON.parse(ideaString);
		createCard(ideaObject);
		// createCard(JSON.parse(localStorage.getItem(keys[i])))
	}
}

function getFromStorage(id){
	var ideaString = localStorage.getItem(id);
	return JSON.parse(ideaString);
}

function cardLoader(array){
	console.log(array);
	array.forEach(function(idea){
		createCard(idea);
	})
}


// var search = myArray.filter(function(titleInputValue, ideaInputValue){
// 	return titleInputValue === $('.search').val()
// 	return ideaInputValue === $('.search').val()
// })


$('.ideas').on('click',function(event){
	event.preventDefault();
	var $currentIdea = $(event.target).closest('.ideaBox');

	if(event.target.className === 'delete'){
		$currentIdea.remove();
		var idOfCurrentIdea = $currentIdea.prop('id');
		localStorage.removeItem(idOfCurrentIdea);
	}
});



$('.ideas').on('click', '.up', upIdeaQuality);

function upIdeaQuality(event){
	var n = $('.quality-type').text();
	if(event.target.className === 'up'){
		if(n === 'swill'){
			$('.quality-type').text('plausible');
		}
	}

	if(event.target.className === 'up'){
		if(n === 'plausible'){
			$('.quality-type').text('genius');
		}
	}
}

$('.ideas').on('click', '.down', downIdeaQuality);

function downIdeaQuality(event){
	var n = $('.quality-type').text();
	if(event.target.className === 'down'){
		if(n === 'genius'){
			$('.quality-type').text('plausible');
		}
	}
	if(event.target.className === 'down'){
		if(n === 'plausible'){
			$('.quality-type').text('swill');
		}
	}
}




// NPM Browser-ready Version1 https://www.npmjs.com/package/uuid
// function uniqueID(){
// 	var uuid = uuidv1();
// 	console.log(uuid);
// }