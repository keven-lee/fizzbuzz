$(document).ready(function(){
  var userInput = prompt("Please enter a number");
  var max = parseInt(userInput);

function fizzbuzz(max) {
  for (var i = 1; i <= max; i++) {
  	if (i % 3 == 0 && i % 5 == 0) {
  	  $('.list').append('<li>' + 'fizzbuzz' + '</li>');
  	}
  	else if (i % 3 == 0) {
  	  $('.list').append('<li>' + 'fizz' + '</li>');
  	}
  	else if (i % 5 == 0) {
      $('.list').append('<li>' + 'buzz' + '</li>');
  	}
  	else {
  	  $('.list').append('<li>' + i + '</li>');
  	}
  }
}

fizzbuzz(max)

});