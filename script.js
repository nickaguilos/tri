$(document).ready(function(){
	$('#sheet-trigger, .overlay, .close').on('click', function(e){
		e.preventDefault();
		$("#bottom-sheet").toggle();
	});
});