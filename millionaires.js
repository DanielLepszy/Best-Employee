var beginGame = document.getElementById('start');
var award = document.getElementById('awards');
var aboutGame = document.getElementById('about');
var allQuestions=['Które z wymienionych osob chcesz zatrudnic','Ktory jest dobry','Kto bedzie pracowac']
//alert(allQuestions[0]);
beginGame.addEventListener("click", function () {startGame() });
award.addEventListener("click", function () { gameAward() });
aboutGame.addEventListener("click", function () {  gameInformation() });
questions.addEventListener("click", function () {  gameInformation() });


function gameInformation(){
   $('.firstOptions').remove();
   $('.icon').attr('src','Images/backarrow.png');
   $('.website').attr('href','');

   $('#startGame').html('Siema czesc i czolemssssssssssssssssssssssssssssssssssssssssssssssss');
   $('#startGame').css({
       'margin-top':'95px',
       'border-style':'double ',
       'border-width' : '9px' ,
       'border-color':'#7098C5',
       'position':'absolute',
       'width': 'auto',
       'height':'200px',
       'top':'50%',
       'left':'50%',
       'transform':'translate(-50%,-50%)',
       'color':'white',
       'padding':'20px',
       'font-size':'19px',
       'background-color':'black',
       'border-radius':'8%',
       'transition': 'all 0.9s ease-in-out'
   });
   
}
function gameAward(){
    $('.firstOptions').remove();
    $('.icon').attr('src','Images/backarrow.png');
    $('.website').attr('href','');
    $('#startGame').css({
        'margin-top':'155px',
        'position':'absolute',
        'top':'50%',
        'left':'50%',
        'transform':'translate(-50%,-50%)',
        'background':'url(Images/bestemployee.png)',
        'width': '390px',
        'height':'341px',
        'background-repeat':'no-repeat',
        'border-radius':'8%',
        'transition': 'all 0.9s ease-in-out'
      
    });
}
//Code after begin game//
function startGame(){
    $('#allContents').remove();
    $('body').css({
        'background':'url(Images/background2.png)',
        'background-size':'cover'
    });
    $('body').html(
        '<audio id="audio"controls autoplay src="Sounds/Begin.mp3" type="hidden"/><div id="toWin"></div><div id="getAid"> </div><div id="mainQuestion"></div><div id="allAnswers"><div id="answerA"></div> <div id="answerB"></div> <div id="answerC"></div> <div id="answerD"></div></div>'
    );
    $('#audio').css({
        'display':'hidden',
    });
    $('#mainQuestion').html('<p> allQuestrons[1] <p>');
    $('#getAid').html('<img id="publicAid" src="Images/publicznosc.png"><img id="fifty-fifty" src="Images/polnapol.png"><img id="friendcAid" src="Images/telefondoprzyjaciela.png">');
    $('#toWin').html('<tr><td>NR </td><td>WYGRANA</td></tr>');

    $('#answerA').html('<table class="firstRowAnswer"><tr><td>A: </td><td >LALA</td></tr></table>');
    $('#answerB').html('<table class="firstRowAnswer"><tr><td>B: </td><td >LALA</td></tr></table>');
    $('#answerC').html('<table class="secondRowAnswer"><tr><td>C: </td><td >LALA</td></tr></table>');
    $('#answerD').html('<table class="secondRowAnswer"><tr><td>D: </td><td >LALA</td></tr></table>');

    $('#toWin').css({
        'position':'absolute',
        'left':'50%',
        'top':'30%',
        'transform':'translate(-50%,-50%)',
        'width':'280px',
        'height':'80px',
        'border-style':'outset ',
         'border-width' : '4px' ,
        'border-color':'black',
        'background-color': '#0D2034',
        'border-radius':'10%',
        'opacity':'0.9'
        
    });
    $('#toWin tr').css({ 
        'font-size':'20px',
        'color':'white',
        'line-height':'60px',
        'font-weight':'bold'

    });
    $('#toWin td:nth-child(1)').css({ 
        'padding':'8px',
        'width':'40px',
        'height':'80px',
    });
    $('#toWin td:nth-child(2)').css({ 
        'text-align':'center',
        'width':'240px',
        'height':'80px',
    });
    $('#getAid').css({
        'position':'absolute',
        'right':'65px',
        'display': 'flex',
        'flex-direction':'row',
        'width':'480px',
        'height':'100px',
        'background-size':'cover',
        
    });
    $('#getAid img').css({
        'padding':'12px',
    });
    $("#getAid").delegate('img','mouseover mouseleave', function(e){
            if (e.type == 'mouseover') {
                $(this).css({
                    'cursor':'hand',
                    'transform':'scale(1.2)',
                    'transition': 'all 0.5s ease-in-out',
                });
            } else {
                $(this).css({
                    'transform':'scale(1.1)',
                    'transition': 'all 0.6s ease-in-out'});
            }
        });

    $('#mainQuestion').css({
        'position':'absolute',
        'bottom':'45%',
        'left':'10%',
        'width':'80%',
        'height':'15%',
        'border':'3px solid #A2BBCD',
        'border-radius':'30%',
        'background-color':'black',
        'opacity':'0.95',
        'color':'white',
        'font-size':'30px',
        //'font-weight':'bold',
    });
    $('#mainQuestion p').css({
        'position':'absolute',
        'width':'100%',
        'height':'100%',
        'display': 'flex',
        'flex-wrap':'wrap',
        'align-items':'center',
        'justify-content':'center',
        'margin':'0px'
       
    });
    $('#allAnswers').css({
        'position':'absolute',
        'display': 'flex',
        'flex-wrap':'wrap',
        'align-items': 'center',
        'justify-content': 'center',
        'bottom':'3%',
        'left':'10%',
        'width':'80%',
        'height':'40%',
        'color':'#E3A433',
        'font-size':'30px',
        'font-weight':'bold',
        'text-align':'left',
        'text-indent':'16px',
        //'line-height':'90px'
        
        });
    

    $('#allAnswers div').css({
        
        'border':'5px solid black',
        'width':'48%',
        'height':'40%',
        'margin':'5px',
        'border':'3px solid #A2BBCD',
        'border-radius':'30%',
        'background-color':'black',
        'opacity':'0.95'
    });
    $('#allAnswers table').css({
        
        'position':'absolute',
        'display': 'flex',
        'flex-wrap':'wrap',
        'margin-top':'50px'
    });
    
    $('#allAnswers tr td:nth-child(1) ').css({

        'color':'gold',
        'font-size':'30px',
        'font-weight':'bold',
        
    });
        $('#allAnswers tr td:nth-child(2) ').css({
        
        'position':'absolute',
        'top':'59%',
        'color':'gold',
        'font-size':'30px',
        'font-weight':'bold',
        
    });
    /*$('#showQuestionNumber').css({
        'position':'absolute',
        'right':'-20px',
        'top':'15%',
        'border':'5px solid black',
        'width':'6%',
        'height':'10%',
        'margin':'5px',
        'border':'3px solid #A2BBCD',
        'border-radius':'30%',
        'background-color':'black',
        'opacity':'0.9'
    });
    $('#showQuestionNumber img').css({
        'position':'absolute',
        'left':'50%',
        'top':'50%',
        'transform':'translate(-70%,-50%)'
    });*/
  
  $('.firstRowAnswer td:nth-child(1)').css({
    'position':'absolute',
    'top':'19%',    
    });

   $('.firstRowAnswer td:nth-child(2)').css({
    'position':'absolute',
    'top':'19%',
    'color':'White',
    'font-size':'30px',
    'margin':'auto',
    'padding-left':'50px'
    });

$('.secondRowAnswer td:nth-child(1)').css({
        
    'position':'absolute',
    'top':'69%',     
});
  
$('.secondRowAnswer td:nth-child(2)').css({

    'position':'absolute',
    'top':'69%',
    'color':'White',
    'font-size':'30px',
    'margin':'auto',
    'padding-left':'50px'
});

}