function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    sounds = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4UHlUq1_9/model.json",modelready);
}

function modelready()
{
    sounds.classify(gotresult);
}
