var audioData = new Object();
audioData.sum = null;
audioData.now = null;
audioData.total = null;

var contextClass = (window.AudioContext ||
window.webkitAudioContext ||
window.mozAudioContext ||
window.oAudioContext ||
window.msAudioContext);
if (contextClass) {
    var audioContext = new contextClass();
} else {
    console.log("Audio API not supported");
}

navigator.getUserMedia = (navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);

function getStream(stream) {
    //source = audioContext.createMediaStreamSource(stream);
    window.source = audioContext.createMediaStreamSource(stream);
    processor = audioContext.createScriptProcessor(2048);
    source.connect(processor);
    processor.onaudioprocess = processInput;
    processor.connect(audioContext.destination);
}

function processInput(e) {
    var dataArray = e.inputBuffer.getChannelData(0)
    for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i] < 0) {
            dataArray[i] *= -1
        }
        audioData.sum += parseFloat(dataArray[i], 10);
    }
    audioData.now = audioData.sum;
    audioData.sum = null;
}

function itFailed() {
}

navigator.getUserMedia({ audio: true }, getStream, itFailed);