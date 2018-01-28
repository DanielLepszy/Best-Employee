var beginGame = document.getElementById('start');
var audioFocus;
var allQuestions;
var isAidUsedInThatRound = false;
var boxOfQuestions = [];
var boxOfAnswers = [];
var clearAnswer = document.getElementById('allAnswers');
var currentQuestion;
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

    subscribeOnClick()
    fetchQuestions()
    currentQuestion = boxOfQuestions.pop()
    showCurrentAnswers(currentQuestion, 6400)
    subscribeForFiftyFiftyAid()
    friendAidPhone()
    publicVote()

    firstMusic()
    focusMusic(6400)
    // getQuestions(0)
    // getAnswers(0)
    // showSet(0, 6400)
};

function fetchQuestions() {
    boxOfQuestions = allQuestions.Questions
};
function finishGame() {
    if (boxOfQuestions.length == 0) {
        setTimeout(function () {
            $('#mainQuestion').remove();
            $('#allAnswers div').remove();
            $('#getAid').remove();
            $('#toWin').remove();

            $('#allAnswers').html('<a><img id="myCV" src="Images/pobrane.png"></a>');

            $('#allAnswers').addClass('rewardsDiv');

            $('#allAnswers img').addClass('imageCV');

        }, 5000);
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

    };

}
function showCurrentAnswers(question, time) {


    var questionAnswers = question.answers
    var questionContent = question.QuestionTitle

    setTimeout(function () {
        $('#mainQuestion').html('<p>' + questionContent + '</p>');
        setTimeout(function () {
            $('#answerA .firstRowAnswer').after('<p>' + questionAnswers[0].answerTitle + '</p>')
        }, 2000);
        setTimeout(function () {
            $('#answerB .firstRowAnswer').after('<p>' + questionAnswers[1].answerTitle + '</p>')
        }, 4000);
        setTimeout(function () {
            $('#answerC .firstRowAnswer').after('<p>' + questionAnswers[2].answerTitle + '</p>')
        }, 6000);
        setTimeout(function () {
            $('#answerD .firstRowAnswer').after('<p>' + questionAnswers[3].answerTitle + '</p>')
        }, 8000);

    }, time);
}


function onCorrectAnswerSelected() {
    checkAnswer()
    focusMusic(14000)
    clearAnswersFields()
    finishGame()

    if (boxOfQuestions.length != 0) {
        currentQuestion = boxOfQuestions.pop()
        showCurrentAnswers(currentQuestion, 14000)
    }

    subscribeForFiftyFiftyAid()
    friendAidPhone()
    publicVote()

}
function firstMusic() {
    var audio = new Audio('Sounds/Begin.mp3');
    audio.play();
}

function focusMusic(time) {
    setTimeout(function () {
        if (boxOfQuestions.length != 0) {
            audioFocus = new Audio('Sounds/FocusSound.mp3');
            audioFocus.loop = true;
            audioFocus.play();
        }
        else {
            audioFocus = new Audio('Sounds/lastFocus.mp3');
            audioFocus.loop = true;
            audioFocus.play();
        }
    }, time);
};
function aidAudio() {
    audioFocus.volume = 0.1;
    var audio = new Audio('Sounds/Aid.mp3');
    audio.play();
    setTimeout(function () {
        audioFocus.volume = 1;
    }, 6000)
};
function properAnswerAudio() {
    audioFocus.pause();
    var audio = new Audio('Sounds/GoodAnswers.mp3');
    audio.play();
}

function checkAnswer() {

    properAnswerAudio()
    $('#toWin').empty();
    $("#answerA").delay(100).animate({
        'backgroundColor': '#FFCF40',
        'opacity': 1,
        'color': '000000',
    }, 500);
    $("#answerA").delay(5000).animate({
        'backgroundColor': '#23E047',
    }, 500);


    $("#answerA").delay(3800).animate({
        'backgroundColor': '#000000',
        'color': '#ffffff'
    }, 0);
    if (boxOfQuestions.length == 0) {
        setTimeout(function () {
            audio.pause();
            audio = new Audio('Sounds/lastAnswer.mp3');
            audio.play();
        }, 5000)
    }
}

