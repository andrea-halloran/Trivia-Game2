// countdown timer (60 seconds)

var timeleft = 60;
var timer = setInterval(function(){
timeleft--;
document.getElementById("countDown").textContent = timeleft;
if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);

var startScreen;
var timer; 
var trivia;
var question = ["How many donuts are made in the US each year?", "Which city has the most donut shops per person?", "What is the most popular donut in America?", "What month includes National Donut Day?"];
var answer = [["10 billion",  "100 million",  "500 million", "22 billion"], ["Portland, OR",  "San Francisco, CA", "Boston, MA",  "New York, NY"], ["Powdered",  "Glazed",  "Strawberry jelly",  "Chocolate glazed"], ["May",  "September",  "July",  "June"]];
var correctAnswers = ["A) 10 billion", "C) Boston, MA", "B) Glazed", "D) June"];
var questionCounter = 0;
var selecterAnswer;
var theTime;

//Need to incorporate counting the right and wrong answers  

var correct = 0;
var wrong = 0;
var unanswered = 0

$(document).ready(function() {
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }    

    initialScreen();



$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	
	generateHTML();

	timerWrapper();

}); 
 


$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theTime);
		generateWin();
	}
	else {
		
		clearInterval(theTime);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	
	resetGame();
}); 

});  

//made a wait time of 3 seconds between each wrong or right answer

//need to make a final screen for the end of the game or when time runs out 

function generateWin() {
	correct++;
	trivia = "<p class='text-center'>You're correct! The answer is " + correctAnswers[questionCounter];
	$(".mainArea").html(trivia);
	setTimeout(wait, 3000); 
}

function generateLoss() {
	wrong++;
	trivia = "<p class='text-center'>Sorry, wrong answer! The answer is: "+ correctAnswers[questionCounter];
	$(".mainArea").html(trivia);
	setTimeout(wait, 3000);   
}

function generateHTML() {
	trivia = question[questionCounter] + "</p><p class='first-answer answer'>A) " + answer[questionCounter][0] + "</p><p class='answer'>B) "+answer[questionCounter][1]+"</p><p class='answer'>C) "+answer[questionCounter][2]+"</p><p class='answer'>D) "+answer[questionCounter][3]+"</p>";
	$(".mainArea").html(trivia);
}

function wait() {
	if (questionCounter < 4) {
	questionCounter++;
	generateHTML();
	counter = 60;
	timerWrapper();
	}
	else {
		finalScreen();
	}
} ; 



