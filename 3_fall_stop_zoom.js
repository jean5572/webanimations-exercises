"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom
const fallingProperties = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};

const fallingKeyframes = [{ transform: "translateY(-20vw)" }, { transform: "translateY(65vw)" }];

const zoomProperties = {
  duration: 500,
  iterations: 1,
  direction: "alternate",
  easing: "ease-in-out",
  fill: "forwards",
  //
  composite: "add",
};

const zoomKeyframes = [{ transform: "scale(1)" }, { transform: "scale(0)" }];
// register click
ball.addEventListener("mousedown", ballClicked);

// start falling animation
const animation = ball.animate(fallingKeyframes, fallingProperties);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  animation.pause();
  // start zoom-animation
  const zoomAnimation = ball.animate(zoomKeyframes, zoomProperties);

  zoomAnimation.onfinish = function () {
    zoomAnimation.cancel();
    animation.currentTime = 0;
    animation.play();
  };
}
