var titleInput = $('.title-input');
var ideaInput = $('.body-input');


$('.save-button').on('click', prependCard);
// $('.ideas').on('click', downIdeaQuality);


function prependCard(event) {
	event.preventDefault();
	
	$('.ideas').prepend(
		`<div class="ideaBox">
			<h2 class="title-input">${titleInput.val()}</h2>
				<button class="delete">x</button>
				<p class="idea-input">${ideaInput.val()}</p>
				<button class="up">up</button>
				<button class="down">down</button>
				<p class="quality">quality:<span class="quality-type">swill</span></p><hr color="#D1D3D4"/>
		</div>`
	);
	clearInputFields();
	uniqueID();
}

function clearInputFields(){
	titleInput.val('');
	ideaInput.val('');
};

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



//NPM Browser-ready Version1 https://www.npmjs.com/package/uuid
function uniqueID(){
	var uuid = uuidv1();
	console.log(uuid);
}