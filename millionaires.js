var beginGame = document.getElementById('start');
var allQuestions;

var boxOfQuestions = [];
var boxOfAnswers = [];
var clearAnswer = document.getElementById('allAnswers');
var amountofClick=0;
function loadJSON() {
    var value = $.ajax({
        url: 'https://raw.githubusercontent.com/DanielLepszy/Best-Employee/master/questions_and_answers.json',
        async: false // 
    }).responseText;
    return JSON.parse(value);
}

beginGame.addEventListener("click", function () {
    allQuestions = loadJSON()
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
    supportPlayer(1)
    // firstMusic()
    // focusMusic(6400)
    // getQuestions(0)
    // getAnswers(0)
    // showSet(0, 6400)
};

function fetchQuestions() {
    boxOfQuestions = allQuestions.Questions
};
function finishGame() {
    if (boxOfQuestions.length == 0) {
        $('#mainQuestion').remove();
        $('#allAnswers div').remove();
        $('#getAid').remove();
        $('#toWin').remove();

        $('#allAnswers').html('<a><img id="myCV" src="Images/pobrane.png"></a>')
        $('#showRewards').css({
            'width': '190px',
            'height': '253px',
        })

        $('#allAnswers').css({
            'position': 'relative',
            'top': '40%',
            'left': '40%',
            'width': '260px',
            'height': '260px',
        })
        $('#allAnswers img').css({
            'position': 'absolute',
            'right': '0%',
            'bottom': '0%'
        })


        $("#allAnswers").delegate('img', 'mouseover mouseleave', function (e) {
            if (e.type == 'mouseover') {
                $(this).css({
                    'cursor': 'hand',
                    'transform': 'scale(2.2)',
                    'transition': 'all 0.5s ease-in-out',
                });

            } else {
                $(this).css({
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.6s ease-in-out'
                });
            }
        });

    };

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
    supportPlayer(2)
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
function supportPlayer(m) {
    
    if (m == 1) {
        $("#getAid img:nth-child(2)").one('click', function () {
            $("#answerB p:nth-child(2)").empty();
            $("#answerD p:nth-child(2)").empty();
            $("#answerC p:nth-child(2)").empty();
            amountofClick++;
        });
    }

    else if (m == 2) {
        $("#getAid img:nth-child(2)").one('click', function () {
            $("#answerA p:nth-child(2)").empty();
            $("#answerC p:nth-child(2)").empty();
            $("#answerD p:nth-child(2)").empty();
            amountofClick++;
        });
    }
    if (amountofClick>=1){
    $("#getAid img:nth-child(2)").remove();
    }
}