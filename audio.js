const focusMusicPlayer = new Audio('Sounds/FocusSound.mp3');
focusMusicPlayer.loop = true

function playQuestionFocusMusic() {
    focusMusicPlayer.play()
};
function descreaseVolumeQuestionFocusMusic()
{
    focusMusicPlayer.volume =0.0;
}
function increaseVolumeQuestionFocusMusic()
{
    focusMusicPlayer.volume =0.4;
}

function playAudio(url, didEndCallback) {
    
    var audio = new Audio(url);
    audio.loop = false;
    audio.play();
    audio.onended = didEndCallback
};