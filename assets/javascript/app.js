var questions = [{
	"question": "On What Day Did Aaron Asked Cady What The Date Of The Day Was?",
	"option1": "November 24",
	"option2": "January 2",
	"option3": "October 3",
	"option4": "April 12",
	"answer": "October 3"

},{
	"question": "Complete This Quote: So you agree. You think you're really...",
	"option1": "Pretty",
	"option2": "Smart",
	"option3": "Active",
	"option4": "Cool",
	"answer": "Pretty"

},{
	"question": "What Was The Name of The Song The Girls Performed To During The Talent Show?",
	"option1": "Santa Baby",
	"option2": "Jingle Bell Rock",
	"option3": "Grandma Got Run Over By A Raindeer",
	"option4": "Merry Christmas",
	"answer": "Jingle Bell Rock"
},{
	"question": "Which Character's Father Invented Toaster Strudel?",
	"option1": "Gretchen",
	"option2": "Aaron",
	"option3": "Damein",
	"option4": "Regina",
	"answer": "Gretchen"
},{
	"question": "How Many Candy Cane Grams Did Glen CoCo get?",
	"option1": "None",
	"option2": "2",
	"option3": "4",
	"option4": "5",
	"answer": "4"
},{
	"question": "What Did Cady Give To Regina to Help Her lose weight?",
	"option1": "SlimFast Drinks",
	"option2": "Peppermint Sticks",
	"option3": "Perchmant Bars",
	"option4": "Kalteen Bars",
	"answer": "Kalteen Bars"

}]
// Love that you did this in this format using an array of object

var images = ["assets/images/giphy.gif", "assets/giphyPretty.gif", "assets/images/giphyJBR.gif", "assets/images/giphyTS.gif", "assets/images/giphyGC.gif", "assets/images/giphyKB.gif"];
var rightAnswers = 0;
var wrongAnswers = 0;
 var unanswered = 0;
var count = 0;
var timer;
var stopwatch;
var currentQuestion = 0;
var score= 0;
var totQuestions = questions.length;
var index = 0;


var container = document.getElementById("quizContainer");
var questionEl= document.getElementById('question');
var opt1 = $('#opt1');
var opt2 = $('#opt2');
var opt3 = $('#opt3');
var opt4 = $('#opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

/*
This function will let the finish button display score and start over 
function startover (){



$(".finish").click(function(){
	$(".gameTitle").show();
	$(".totalResults").show();
	$(".container").hide();
	$(".doOverDiv").hide();
	
$(".container-result").hide();
});

$(".gameTitle").hide();
	$(".container").hide();
	$(".doOverDiv").hide();
	$(".totalResults").show();


*/






function startover (){



$(".finish").click(function(){
	$(".gameTitle").show();
	$(".totalResults").show();
	$(".container").hide();
	$(".doOverDiv").hide();
	
$(".container-result").hide();
});

$(".gameTitle").hide();
	$(".container").hide();
	$(".doOverDiv").hide();
	$(".totalResults").show();
}

function loadQuestion (questionIndex) {

	if (questionIndex == 5){
		$("#rightAnswers").append(rightAnswers);
		$("#wrongAnswers").append(wrongAnswers);
		$("#unanswered").append(unanswered);
		
		
		startover();

	}

	else {
		var q = questions[questionIndex];
		questionEl.textContent = (questionIndex+1) + '.' +q.question;
		opt1.text(q.option1);
		opt1.data("answer", q.option1);

		opt2.text(q.option2);
		opt2.data("answer", q.option2);

		opt3.text(q.option3);
		opt3.data("answer", q.option3);

	    opt4.text(q.option4);
	    opt4.data("answer", q.option4);
	 
	}
	
};

$(".option").click(function(){
	console.log($(this).children().data("answer"), " === ",  questions[index].answer)
	 if ($(this).children().data("answer") == questions[index].answer){
	 	rightAnswers++;
	 	console.log(rightAnswers);
	 	loadNextQuestion();
		t = 10;
		$('.timer').html(t);
	 }
	 else {
	 	wrongAnswers ++;
	 	console.log(wrongAnswers);
	 	loadNextQuestion();
		t = 10;
		$('.timer').html(t);
	 }
	 index++
})

$(".start").click(function(){
	$(".gameTitle").hide();
	$(".container").show();
	$(".doOverDiv").hide();
	$(".totalResults").hide();
	starttimer();

});
$(".container").hide();
$(".doOverDiv").hide();
$("#result").hide();
$(".totalResults").hide();



// Function to start timer
function starttimer() {
    timer = setInterval(timer, 1000);
}
// Variable for timer
t = 10;
$('.timer').html(t); // Places timer on page
function timer() {
    t--
    // console.log(t); debugging
    // Updates timer
    $('.timer').html(t);
    // Reset and updates question when timer hits 0
    if (t == 0) {
        console.log("unanswered");
        t=10;
        $('.timer').html(t);
        loadNextQuestion();
        }
};


function loadNextQuestion () {

/* for bonus
function stoptimer() {
    clearInterval(timer);
}
*/

	var answer = ("selectedOption").value;
	if(questions.answer == answer){
		score +=  1;
	}
	currentQuestion++;
	if(index == (totQuestions - 1)){
		nextButton.textContent = "Finish";
		$(".container").hide();
		$("#result").show();
		$(".totalResults").show();
		startover();
		clearInterval(timer)
		
	// Here you have to clear your timer 
	// otherwise you will reset the game 
	// and have to wait 20 seconds for the 
	// answer to clean and show up
	// You also have to check against your variable index
	// because it holds the true value of which place you current question is at.
	
		return;
		// you dont have to return; since it doesnt return anything.
	}
	loadQuestion(currentQuestion); // it is fine to load next question
								   // but i would only do this if the 
								   // question is not the last. otherwise 
								   // the question will always load even 
								   // if it's not the last

}
$("#nextButton").hide();

loadQuestion(currentQuestion);
// You are once again calling 
// loadQuestion here which at 
// this point maybe unecessary


// Make sure that my indexes are not off by one
// The last question doesnt show because i cant count..!!




/*
window.onload = function(){
   $('#nextButton').on('click', stopwatch.start);
 };   
*/
/*

var stopwatch = {
    time:30,
    lap:1,
    reset: function(){
        stopwatch.time = 0;
        stopwatch.lap = 1;
        $('#display').html('00:30');
        $('#laps').html('');
    },
    start: function(){
        counter = setInterval(stopwatch.count, 1000);
    },
    stop: function(){
        clearInterval(counter);
    },
    
  
    count: function(){
        stopwatch.time--;
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#display').html(converted);
    },
    timeConverter: function(t){
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }

       
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
         if (seconds <= 0){
       clearInterval(counter);
        }
        return minutes + ":" + seconds;
    }
}

*/



/*
setInterval(function(){ 
		$('.timer').html(t);
		t--;

		PSEUDOCODE
		if t==0 {
			increment to display next question		
			reset timer
		}

		}

	;}, 1000);*/





