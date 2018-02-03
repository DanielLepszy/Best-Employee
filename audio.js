var focusMusicPlayer = new Audio('Sounds/FocusSound.mp3');
focusMusicPlayer.loop = true
focusMusicPlayer.volume=0

function playQuestionFocusMusic() {
    focusMusicPlayer.play()
};

function playLastQuestionFocusMusic(){
    focusMusicPlayer = new Audio('Sounds/lastFocus.mp3')
    focusMusicPlayer.loop = true
    
    focusMusicPlayer.play()
    
}

function descreaseVolumeQuestionFocusMusic() {
    focusMusicPlayer.volume = 0.0;
}

function increaseVolumeQuestionFocusMusic() {
    focusMusicPlayer.volume = 1;
}

function playAudio(url, didEndCallback) {

    var audio = new Audio(url);
    audio.volume=0
    audio.loop = false;
    audio.play();
    audio.onended = didEndCallback
  
};