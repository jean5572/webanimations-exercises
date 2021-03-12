"use strict";
const ball = document.querySelector("#ball");
const stageSize = document.querySelector("#stage").getBoundingClientRect();
const ballSize = document.querySelector("#ball").getBoundingClientRect();
//prettier-ignore
const keyframes = [
    { transform: `translate(${stageSize.width/2 - ballSize.width/2}px,0)` }, 
    { transform: `translate(${stageSize.width - ballSize.width}px,${stageSize.height/2 - ballSize.height/2}px)`,
    offset:0.5 }, 
    { transform: `translate(${stageSize.width/2 - ballSize.width/2}px,${stageSize.height - ballSize.height}px)` }, 
    { transform: `translate(0px,${stageSize.height/2 - ballSize.height/2}px)` }, 


    // { transform: "translate(85vw,20vw)" }, 
    // { transform: "translate(42vw,41vw)" }, 
    // { transform: "translate(0vw,20vw)" },
    // { transform: "translate(42vw,0vw)" }, 
];

keyframes.push(keyframes[0]);
const properties = {
  duration: 4000,
  iterations: Infinity,
};

const animation = ball.animate(keyframes, properties);
