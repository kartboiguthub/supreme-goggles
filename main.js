function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/P3VXXfj9B/'
    ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}