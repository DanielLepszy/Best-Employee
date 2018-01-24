var beginGame = document.getElementById('start');
var allQuestions;

var boxOfQuestions = [];
var boxOfAnswers = [];
var clearAnswer = document.getElementById('allAnswers');
var amountofClick = 0;
var amountClickPhoneAid = 0;
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
    fiftyFiftySupport(2)
    friendAidPhone()
    publicVote()
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
    fiftyFiftySupport(2)
    friendAidPhone()
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
function fiftyFiftySupport(m) {
    $("#getAid img:nth-child(2)").one('click', function () {
        if (m === 1) {
            $("#answerB p:nth-child(2)").empty();
            $("#answerD p:nth-child(2)").empty();
            $("#answerC p:nth-child(2)").empty();
            amountofClick++;
        }
        else if (m === 2) {
            $("#answerA p:nth-child(2)").empty();
            $("#answerB p:nth-child(2)").empty();
            $("#answerC p:nth-child(2)").empty(); 
            amountofClick++;
        }
    });

    if (amountofClick >= 1) {
        $("#getAid img:nth-child(2)").remove();
    }
}
function friendAidPhone() {


    $("#getAid img:nth-child(3)").one('click', function () {
        amountClickPhoneAid++
        $('#toWin').html('<p>CALL:</p><p>607-703-622</p>');
        $('#toWin').css({
            'position': 'absolute',
            'transform': 'translate(75%,60%)',
            'display': 'flex',
            'flex-wrap': 'wrap',
            'align-items': 'center',
            'justify-content': 'center',
            'width': '40%',
            'height': '20%',
            'border-style': 'outset ',
            'border-width': '4px',
            'border-color': 'black',
            'background-color': '#0D2034',
            'border-radius': '10%',
            'opacity': '0.9'
        });

        $('#toWin p').css({
            'font-size': '50px',
            'color': 'white',
            'line-height': '25px',
            'font-weight': 'bold',
            'padding': '10px'


        });

    });
    if (amountClickPhoneAid >= 1) {
        $("#getAid img:nth-child(3)").remove();

    }
}
function publicVote(){
    $("#getAid img:nth-child(1)").one('click', function () {
        $('#allAnswers').hide();
        $('#mainQuestion').hide();
    $('#toWin').html('<div class="rowsChart"><p>A:</p><div class="percentageOfVoters"></div></div>'+
    '<div class="rowsChart"><p>B:</p><div class="percentageOfVoters"></div></div>'+
    '<div class="rowsChart"><p>C:</p><div class="percentageOfVoters"></div></div>'+
    '<div class="rowsChart"><p>D:</p><div class="percentageOfVoters"></div></div>'
);
$('#toWin').css({
    'width':'60%',
    'height':'35%',
    'position':'absolute',
    'top':'25%',
    'left':'3%',
    'border':'2px solid white',
    'background-color':'#1f1f38',
    'border-radius':'5%',
    'opacity':'0.9'
});
    $('#toWin .rowsChart').css({
        'display': 'flex',
        'flex-direction': 'column',
        'width':'50%',
        'height':'15%',
        'margin':'3%',
        'padding':'5px'
    });
    $('.rowsChart').css({
        'display': 'flex',
        'flex-direction': 'row',
        'width':'20%',
        'height':'10%'
        
    })
    $('.rowsChart p').css({
        'color': 'gold',
        'font-weight': 'bold',
        'width':'15%',
        'height':'100%',
        'margin':'3px',
        'font-size':'110%',
        'padding-top':'2%'
        

    })
    $('.rowsChart .percentageOfVoters').css({
        'border':'3px solid #e5e5e5',
        'background-color':'#cabce0',
        'border-radius':'15%',
        'height':'100%',
        'width':'5%',
        'margin-left':'5%'
    })
}
    )}
