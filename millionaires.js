var beginGame = document.getElementById('start');
var allQuestions =  {
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
            $('#answerA td').after('<td>' + allQuestions.Questions[0].answers[0].answerTitle + '</td>');
            $('#answerB td').after('<td>' + allQuestions.Questions[0].answers[1].answerTitle + '</td>');
            $('#answerC td').after('<td>' + allQuestions.Questions[0].answers[2].answerTitle + '</td>');
            $('#answerD td').after('<td>' + allQuestions.Questions[0].answers[3].answerTitle + '</td>');
            $('#mainQuestion p').replaceWith('<p>' + allQuestions.Questions[0].QuestionTitle + '</td>');


            questionNumber++
        }
        else if (questionNumber = 2) {
            $('#answerA td').after('<td>' + allQuestions.Questions[1].answers[0].answerTitle  + '</td>');
            $('#answerB td').after('<td>' + allQuestions.Questions[1].answers[1].answerTitle + '</td>');
            $('#answerC td').after('<td>' + allQuestions.Questions[1].answers[2].answerTitle + '</td>');
            $('#answerD td').after('<td>' + allQuestions.Questions[1].answers[3].answerTitle + '</td>');
            $('#mainQuestion p').replaceWith('<p>' + allQuestions.Questions[1].QuestionTitle + '</td>');
        }
        else if (questionNumber = 3) {
            $('#answerA td').after('<td>' + allQuestions.Questions[2].answers[0].answerTitle + '</td>');
            $('#answerB td').after('<td>' + allQuestions.Questions[2].answers[1].answerTitle + '</td>');
            $('#answerC td').after('<td>' + allQuestions.Questions[2].answers[2].answerTitle + '</td>');
            $('#answerD td').after('<td>' + allQuestions.Questions[2].answers[3].answerTitle + '</td>');
            $('#mainQuestion p').replaceWith('<p>' + allQuestions.Questions[2].QuestionTitle + '</td>');
        }
        else if (questionNumber = 4) {
            $('#answerA td').after('<td>' + allQuestions.Questions[3].answers[0].answerTitle + '</td>');
            $('#answerB td').after('<td>' + allQuestions.Questions[3].answers[1].answerTitle + '</td>');
            $('#answerC td').after('<td>' + allQuestions.Questions[3].answers[2].answerTitle + '</td>');
            $('#answerD td').after('<td>' + allQuestions.Questions[3].answers[3].answerTitle + '</td>');
            $('#mainQuestion p').replaceWith('<p>' + allQuestions.Questions[3].QuestionTitle + '</td>');
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



