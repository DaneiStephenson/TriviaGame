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

var currentQuestion=0;
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
$("button").click(function(){
	$(".gameTitle").hide();
	$(".container").show();
});
$(".container").hide();

function loadNextQuestion () {





	var selectedOption = document.querySelector['input[type=radio]: checked'];
	


	
	var answer = ("selectedOption").value;
	if(questions[currentQuestion].answer == answer){
		score +=  10;
	}
	("selectedOption").checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = "finish";

	}
	if (currentQuestion == totQuestions){
		
		resultCont.style.display ="";
		resultCont.textContent= "your score" + score;
		return;
	}
	loadQuestion(currentQuestion);

}


loadQuestion(currentQuestion);

