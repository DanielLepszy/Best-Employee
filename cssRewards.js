$('#mainQuestion').remove();
$('#allAnswers div').remove();
$('#getAid').remove();
$('#toWin').remove();

$('#allAnswers').html('<a><img id="myCV" src="Images/pobrane.png"></a>')
$('#showRewards').css({
    'width':'190px',
    'height':'253px',
})

$('#allAnswers').css({
    'position':'relative',
   'top':'40%',
   'left':'40%',
    'width':'260px',
    'height':'260px',
})
$('#allAnswers img').css({
    'position':'absolute',
    'right':'0%',
    'bottom':'0%'
})

$("Image").one('click', function(){

});
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
