

$(document).ready(function() {
	$( '#numberPpl' ).slider({ 
		min: 1, 
		max: 10, 
		step: 1, 
		value: 1,
		change: function() { calculate(); }
	});
	$( '#numberLoos' ).slider({ 
		min: 1, 
		max: 10, 
		step: 1, 
		value: 1,
		change: function() { calculate(); }
	});



	numberLoosSliders = $( '#numberLoos' ).slider({ min: 1, max: 10, step: 1, value: 1 });
	
	calculate();
	$('#numberPpl').change(function() {
		calculate();
	});
	$('#numberLoos').change(function() {
		calculate();
	});
});


function calculate() {
	var numPpl = $( '#numberPpl' ).slider( "option", "value" );
	var numLoos = $( '#numberLoos' ).slider( "option", "value" );
	
	var days = Math.min(8, Math.round(16 / (numPpl  / numLoos)));
	
	
	$('#numberPplShow').html(numPpl);
	$('#numberLoosShow').html(numLoos);
	$('#changeDays').html(days);
	
};