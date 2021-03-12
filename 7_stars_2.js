"use strict";

const screen = document.querySelector("body").getBoundingClientRect();

// create (at least) 200 stars as div.star and append each one to the #stars.
for (let star = 0; star < 200; star++) {
  const starDiv = document.createElement("div");
  starDiv.classList.add("star");
  //   console.log(`start: ${[star]}`);
  document.body.appendChild(starDiv);
}

// add a randomized animation to each star
document.querySelectorAll(".star").forEach((star) => {
  const endX = (Math.random() - 0.5) * screen.width * 2;
  const endY = (Math.random() - 0.5) * screen.height * 2;
  let randomDuration = Math.floor(Math.random() * (5000 - 3000) + 3000);
  let randomOpacity = Math.floor(Math.random() * (2 - 0) + 0);
  let randomScale = Math.floor(Math.random() * (1.5 - 0.1) + 0.1);
  //   console.log(randomDuration);
  // create keyframes to animate (translate) each star to a random end X and Y
  const starProperties = {
    duration: randomDuration,
    iterations: 1,
    // composite: "add",
  };

  const starKeyframes = [
    {
      transform: `translate(${endX}px,${endY}px) scale(${randomScale})`,
      opacity: randomOpacity,
    },
  ];

  star.animate(starKeyframes, starProperties);
  star.onfinish = function () {
    star.cancel();
    console.log("finished");
    star.currentTime = 0;
    star.play();
    console.log("restarted");
  };
  // Also make the duration random - and why not also animate opacity and scale (to and from random values)
});
// when the animation is finished, add a new randomized animation to that star