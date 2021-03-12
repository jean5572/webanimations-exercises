"use strict";
const ball = document.querySelector("#ball");
const buttom = "42vw";

// const bounce_kf_other = {
//   offset: [0, 0.35, 0.51, 0.65, 0.75, 0.86, 0.92, 1],
//   transform: []
//   easing: ["ease-in",]
// };

//prettier-ignore
const bounce_kf = [
    {
        offset: 0,
        transform: `translate(0,3.5vw)`,
        easing: 'ease-in'
    },
    {
        offset: 0.35,
        transform: `translate(0,${buttom})`,
        easing: 'ease-out'
    },
    {
        offset: 0.51,
        transform: `translate(0,13vw)`,
        easing: 'ease-in'
    },
    {
        offset: 0.65,
        transform: `translate(0,${buttom})`,
        easing: 'ease-out'
    },
    {
        offset: 0.75,
        transform: `translate(0,20vw)`,
        easing: 'ease-in'
    },
    {
        offset: 0.86,
        transform: `translate(0,${buttom})`,
        easing: 'ease-out'
    },
    {
        offset: 0.92,
        transform: `translate(0,26vw)`,
        easing: 'ease-in'
    },
    {
        offset: 1,
        transform: `translate(0,${buttom})`,
        easing: 'ease-out'
    },
    
];
//prettier-ignore
const moveRight_kf = [
  {
    offset: 0,
    transform: `translate(0vw,0)`,
  },
  {
    offset: 0.35,
    transform: `translate(14vw,0)`,
  },
  {
    offset: 0.51,
    transform: `translate(22vw,0)`,
  },
  {
    offset: 0.65,
    transform: `translate(29vw,0)`,
  },
  {
    offset: 0.75,
    transform: `translate(34vw,0)`,
  },
  {
    offset: 0.86,
    transform: `translate(39vw,0)`,
  },
  {
    offset: 0.92,
    transform: `translate(43vw,0)`,
  },
  {
    offset: 1,
    transform: `translate(46vw,0)`,
  },
];
const bounce_properties = {
  duration: 2580,
  iterations: Infinity,
  composite: "add",
};

const moveRight_properties = {
  duration: 2580,
  easing: "linear",
  iterations: Infinity,
};

ball.animate(moveRight_kf, moveRight_properties);
ball.animate(bounce_kf, bounce_properties);
