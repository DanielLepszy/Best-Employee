var beginGame = document.getElementById('start');
var allQuestions = {
    "Questions": [{
        "QuestionTitle": "Jak się nazywa twoj przyszly pracownik?",
        "answers": [{
            "id": "A",
            "answerTitle": "Daniel Lepszy",
            "isCorrectAnswer": true
        },
        {
            "id": "B",
            "answerTitle": "Elvis Presley"
        },
        {
            "id": "C",
            "answerTitle": "Violetta Villas"
        },
        {
            "id": "D",
            "answerTitle": "Mark Zuckerberg"
        }
        ],
        "correctAnswerId": "A"
    },
    {
        "QuestionTitle": "Kto jest najlepszy?",
        "answers": [{
            "id": "A",
            "answerTitle": "Daniel Lepszy",
            "isCorrectAnswer": true
        },
        {
            "id": "B",
            "answerTitle": "Elvis Presley"
        },
        {
            "id": "C",
            "answerTitle": "Violetta Villas"
        },
        {
            "id": "D",
            "answerTitle": "Mark Zuckerberg"
        }
        ],
        "correctAnswerId": "A"
    },
    {
        "QuestionTitle": "Kogo zaprosisz na rozmowe kwalifikacyjna?",
        "answers": [{
            "id": "A",
            "answerTitle": "Daniel Lepszy",
            "isCorrectAnswer": true
        },
        {
            "id": "B",
            "answerTitle": "Elvis Presley"
        },
        {
            "id": "C",
            "answerTitle": "Violetta Villas"
        },
        {
            "id": "D",
            "answerTitle": "Mark Zuckerberg"
        }
        ],
        "correctAnswerId": "A"
    }
    ]
}
console.log(allQuestions.Questions[0]);
var clearAnswer = document.getElementById('allAnswers');

var firstAnswer = document.getElementById('answerA');
var SecondAnswer = document.getElementById('answerB');
var ThirdAnswer = document.getElementById('answerC');
var FourthAnswer = document.getElementById('answerD');


beginGame.addEventListener("click", function () { firstMusic(),focusMusic(),showQuestion()});
firstAnswer.addEventListener("click", function () {checkAnswer() });

//var goodAnswer = document.getElementById('allAnswers');
//goodAnswer.addEventListener("click",function(){checkAnswer()});

function firstMusic() {
    $('#audio').delay(6400).attr('src', 'Sounds/Begin.mp3');
};

function focusMusic() {
    
    setTimeout(function () {
    $('#audio').attr('src', 'Sounds/FocusSound.mp3');
}, 6400);
};

function showQuestion() {
    setTimeout(function () {
        var questionNumber = 1;
       


        {$('#mainQuestion p').replaceWith('<p>' + allQuestions.Questions[0].QuestionTitle + '</p>')};
        setTimeout(function (){$('#answerA .firstRowAnswer').after('<p>'+allQuestions.Questions[0].answers[0].answerTitle+'</p>' )}, 2000);
        setTimeout(function (){$('#answerB .firstRowAnswer').after('<p>' + allQuestions.Questions[0].answers[1].answerTitle + '</p>')}, 4000);
        setTimeout(function (){$('#answerC .firstRowAnswer').after('<p>' + allQuestions.Questions[0].answers[2].answerTitle + '</p>')}, 6000);
        setTimeout(function (){$('#answerD .firstRowAnswer').after('<p>' + allQuestions.Questions[0].answers[3].answerTitle + '</p>')}, 8000);
        

            questionNumber++  
        
    }, 6400);

}
        
        function checkAnswer() {
            $('#audio').attr('src', 'Sounds/GoodAnswers.mp3');
        
            $("#answerA").delay(100).animate({
        
                backgroundColor: '#FFCF40',
                opacity: 1,
                color: '000000',
            },
                500);
            $("#answerA").delay(9400).animate({
        
                backgroundColor: '#23E047',
        
            },
                500);
        
        };
        
    
    

   
    


