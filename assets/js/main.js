//Below is an object and this is where the variable and functions 
//we need so theyre not on the window object/ near the jquery 
//document ready call we will be using.

var Foodie = {
	//content and form are variables that we have added they are also jquery objects hence the $
	//specific nodes that will be refernce more than once so stored them in variables for faster use
	$content: $('.content'),
	$form: $('form'),

	//create a function so that we can excuted in the doc ready below
	toggleLoading: function(){
		this.$content.toggleClass('content--loading');
		// toggle submit button so we dont get double submissionts, i dont get it
		this.$form.find('button').prop('disabled', function(i, v) { return !v; });
	},
	location:'',

	getFood: function(){
		if(location == ''){
			$('.content').html("pls type something in");
		} else{}

		$('.content').html("content is on its way");
	}

};

$(document).ready(function(){
	//when the page load it will execute the following that I will type below
	//1. Form Submission - determines what happens when the user enters something
	Foodie.$form.on('submit', function(e){
		e.preventDefault(); //prevent the default for action ie this will prevent the page from refreshing

		//Now I must call the loading function
		Foodie.toggleLoading();
	});

	//2.Form validation

	Foodie.getFood();
	
});