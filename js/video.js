function getVideo(){
    return document.getElementById("video");
}

function play(){
    var video = getVideo();
    video.play();
}

function pause(){
    var video = getVideo();
    video.pause();
}

function stop(){
    var video = getVideo();
    // video.pause();
    // video.currentTime = 0;
    video.load();
}

function volume(vol){
    var volume = document.getElementById("volume").value;
    if(volume === "100"){
        volume = 1;
    } else {
        volume = parseFloat("0." + volume).toFixed(1);
    }

    var video = getVideo();
    video.volume = volume;
}

function muted(){
    var video = getVideo();
    var muted = document.getElementById("muted");
    if(video.muted){
        video.muted = false;
        muted.style.color = "black";
    } else {
        video.muted = true;
        muted.style.color = "red";      
    }
}

function full() {
    var video = getVideo();
    video.webkitRequestFullScreen(); //Só está funcionando no Google Chrome e Opera
}

getVideo().onplay = function () {
    console.log("O vídeo foi iniciado");
};

getVideo().onpause = function () {
    console.log("O vídeo foi pausado");
};

getVideo().onabort = function () {
    console.log("O vídeo foi parado");
};

getVideo().onvolumechange = function() {
    console.log("O volume foi alterado");
}