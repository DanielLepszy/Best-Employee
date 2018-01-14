var beginGame = document.getElementById('start');


//alert(bb);

var allQuestions = ['Które z wymienionych osob chcesz zatrudnic', 'Ktory jest dobry', 'Kto bedzie pracowac'];
var answersFirst = ['Daniel Lepszy', 'a', 'b', 'c', 't', 'g'];
var answersSecond = ['Daniel Lepszy', 'a', 'b', 'c', 't', 'g'];
var answersThird = ['Daniel Lepszy', 'a', 'b', 'c', 't', 'g'];
var answersFourth = ['Daniel Lepszy', 'a', 'b', 'c', 't', 'g'];

beginGame.addEventListener("click", function () {showQuestion(), checkAnswer() });


//var goodAnswer = document.getElementById('allAnswers');
//goodAnswer.addEventListener("click",function(){checkAnswer()});


function showQuestion() {
    setTimeout(function () {
        var questionNumber = 1;
        if (questionNumber = 1) {

            //$('#audio').attr('src','Sounds/Game.mp3');
            $('#answerA td').after('<td>' + answersFirst[0] + '</td>');
            $('#answerB td').after('<td>' + answersFirst[1] + '</td>');
            $('#answerC td').after('<td>' + answersFirst[2] + '</td>');
            $('#answerD td').after('<td>' + answersFirst[3] + '</td>');
            $('#mainQuestion p').replaceWith('<p>' + allQuestions[0] + '</td>');


            questionNumber++
        }
        else if (questionNumber = 2) {
            $('#answerA td').after('<td>' + answersSecond[0] + '</td>');
            $('#answerB td').after('<td>' + answersSecond[1] + '</td>');
            $('#answerC td').after('<td>' + answersSecond[2] + '</td>');
            $('#answerD td').after('<td>' + answersSecond[3] + '</td>');
            $('#mainQuestion p').replaceWith('<p>' + allQuestions[0] + '</td>');
        }
        else if (questionNumber = 3) {
            $('#answerA td').after('<td>' + answersThird[0] + '</td>');
            $('#answerB td').after('<td>' + answersThird[1] + '</td>');
            $('#answerC td').after('<td>' + answersThird[2] + '</td>');
            $('#answerD td').after('<td>' + answersThird[3] + '</td>');
            $('#mainQuestion p').replaceWith('<p>' + allQuestions[0] + '</td>');
        }
        else if (questionNumber = 4) {
            $('#answerA td').after('<td>' + answersFourth[0] + '</td>');
            $('#answerB td').after('<td>' + answersFourth[1] + '</td>');
            $('#answerC td').after('<td>' + answersFourth[2] + '</td>');
            $('#answerD td').after('<td>' + answersFourth[3] + '</td>');
            $('#mainQuestion p').replaceWith('<p>' + allQuestions[0] + '</td>');
        }
        $('#mainQuestion').css({
            'position': 'absolute',
            'display': 'flex',
            'flex-wrap': 'wrap',
            'align-items': 'center',
            'justify-content': 'center',
            'margin': '0px'

        });
        $('#allAnswers td:nth-child(2)').css({
            'position': 'absolute',
            'width': '350px',
            'color': 'white',
            'font-size': '30px',
            'padding-left': '50px'
        });
    }, 6000);
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



