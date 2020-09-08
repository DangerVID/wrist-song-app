HerobrinesLife = "";
Raiders = "";

LeftWristX = "";
LeftWristY = "";

RightWristX = "";
RightWristY = "";

function preload() {

HerobrinesLife = loadSound("Herobrine.mp3");
Raiders = loadSound("Raiders.mp3");

}

function setup() {

    canvas = createCanvas(500, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {

    console.log("model loaded!");
    
    }

function draw() {

image(video, 0, 0, 500, 500);

}

function gotPoses(results) {

    console.log(results);
    
    if(results.length > 0) {
    
    RightWristX = results[0].pose.rightWrist.x;
    RightWristY = results[0].pose.rightWrist.y;
    console.log("right wrist x = " + RightWristX + "right wrist y = " + RightWristY);
    
    LeftWristX = results[0].pose.leftWrist.x;
    LeftWristY = results[0].pose.leftWrist.y;
    console.log("left wrist x = " + LeftWristX + "left wrist y = " + LeftWristY);
    
    }
    
    }