var titleInput = $('.title-input');
var ideaInput = $('.body-input');


$('.save-button').on('click', prependCard);
// $('.ideas').on('click', downIdeaQuality);


function prependCard(event) {
	event.preventDefault();
	
	$('.ideas').prepend(
		`<div class="ideaBox" id = ${uniqueID()}>
			<h2 class="title-input">${titleInput.val()}</h2>
			<div class="delete" alt="Delete Button"></div>
			<p class="idea-input">${ideaInput.val()}</p>
			<div class="up-vote" alt="Upvote Button"></div>
			<div class="down-vote" alt="Downvote Button"></div>
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
	var currentIdea= $(event.target).closest('.ideas');

	if(event.target.className === 'delete'){
		currentIdea.remove();
	}
});



$('.ideas').on('click', '.up-vote', upIdeaQuality);

function upIdeaQuality(event){
	var n = $('.quality-type').text();
	if(event.target.className === 'up-vote'){
		if(n === 'swill'){
			$('.quality-type').text('plausible');
		}
	}

	if(event.target.className === 'up-vote'){
		if(n === 'plausible'){
			$('.quality-type').text('genius');
		}
	}
}

$('.ideas').on('click', '.down-vote', downIdeaQuality);

function downIdeaQuality(event){
	var n = $('.quality-type').text();
	if(event.target.className === 'down-vote'){
		if(n === 'genius'){
			$('.quality-type').text('plausible');
		}
	}
	if(event.target.className === 'down-vote'){
		if(n === 'plausible'){
			$('.quality-type').text('swill');
		}
	}
}

//NPM Browser-ready Version1 https://www.npmjs.com/package/uuid
function uniqueID(){
	var uuid = uuidv1();
	return uuid;
}

// set up an array to push new cards, use .filter for search on search input keyup