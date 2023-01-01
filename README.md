<!-- About Project,How to use,Demo,Resources used,Thanks -->

# Hand Pose Detection using TensorFlow.js and ML5.js
This project uses TensorFlow.js/ML5.js to detect the pose of a human hand in real-time. The model is trained to recognize a variety of hand poses, including open, closed, and partially open.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Before you can run this project, you will need to have the following software installed:
> Node.js
> p5.js
> ml5.js

All the dependencies can be found in the scripts folder.

## Running the Model
Open `index.html` file and wait for the model to load.
After the model is loaded,you can press **S** key on the keyboard to start the model.This will start the model and begin detecting hand poses in real-time.
And press the **X** key on the keyboard to stop the model.


## Scrolling the Page
You can use gestures to control the page,

### To go UP:
> Turn your hand to right and hold for few seconds.
### To go DOWN:
> Turn your hand to left,until your thumb points in the downward direction and hold for few seconds.

You should see the page scroll up/down according tou your hand gestures.
To stop the model press the **X** key on the keyboard.

## Demo

This is a simplified version of the above model built on the Web Browser(p5.js).

[HandPose_Web]('https://editor.p5js.org/Aniketh/full/pBZ5K1viY')


## Built With
[TensorFlow.js]('https://www.tensorflow.org/js'):A JavaScript library for training and deploying machine learning models in the browser.

[p5.js]('https://p5js.org/'):A JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners

[ml5.js]('https://ml5js.org/'):A Javascript library for easy accesiblity of machine learning models build on top of Tensorflow.js.

## Authors
[A_V_Aniketh]('https://github.com/AVAniketh0905')- GitHub Account

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
[TensorFlow.js_Handpose_Example]('https://blog.tensorflow.org/2021/11/3D-handpose.html')- This project was inspired by the TensorFlow.js Handpose Example.

