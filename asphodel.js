var pocik = document.getElementById('bubuplayer'),
pocikAudio = document.getElementById('bubu');
pocik.addEventListener('click', fPlay, false);
function fPlay() {
    if (pocikAudio.paused) {    
        pocikAudio.play();                
        $('#bubuplayer').removeClass('fa-play').addClass('fa-pause');
    } 
    else {
        pocikAudio.pause();
        $('#bubuplayer').removeClass('fa-pause').addClass('fa-play');
    }
}

var volumeplus = document.getElementById('pluser');
volumeplus.addEventListener('click', fPluser, false);
haha = Math.floor(pocikAudio.volume * 100) / 100
$('#volumeshower').html(haha)
function fPluser() {
    if (pocikAudio.volume < 1){
        pocikAudio.volume = pocikAudio.volume + 0.1;
        haha = Math.floor(pocikAudio.volume * 100) / 100
        $('#volumeshower').html(haha)
    }
}
var volumeminus = document.getElementById('minuser');
volumeminus.addEventListener('click', fMinuser, false);
function fMinuser() {
    if (pocikAudio.volume > 0){
        pocikAudio.volume = pocikAudio.volume - 0.1;
        haha = Math.floor(pocikAudio.volume * 100) / 100
        $('#volumeshower').html(haha)
    }
}
