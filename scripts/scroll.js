let video;
let speed = 20;
let handpose;
let prog_status = false;
let predictions = [];

// webcam and model loading.....
function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();

    const options = {
        flipHorizontal: true,
        maxContinuousChecks: 100,
        detectionConfidence: 0.8,
        scoreThreshold: 0.75,
        iouThreshold: 0.3,
    }


    handpose = ml5.handpose(video, options, modelReady);

    handpose.on("predict", results => {
        predictions = results;
    });

}

// callback for the model
function modelReady() {
    document.getElementById("wrapper").remove();
    console.log("Model ready!");
}

// flips the webcam
function flipVideo(video, width, height) {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0, width, height);
    pop();
}

// controls the scroll bar
function scrollBar(dir) {
    document.documentElement.scrollTop += dir * speed;
}

// start
function keyPressed() {
    if (key === 's') {
        return true;
    }
    return false;
}

// stop
function keyTyped() {
    if (key === 'x') {
        return false;
    }
    return true;
}

// draws all landmarks
function drawKeypoints() {
    for (let i = 0; i < predictions.length; i += 1) {
        const prediction = predictions[i];
        for (let j = 0; j < prediction.landmarks.length; j += 1) {
            const keypoint = prediction.landmarks[j];
            fill(0, 255, 0);
            noStroke();
            ellipse(keypoint[0], keypoint[1], 5, 5);
        }
    }
}

// main scrolling function
function gestureControl() {
    for (let i = 0; i < predictions.length; i += 1) {
        const prediction = predictions[i];
        const thumb_tip = prediction.landmarks[4];
        const thumb_bottom = prediction.landmarks[1];

        // down
        if (thumb_tip[1] - thumb_bottom[1] > 0 && thumb_tip[0] - thumb_bottom[0] <= 10) {
            console.log("Terminate Down!!!!!!!");
            return 1;
        }

        // up
        if (thumb_tip[1] - thumb_bottom[1] < 0 && thumb_bottom[0] - thumb_tip[0] <= 10) {
            console.log("Terminate Up!!!!!!!");
            return -1;
        }

    }
    return 0;
}

function draw() {
    flipVideo(video, width, height);

    // keyboard based
    if (keyPressed() && keyTyped()) {
        var rtype = gestureControl();
        if (rtype != 0) {
            scrollBar(rtype);
        }
    }

    // drawKeypoints();

}


// add a function that changes speed acc to num of finger showed