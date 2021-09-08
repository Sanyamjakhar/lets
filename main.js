var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()


}
recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML = content;


    if (content == "take the selfie") {
        console.log("blah blah blah")

        speaka();


    }

}

function speaka() {
    synth = window.speechSynthesis;
    input = "taking your selfie in 5 seconds";
    speech = new SpeechSynthesisUtterance(input);
    synth.speak(speech)
    Webcam.attach(cam)
    setTimeout(function(){
        take_selfie()
        save()
    },5000
    )
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
})
cam = document.getElementById("camera")


function take_selfie(){
Webcam.snap(function(data){
document.getElementById("result").innerHTML="<img id='capture' src="+data+">"



})



}
function save(){
 link=document.getElementById("link")
image=document.getElementById("capture").src
link.href=image;
link.click()
}