var titleInput = $('.title-input');
var ideaInput = $('.body-input');


$('.save-button').on('click', prependCard);

function prependCard(event) {
	event.preventDefault();
	
	$('.ideas').prepend(
		`<div>
			<h2>${titleInput.val()}</h2>
				<button class="delete">x</button>
				<p>${ideaInput.val()}</p>
				<button class="up">up</button>
				<button class="down">down</button>
		</div>`
	);
}