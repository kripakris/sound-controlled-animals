function start()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("detected").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("voice").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'bark.png';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'meow.jpg';
      cat = cat+1;
    } else{
      img.src = 'listen.png';
    }
  }
}
