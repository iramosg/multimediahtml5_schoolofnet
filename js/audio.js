function getAudio() {
    return document.getElementById("audio");
}

getAudio().onplay = function () {
    console.log("O áudio foi iniciado");
};

getAudio().onpause = function () {
    console.log("O áudio foi pausado");
};

getAudio().onvolumechange = function () {
    console.log("O volume foi alterado");
}