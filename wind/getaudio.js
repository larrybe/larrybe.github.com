var micPermission = new Object;
micPermission.div = document.getElementById("permission");
micPermission.btn = document.getElementsByTagName("button")[0];
micPermission.asked = false;

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
    if (!micPermission.asked){
        enableMicPermBtn();
    }
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

navigator.getUserMedia({ audio: true }, getStream, itFailed);

function itFailed() {   
    micPermission.btn.style.backgroundColor = "#ff0000";
    micPermission.btn.style.color = "#fff";
    micPermission.btn.textContent = "Error - Access Denied.";
}

function enableMicPermBtn() {
    micPermission.btn.removeAttribute("disabled");
    micPermission.btn.style.backgroundColor = "#00c777";
    micPermission.btn.style.border = "2px outset #00c777";
    micPermission.btn.style.color = "#fff";
    micPermission.btn.textContent = "Continue";
    micPermission.btn.addEventListener("click", removePermissionDiv, false);
    micPermission.asked = true;
    removePermissionDiv()
}

function removePermissionDiv() {
    micPermission.div.remove();
}

