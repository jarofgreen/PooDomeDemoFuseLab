$(document).ready(function() {
	calculate();
	$('#numberPpl').change(function() {
		calculate();
	});
	$('#numberLoos').change(function() {
		calculate();
	});
});


function calculate() {
	var numPpl = $('#numberPpl').val();
	var numLoos = $('#numberLoos').val();
	
	var days = Math.round(16 / (numPpl  / numLoos));
	
	$('#changeDays').html(days);
	
};