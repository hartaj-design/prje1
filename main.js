function allow(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    web=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BSL7yP85J/model.json",load)
}
function load(){
    web.classify(remote);
}
function remote(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    red=Math.floor(Math.random()*255)+1;
    green=Math.floor(Math.random()*255)+1;
    blue=Math.floor(Math.random()*255)+1;
    document.getElementById("object1").innerHTML='i can hear: '+results[0].label;
    document.getElementById("accuracy1").innerHTML='Accuracy: '+(results[0].confidence*100).toFixed(2)+'%';
    document.getElementById("object1").style.color='rgb('+red+','+green+','+blue+')';
    document.getElementById("accuracy1").style.color='rgb('+red+','+green+','+blue+')';
    //rgb(250,250,250)
    img1=document.getElementById("alien1");
    img2=document.getElementById("alien2");
    img3=document.getElementById("alien3");
    img4=document.getElementById("alien4");
    if(results[0].label=='Clap'){
        img1.src="aliens-01.gif";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
    }
    else if(results[0].label=='ringtone'){
    img1.src="aliens-01.png";
        img2.src="aliens-02.gif";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
    }
    else if(results[0].label=='bell'){
        img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else {
            img1.src="aliens-01.png";
                img2.src="aliens-02.png";
                img3.src="aliens-03.png";
                img4.src="aliens-04.gif";
            }

}
}