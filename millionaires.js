var beginGame = document.getElementById('start');
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
    showCurrentAnswers(currentQuestion)
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
        $('#mainQuestion').remove();
        $('#allAnswers div').remove();
        $('#getAid').remove();
        $('#toWin').remove();

        $('#allAnswers').html('<a><img id="myCV" src="Images/pobrane.png"></a>');


        $('#allAnswers').addClass('rewardsDiv');
        $('#allAnswers img').addClass('imageCV');

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
        currentQuestion = boxOfQuestions.pop()
        showCurrentAnswers(currentQuestion)
    }

    subscribeForFiftyFiftyAid()
    friendAidPhone()
    publicVote()

}
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
    isAidUsedInThatRound = false;
    $('.alertAboutAmountofAid').remove();
    setTimeout(function () {
        $('#mainQuestion p').empty();
        $('#answerA p:nth-child(2)').remove();
        $('#answerB p:nth-child(2)').remove();
        $('#answerC p:nth-child(2)').remove();
        $('#answerD p:nth-child(2)').remove();
    }, 0);
}
function onFiftyFiftyPressed() {
    if (isAidUsedInThatRound) { return showAlertAboutAmountOfAidOnRound() }
    isAidUsedInThatRound = true;
    var correctAnswerId = currentQuestion.correctAnswerId;
    var currentAnswerArray = currentQuestion.answers;
    currentAnswerArray.forEach(answer => {
        if (answer.id !== correctAnswerId) {
            $("#answer" + answer.id + " p:nth-child(2)").empty();
        }

    });
    $("#getAid img:nth-child(2)").addClass('usedAidStyle');
};
function subscribeForFiftyFiftyAid() {

    $("#getAid img:nth-child(2)").one('click', onFiftyFiftyPressed)
}
function onFriendAidPhonePressed() {
    if (isAidUsedInThatRound) { return showAlertAboutAmountOfAidOnRound() }
    isAidUsedInThatRound = true;
    $('#toWin').html('<p>Przyjaciel mówi:</p><p>To z pewnością Daniel Lepszy !</p>');
    $('#toWin').addClass('phoneStyles');
    $('#toWin p').addClass('phoheNumberStyles');
    $("#getAid img:nth-child(3)").addClass('usedAidStyle');
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
            $("#proper" + answer.id).addClass('properChart');
        }

    });
    $("#getAid img:nth-child(1)").addClass('usedAidStyle');
}
function showQuestionAndAnswers() {
    setTimeout(function () {
        $('#toWin').hide();
        $('#allAnswers').show();
        $('#mainQuestion').show();
    }, 5000)
}
function showAlertAboutAmountOfAidOnRound() {
    $('body').append('<div class="alertAboutAmountofAid"> <p>'+
    'Możesz użyć tylko jednego koła ratunkowego podczas pytania !</p></div>');
    $('.alertAboutAmountofAid').addClass('alertAboutAidInRound');
    $('.alertAboutAmountofAid p').addClass('alertAidContent');
}

function onPublicVotePressed() {
    if (isAidUsedInThatRound) { return showAlertAboutAmountOfAidOnRound() }
    isAidUsedInThatRound = true;
    if (isAidUsedInThatRound)

        hideQuestionAndAnswers();
    showPublicVoteChart();
    animatePublicVoteInChart();
    showQuestionAndAnswers();
}

function publicVote() {
    $("#getAid img:nth-child(1)").one('click', onPublicVotePressed)
}
