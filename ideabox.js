var titleInput = $('.title-input');
var ideaInput = $('.body-input');
var allTheThings= $('h2')


$('.save-button').on('click', prependCard);
$('.ideas').on('click', upIdeaQuality);
$('.ideas').on('click', downIdeaQuality);
// $('.search-input').keyup(search);


function prependCard(event) {
	event.preventDefault();
	
	$('.ideas').prepend(
		`<div class="ideaBox">
			<h2 contentEditable = "true">${titleInput.val()}</h2>
				<button class="delete">x</button>
				<p contentEditable= "true">${ideaInput.val()}</p>
				<p class="quality">swill</p>
				<button class="up">up</button>
				<button class="down">down</button>
		</div>`
	);
	clearInputFields();
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


function upIdeaQuality(event){
	event.preventDefault();
	var n = $('.quality').text();
	if(event.target.className === 'up'){
		if(n === 'swill'){
			$('.quality').text('plausible');
		}
	}

	if(event.target.className === 'up'){
		if(n === 'plausible'){
			$('.quality').text('genius');
		}
	}
}


function downIdeaQuality(event){
	var n = $('.quality').text();
	if(event.target.className === 'down'){
		if(n === 'genius'){
			$('.quality').text('plausible');
		}
	}
	if(event.target.className === 'down'){
		if(n === 'plausible'){
			$('.quality').text('swill');
		}
	}
}




// function search(){

// 	var searchInput = $('.search-input').val();
// 	var filter = searchInput.toUpperCase();
// 	// console.log(filter);
// 	for(i=0; i<titleInput.length; i++){
// 		// titleInput.val().toUpperCase()===filter
// 		if(h2.val().toUpperCase() !== filter){
// 			// console.log(4)
// 			console.log(filter)
// 			console.log(titleInput.val().toUpperCase())
// 			$('.ideas').hide();
// 		}
// 		// if(searchInput === ''){
// 		// 	$('.ideas').slideDown();
// 		// }
// 	}
// }

// ideaInput.val().toUpperCase().indexOf(filter)>-1)

