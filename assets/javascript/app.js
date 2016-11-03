var questions = [{
	"question": "On What Day Did Aaron Asked Cady What The Date Of The Day Was?",
	"option1": "November 24",
	"option2": "January 2",
	"option3": "October 3",
	"option4": "April 12",
	"answer": "3"

},{
	"question": "Complete This Quote: So you agree. You think you're really...",
	"option1": "Pretty",
	"option2": "Smart",
	"option3": "Active",
	"option4": "Cool",
	"answer": "1"

},{
	"question": "What Was The Name of The Song The Girls Performed To During The Talent Show?",
	"option1": "Santa Baby",
	"option2": "Jingle Bell Rock",
	"option3": "Grandma Got Run Over By A Raindeer",
	"option4": "Merry Christmas",
	"answer": "2"
},{
	"question": "Which Character's Father Invented Toaster Strudel?",
	"option1": "Gretchen",
	"option2": "Aaron",
	"option3": "Damein",
	"option4": "Regina",
	"answer": "1"
},{
	"question": "How Many Candy Cane Grams Did Glen CoCo get?",
	"option1": "None",
	"option2": "2",
	"option3": "4",
	"option4": "5",
	"answer": "3"
},{
	"question": "What Did Cady Give To Regina to Help Her lose weight?",
	"option1": "SlimFast Drinks",
	"option2": "Peppermint Sticks",
	"option3": "Perchmant Bars",
	"option4": "Kalteen Bars",
	"answer": "4"

}]

var images = ["assets/images/giphy.gif", "assets/giphyPretty.gif", "assets/images/giphyJBR.gif", "assets/images/giphyTS.gif", "assets/images/giphyGC.gif", "assets/images/giphyKB.gif"];

var count = 0;


var currentQuestion = 0;
var score= 0;
var totQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl= document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');




function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex +1) + '.' +q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;

};
$(".start").click(function(){
	$(".gameTitle").hide();
	$(".container").show();
	$(".doOverDiv").hide();

});
$(".container").hide();
$(".doOverDiv").hide();
$("#result").hide();

function loadNextQuestion () {





	var selectedOption = document.querySelector['input[type=radio]: checked'];
	


	
	var answer = ("selectedOption").value;
	if(questions.answer == answer){
		score +=  10;
		function displayImage (){
    		$('#image-holder').html('<img src='+images[count]+ ' width="400px">');
}
	}
	("selectedOption").checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = "finish";
		$(".container").hide();
		$("#result").show();



	}
	if (currentQuestion == totQuestions){
		
		resultCont.style.display ="";
		resultCont.textContent= "your score"+ " " + score;
		

		return;
	}
	loadQuestion(currentQuestion);

}


loadQuestion(currentQuestion);




   /*
window.onload = function(){
   $('#nextButton').on('click', stopwatch.start);
 };   


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