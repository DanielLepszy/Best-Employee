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

function subscribeOnCorectAnswerSelected() {
    $('#allAnswers').one('click', onCorrectAnswerSelected);
}

function onStartGame() {
    subscribeOnCorectAnswerSelected()
    fetchQuestions()
    currentQuestion = boxOfQuestions.pop()
    subscribeForLifelines()

    playAudio('Sounds/Begin.mp3', function () {
        focusMusic()
        showCurrentAnswers(currentQuestion, 0)
    });
};

function subscribeForLifelines() {
    subscribeForFiftyFiftyLifeline()
    subscribeForPhoneAFriendLifeline()
    subscribeAskAAudienceLifeline()
}

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

        }, 6000);
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
        countsBlock=0;
    }, time);
    
}

var countsBlock=0;
function onCorrectAnswerSelected() {
    if (isAllAnswersLoaded()) {
        if(countsBlock===0){
        checkAnswer() 
        //focusMusic()
        clearAnswersFields()
        finishGame()
        if (boxOfQuestions.length != 0) {
            currentQuestion = boxOfQuestions.pop()
            showCurrentAnswers(currentQuestion, 14000)
        }
        subscribeForLifelines()
        subscribeOnCorectAnswerSelected()
    }
}
}

function focusMusic() {
    if (boxOfQuestions.length != 0) {
        //playAudio('Sounds/FocusSound.mp3')
        playQuestionFocusMusic();
    } else {
        // playAudio('Sounds/lastFocus.mp3')
    }
};

function aidAudio() {
    playAudio('Sounds/Aid.mp3')
    setTimeout(function () {}, 6000)
};

function properAnswerAudio() {
    // pause focus
    playAudio('Sounds/GoodAnswers.mp3')
};

function winAudio() {
    // pause focus
    setTimeout(function () {
        playAudio('Sounds/lastanswer.mp3')
    }, 5000)
};

var blockClickingAnswersManyTimes = false;

function isAllAnswersLoaded() {
    return $("#answerD p:nth-child(2)").text().length > 0
}

function checkAnswer() {
    checkingAnswer()
    if (boxOfQuestions.length == 0) {
        winAudio()
        setTimeout(function () {
            playAudio('Sounds/lastanswer.mp3')
        }, 5000)
    }
}

function checkingAnswer() {
    countsBlock++   
    var correctAnswerId = currentQuestion.correctAnswerId;
    var currentAnswerArray = currentQuestion.answers;
    var answer = currentAnswerArray.find(element => element.id === correctAnswerId)
    $('#toWin').empty();
    $("#answer" + answer.id).delay(100).animate({
        'backgroundColor': '#FFCF40',
        'opacity': 1,
        'color': '000000',
    }, 400);
    descreaseVolumeQuestionFocusMusic();
    playAudio('Sounds/zgroza.mp3', function () {
        $("#answer" + answer.id).animate({
            'backgroundColor': '#23E047',
        }, 300);
        playAudio('Sounds/dobraodpowiedz.mp3', function () {
            playAudio('Sounds/nowepytanie.mp3')
            $("#answer" + answer.id).animate({
                'backgroundColor': '#000000',
                'color': '#ffffff'
            }, 0); 
            
        })
      
    });
};

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
    if (isAidUsedInThatRound) {
        return showAlertAboutAmountOfAidOnRound()
    }
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

function subscribeForFiftyFiftyLifeline() {
    $("#getAid img:nth-child(2)").one('click', onFiftyFiftyPressed)
}

function onFriendAidPhonePressed() {
    if (isAidUsedInThatRound) {
        return showAlertAboutAmountOfAidOnRound()
    }
    aidAudio();
    setTimeout(function () {
        isAidUsedInThatRound = true;
        $('#toWin').html('<p>Przyjaciel mówi:</p><p>To z pewnością Daniel Lepszy !</p>');
        $('#toWin').addClass('phoneStyles');
        $('#toWin p').addClass('phoheNumberStyles');
        $("#getAid img:nth-child(3)").addClass('usedAidStyle');
    }, 4000)
}

function subscribeForPhoneAFriendLifeline() {
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
                $("#proper" + answer.id).append('<p>100%</p>');
                $("#proper" + answer.id + " p").addClass('publicVoteAnswersPercentage');
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
        'Sorry, ale użyłeś już jednego koła ratunkowego w tym pytaniu</p></div>');
    $('.alertAboutAmountofAid').addClass('alertAboutAidInRound');
    $('.alertAboutAmountofAid p').addClass('alertAidContent');
}

function onPublicVotePressed() {
    if (isAidUsedInThatRound) {
        return showAlertAboutAmountOfAidOnRound()
    }
    aidAudio();
    isAidUsedInThatRound = true;
    hideQuestionAndAnswers();
    showPublicVoteChart();
    animatePublicVoteInChart();
    showQuestionAndAnswers();

}

function subscribeAskAAudienceLifeline() {
    $("#getAid img:nth-child(1)").one('click', onPublicVotePressed);
}