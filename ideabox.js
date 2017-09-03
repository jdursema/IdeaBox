var titleInput = $('.title-input');
var ideaInput = $('.body-input');


$('.save-button').on('click', prependCard);
// $('.ideas').on('click', downIdeaQuality);


function prependCard(event) {
	event.preventDefault();
	
	$('.ideas').prepend(
		`<div class="ideaBox">
			<h2>${titleInput.val()}</h2>
				<button class="delete">x</button>
				<p>${ideaInput.val()}</p>
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



$('.ideas').on('click',function(event){
	event.preventDefault();

	if(event.target.className === 'up') {
		if (($('.quality').val()) === "swill"){
			$('.quality').text(`plausible`)
			};
		if (($('.quality').val()) === "plausible"){
			$('.quality').text(`genius`);
			}
		});


// function downIdeaQuality(event){
// 	if(event.target.className === 'down'){
// 		console.log(10);
// 		if (($('.quality').val()) === "genius"){
// 			$('.quality').text(`plausible`)
// 			}
// 		if (($('.quality').val()) === "plausible"){
// 			$('.quality').text(`swill`)
// 			}