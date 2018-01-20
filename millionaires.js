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
                    "answerTitle": "Daniel ",
                    "isCorrectAnswer": true
                },
                {
                    "id": "B",
                    "answerTitle": "Elvis "
                },
                {
                    "id": "C",
                    "answerTitle": "Violetta "
                },
                {
                    "id": "D",
                    "answerTitle": "Mark "
                }
            ],
            "correctAnswerId": "A"
        },
        {
            "QuestionTitle": "Kogo zaprosisz na rozmowe kwalifikacyjna?",
            "answers": [{
                    "id": "A",
                    "answerTitle": "Daniel Lepsz",
                    "isCorrectAnswer": true
                },
                {
                    "id": "B",
                    "answerTitle": "Elvis Presly"
                },
                {
                    "id": "C",
                    "answerTitle": "Violetta Villa"
                },
                {
                    "id": "D",
                    "answerTitle": "Mark Zuckerbe"
                }
            ],
            "correctAnswerId": "A"
        }
    ]
}
var boxOfQuestions = [];
var boxOfAnswers = [];
var clearAnswer = document.getElementById('allAnswers');

beginGame.addEventListener("click", function () {
    firstMusic()
    focusMusic(6400)
    getQuestions(0)
    getAnswers(0)
    showSet(0, 6400)
});

$('body').one('click', '#allAnswers', function () {
    checkAnswer()
    getQuestions(1)
    getAnswers(1)
    focusMusic(18400)
    showSet(0, 18400)
}); //Zdarzenie oCLICK na obiekcie jQuery


function firstMusic() {
    $('#audio').attr('src', 'Sounds/Begin.mp3');
};

function focusMusic(time) {
    setTimeout(function () {
        $('#audio').attr('src', 'Sounds/FocusSound.mp3');
    }, time);
};

function getQuestions(y) {
    boxOfQuestions.push(allQuestions.Questions[y].QuestionTitle);
};

function getAnswers(x) {
    for (var j = 0; j <= 3; j++) {
        boxOfAnswers.push(allQuestions.Questions[x].answers[j].answerTitle);
    }
};

function showSet(z, time) {
    setTimeout(function () {
        $('#mainQuestion').html('<p>' + boxOfQuestions[z] + '</p>');
        setTimeout(function () {
            $('#answerA .firstRowAnswer').after('<p>' + boxOfAnswers[0] + '</p>')
        }, 2000);
        setTimeout(function () {
            $('#answerB .firstRowAnswer').after('<p>' + boxOfAnswers[1] + '</p>')
        }, 4000);
        setTimeout(function () {
            $('#answerC .firstRowAnswer').after('<p>' + boxOfAnswers[2] + '</p>')
        }, 6000);
        setTimeout(function () {
            $('#answerD .firstRowAnswer').after('<p>' + boxOfAnswers[3] + '</p>')
        }, 8000);
    }, time);
    
}

function checkAnswer() {
    boxOfQuestions = [];
    boxOfAnswers = [];
    $('#audio').attr('src', 'Sounds/GoodAnswers.mp3');

    $("#answerA").delay(100).animate({
        'backgroundColor': '#FFCF40',
        'opacity': 1,
       'color': '000000',
    }, 500);
    $("#answerA").delay(9400).animate({
        'backgroundColor': '#23E047',
    }, 500);
    
    
    setTimeout(function () {
        $('#mainQuestion p').empty();
        $('#answerA p:nth-child(2)').remove();
        $('#answerB p:nth-child(2)').remove();
        $('#answerC p:nth-child(2)').remove();
        $('#answerD p:nth-child(2)').remove();

        
    }, 15000);
    $("#answerA").delay(4800).animate({
        'backgroundColor': '#000000',
        'color': '#ffffff'
    }, 0);
}


/*function clearBoxes(){
     boxOfQuestions.shift();
     
     return boxOfQuestions.shift();
} */