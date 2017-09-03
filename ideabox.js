var titleInput = $('.title-input');
var ideaInput = $('.body-input');


$('.save-button').on('click', prependCard);


function prependCard(event) {
	event.preventDefault();
	
	$('.ideas').prepend(
		`<div class="ideaBox">
			<h2>${titleInput.val()}</h2>
				<button class="delete">x</button>
				<p>${ideaInput.val()}</p>
				<button class="up">up</button>
				<button class="down">down</button>
		</div>`
	);
	clearInputFields();
}

function clearInputFields(){
	titleInput.val('');
	ideaInput.val('');
}

$('.ideas').on('click',function(event){
	event.preventDefault();
	var currentIdea= $(event.target).closest('div');

	if(event.target.className === 'delete'){
		currentIdea.remove();
	}
});