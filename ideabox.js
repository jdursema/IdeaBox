var titleInput = $('.title-input');
var ideaInput = $('.body-input');
var myArray= [];


$('.save-button').on('click', saveFunction);
$(window).on('load', takesFromStorage)

// $('.ideas').on('click', downIdeaQuality);


function saveFunction(event) {
	event.preventDefault();
	var titleInputValue = titleInput.val()
	var ideaInputValue = ideaInput.val()
	var idea = new Idea(titleInputValue, ideaInputValue);
	myArray.push(idea);
	
	
	createCard(idea);
	clearInputFields();
	storage ();
	// uniqueID();
}

function createCard(idea){
	$('.ideas').prepend(
		`<div class="ideaBox" id="${idea.id}" >
			<h2 class="title-input" contenteditable="true">${idea.title}</h2>
				<button class="delete">x</button>
				<p class="idea-input" contenteditable="true">${idea.body}</p>
				<button class="up">up</button>
				<button class="down">down</button>
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



function storage (){
	var stringyArray = JSON.stringify(myArray);
	localStorage.setItem("allItem", stringyArray);
}

function takesFromStorage(){
	var returnedArray = JSON.parse(localStorage.getItem("allItem")) || [];
	returnedArray.forEach(function(idea){
		createCard(idea);
	})
}


// var search = myArray.filter(function(titleInputValue, ideaInputValue){
// 	return titleInputValue === $('.search').val()
// 	return ideaInputValue === $('.search').val()
// })


$('.ideas').on('click',function(event){
	event.preventDefault();
	var currentIdea= $(event.target).closest('div');

	if(event.target.className === 'delete'){
		currentIdea.remove();
	}
});



$('.ideas').on('click', upIdeaQuality);

function upIdeaQuality(event){
	event.preventDefault();
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

$('.ideas').on('click', downIdeaQuality);

function downIdeaQuality(event){
	event.preventDefault();
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