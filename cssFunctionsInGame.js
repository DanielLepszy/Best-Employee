var beginGame = document.getElementById('start');
var award = document.getElementById('awards');
var aboutGame = document.getElementById('about');

beginGame.addEventListener("click", function () { startGame() });
award.addEventListener("click", function () { gameAward() });
aboutGame.addEventListener("click", function () { gameInformation() });


function gameInformation() {
    $('.firstOptions').remove();
    $('.icon').attr('src', 'Images/backarrow.png');
    $('.website').attr('href', '');

    $('#startGame').html('Prosta aplikacja webowa bazująca na słynnej grze "Milionerzy".<br> '+
    'Zasady gry są proste: grasz dopóki nie wygrasz :) . Można korzystać tylko z jednego koła ratunkowego podczas danego pytania. '+
'Pamiętaj, że pytania z pozoru wydają się łatwe.<br> Powodzenia !');
    $('#startGame').css({
        'margin-top': '95px',
        'border-style': 'double ',
        'border-width': '9px',
        'border-color': '#7098C5',
        'position': 'absolute',
        'width': 'auto',
        'height': '200px',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%,-50%)',
        'color': 'white',
        'padding': '20px',
        'font-size': '19px',
        'background-color': 'black',
        'border-radius': '8%',
        'transition': 'all 0.9s ease-in-out'
    });

}
function gameAward() {
    $('.firstOptions').remove();
    $('.icon').attr('src', 'Images/backarrow.png');
    $('.website').attr('href', '');
    $('#startGame').css({
        'margin-top': '155px',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%,-50%)',
        'background': 'url(Images/bestemployee.png)',
        'width': '390px',
        'height': '341px',
        'background-repeat': 'no-repeat',
        'border-radius': '8%',
        'transition': 'all 0.9s ease-in-out'

    });
}
//Code after begin game//
function startGame() {
    $('#allContents').remove();

    $('body').html(
        '<div id="toWin"></div><div id="getAid"> </div><div id="mainQuestion"></div>' +
        '<div id="allAnswers"><div id="answerA"></div> <div id="answerB"></div>' +
        '<div id="answerC"></div> <div id="answerD"></div></div>'
    );

    $('#getAid').html(
        '<img id="publicAid" src="Images/publicznosc.png">' +
        '<img id="fifty-fifty" src="Images/polnapol.png">' +
        '<img id="friendcAid" src="Images/telefondoprzyjaciela.png">'
    );
    

    $('#mainQuestion').html('<p></p>');

    $('#answerA').html('<p class="firstRowAnswer">A:</p>');
    $('#answerB').html('<p class="firstRowAnswer">B:</p>');
    $('#answerC').html('<p class="firstRowAnswer">C:</p>');
    $('#answerD').html('<p class="firstRowAnswer">D:</p>');

    $('body').css({
        'background': 'url(Images/background2.png)',
        'background-size': 'cover'
    });

    $('#getAid').css({
        'position': 'absolute',
        'right': '65px',
        'display': 'flex',
        'flex-direction': 'row',
        'width': '480px',
        'height': '100px',
        'background-size': 'cover',
    });

    $('#getAid img').css({
        'padding': '12px',
    });

    $("#getAid").delegate('img', 'mouseover mouseleave', function (e) {
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

    $('#mainQuestion').css({
        'position': 'absolute',
        'bottom': '45%',
        'left': '10%',
        'width': '80%',
        'height': '15%',
        'border': '3px solid #A2BBCD',
        'border-radius': '30%',
        'background-color': 'black',
        'opacity': '0.95',
        'color': 'white',
        'font-size': '30px',
        'display': 'flex',
        'flex-wrap': 'wrap',
        'align-items': 'center',
        'justify-content': 'center',
        'margin': '0px'
    });

    $('#mainQuestion p').css({
        'position': 'absolute',
        'width': '100%',
        'height': '100%',

    });
    $('#allAnswers').css({
        'position': 'absolute',
        'display': 'flex',
        'flex-wrap': 'wrap',
        'align-items': 'center',
        'justify-content': 'center',
        'bottom': '3%',
        'left': '10%',
        'width': '80%',
        'height': '40%',
        'color': 'white',
        'font-size': '30px',
        'font-weight': 'bold',
        'text-align': 'left',
        'text-indent': '16px',
    });

    $('#allAnswers div').css({
        'display': 'flex',
        'border': '5px solid black',
        'width': '48%',
        'height': '40%',
        'margin': '5px',
        'border': '3px solid #A2BBCD',
        'border-radius': '30%',
        'background-color': 'black',
        'opacity': '0.95',
        'cursor': 'hand',
        'align-items': 'center',
        'justify-content': 'left',
        
       
    });


    $('#allAnswers p:nth-child(1) ').css({
        'z-index':'2',
        'color': 'gold',
        'font-size': '30px',
        'font-weight': 'bold',
        

    });
    $('#allAnswers p:nth-child(2) ').css({

        'position': 'absolute',
        'top': '59%',
        'color': 'red',
        'font-size': '30px',
        'font-weight': 'bold',
    });


}