function clearAnswersFields() {
    isAidUsedInThatRound = false;
    $('.alertAboutAmountofAid').remove();
    setTimeout(function () {
        $('#mainQuestion p').empty();
        $('#answerA p:nth-child(2)').remove();
        $('#answerB p:nth-child(2)').remove();
        $('#answerC p:nth-child(2)').remove();
        $('#answerD p:nth-child(2)').remove();
    }, 10000);
}
function onFiftyFiftyPressed() {
    if (isAidUsedInThatRound) { return showAlertAboutAmountOfAidOnRound() }
    aidAudio();
    setTimeout(function () {
        isAidUsedInThatRound = true;
        var correctAnswerId = currentQuestion.correctAnswerId;
        var currentAnswerArray = currentQuestion.answers;
        currentAnswerArray.forEach(answer => {
            if (answer.id !== correctAnswerId) {
                $("#answer" + answer.id + " p:nth-child(2)").empty();
            }

        });
        $("#getAid img:nth-child(2)").addClass('usedAidStyle');
    }, 4000)

};

function subscribeForFiftyFiftyAid() {

    $("#getAid img:nth-child(2)").one('click', onFiftyFiftyPressed)
}
function onFriendAidPhonePressed() {
    if (isAidUsedInThatRound) { return showAlertAboutAmountOfAidOnRound() }
    aidAudio();
    setTimeout(function () {
        isAidUsedInThatRound = true;
        $('#toWin').html('<p>Przyjaciel mówi:</p><p>To z pewnością Daniel Lepszy !</p>');
        $('#toWin').addClass('phoneStyles');
        $('#toWin p').addClass('phoheNumberStyles');
        $("#getAid img:nth-child(3)").addClass('usedAidStyle');
    }, 4000)
}
function friendAidPhone() {

    $("#getAid img:nth-child(3)").one('click', onFriendAidPhonePressed);

};
function showPublicVoteChart() {

    $('#toWin').html('<div class="rowsChart">' +
        '<p>A:</p><div class="percentageOfVoters" id="properA"></div></div>' +
        '<div class="rowsChart">' +
        '<p >B:</p><div class="percentageOfVoters" id="properB"></div></div>' +
        '<div class="rowsChart">' +
        '<p >C:</p><div class="percentageOfVoters" id="properC"></div></div>' +
        '<div class="rowsChart">' +
        '<p >D:</p><div class="percentageOfVoters" id="properD"></div></div>'
    );

    $('#toWin').addClass('publicVotes');
    $('#toWin .rowsChart').addClass('publicVoteChart');
    $('.rowsChart').addClass('publicVoteRowChart');
    $('.rowsChart p').addClass('publicVoteAnswers');
    $('.rowsChart .percentageOfVoters').addClass('publicVoteProperAnswer');
}
function hideQuestionAndAnswers() {
    $('#allAnswers').hide();
    $('#mainQuestion').hide();

}
function animatePublicVoteInChart() {
    
        var correctAnswerId = currentQuestion.correctAnswerId;
        var currentAnswerArray = currentQuestion.answers;
        currentAnswerArray.forEach(answer => {
            if (answer.id === correctAnswerId) {
                setTimeout(function () {
                $("#proper" + answer.id).addClass('properChart');
            }, 4000)
            }

        });
        $("#getAid img:nth-child(1)").addClass('usedAidStyle');
    
}
function showQuestionAndAnswers() {
    setTimeout(function () {
        $('#toWin').removeClass('publicVotes');
        $('#toWin .rowsChart').removeClass('publicVoteChart');
        $('#toWin').empty();
        $('#allAnswers').show();
        $('#mainQuestion').show();
    }, 9000)
}
function showAlertAboutAmountOfAidOnRound() {
    $('body').append('<div class="alertAboutAmountofAid"> <p>' +
        'Możesz użyć tylko jednego koła ratunkowego podczas pytania !</p></div>');
    $('.alertAboutAmountofAid').addClass('alertAboutAidInRound');
    $('.alertAboutAmountofAid p').addClass('alertAidContent');
}

function onPublicVotePressed() {
    if (isAidUsedInThatRound) { return showAlertAboutAmountOfAidOnRound() }
    aidAudio();
    isAidUsedInThatRound = true;
    hideQuestionAndAnswers();
    showPublicVoteChart();
    animatePublicVoteInChart();
    showQuestionAndAnswers();
    
}

function publicVote() {
    $("#getAid img:nth-child(1)").one('click', onPublicVotePressed);
}
