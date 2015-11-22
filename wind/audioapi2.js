var aContext = new (window.AudioContext || window.webkitAudioContext)();

var soundBuffer = null;

function loadSound(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = function () {
        aContext.decodeAudioDataa(request.response, function (buffer) {
            soundBuffer = buffer;
        }, onError);
    }
    request.send();
}

var request = new XMLHttpRequest();
request.open("GET", url, true);
request.responseType = "arraybuffer";

request.onload = function () {
    aContext.decodeAudioData(request.response, function (buffer) {
        object.buffer = buffer;
    })
}

function playSound(buffer) {
    var source = aContext.createBufferSource();
    source.buffer = buffer;
    source.connect(aContext.destination);
    source.start(0);
}
