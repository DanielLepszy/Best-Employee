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
    onStartGame()
});

function subscribeOnClick() {
    $('#allAnswers').click(function () {
        onCorrectAnswerSelected()
    })
}

function onStartGame() {
    // 1. Fetch all questions
    subscribeOnClick()
    fetchQuestions()
    var question = boxOfQuestions.pop()
    showCurrentAnswers(question)
    // firstMusic()
    // focusMusic(6400)
    // getQuestions(0)
    // getAnswers(0)
    // showSet(0, 6400)
};

function fetchQuestions() {
    boxOfQuestions = allQuestions.Questions
    //todo
};
function finishGame() {
    if (boxOfQuestions.length == 0) {

        $('#mainQuestion').remove();
        $('#allAnswers div').remove();
        $('#getAid').remove();
        $('#toWin tr').remove();
          
        $('#allAnswers').html(
            '<img id="myOwnCV" src="Images/pobrane.png">'+
            '<img  src="Images/pobrane.png">'
        )
        $('#allAnswers').css({
            'transition':'all 0.4s ease'
        })
        $("#myOwnCV").css({
            'transform':'translate(0,50px)'
        })
        
        $("#allAnswers").delegate('img', 'mouseover mouseleave', function (e) {
            if (e.type == 'mouseover') {
                $(this).css({
                    'cursor': 'hand',
                    'transform': 'scale(1.2)',
                    'transition': 'all 0.5s ease-in-out',
                });
            } else {
                $(this).css({
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.6s ease-in-out'
                });
            }
        });
        //'transform': 'scale(2.1)',
        //'transition': 'all 1s ease-in-out',


        // $('#allAnswers img').delay(500).css({ 
        //   'transform': 'scale(1.1)',
        //   'transition': 'all 1s ease-in-out',
        // });
    }
}
function showCurrentAnswers(question) {


    var questionAnswers = question.answers
    var questionContent = question.QuestionTitle

    setTimeout(function () {
        $('#mainQuestion').html('<p>' + questionContent + '</p>');
        setTimeout(function () {
            $('#answerA .firstRowAnswer').after('<p>' + questionAnswers[0].answerTitle + '</p>')
        }, 1000);
        setTimeout(function () {
            $('#answerB .firstRowAnswer').after('<p>' + questionAnswers[1].answerTitle + '</p>')
        }, 2000);
        setTimeout(function () {
            $('#answerC .firstRowAnswer').after('<p>' + questionAnswers[2].answerTitle + '</p>')
        }, 3000);
        setTimeout(function () {
            $('#answerD .firstRowAnswer').after('<p>' + questionAnswers[3].answerTitle + '</p>')
        }, 4000);

    }, 0);
}


function onCorrectAnswerSelected() {
    // checkAnswer()
    // getQuestions(1)
    // getAnswers(1)
    // focusMusic(18400)
    // showSet(0, 18400)

    clearAnswersFields()
    finishGame()
    if (boxOfQuestions.length != 0) {
        var question = boxOfQuestions.pop()
        showCurrentAnswers(question)
    }
};

function firstMusic() {
    $('#audio').attr('src', 'Sounds/Begin.mp3');
}

function focusMusic(time) {
    setTimeout(function () {
        $('#audio').attr('src', 'Sounds/FocusSound.mp3');
    }, time);
};


function checkAnswer() {

    $('#audio').attr('src', 'Sounds/GoodAnswers.mp3');

    $("#answerA").delay(100).animate({
        'backgroundColor': '#FFCF40',
        'opacity': 1,
        'color': '000000',
    }, 500);
    $("#answerA").delay(9400).animate({
        'backgroundColor': '#23E047',
    }, 500);


    $("#answerA").delay(4800).animate({
        'backgroundColor': '#000000',
        'color': '#ffffff'
    }, 0);
}

function clearAnswersFields() {
    setTimeout(function () {
        $('#mainQuestion p').empty();
        $('#answerA p:nth-child(2)').remove();
        $('#answerB p:nth-child(2)').remove();
        $('#answerC p:nth-child(2)').remove();
        $('#answerD p:nth-child(2)').remove();
    }, 0);
}
