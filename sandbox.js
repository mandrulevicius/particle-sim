'use strict';

import particleTemplates from './particleTemplates.js';
import interactions from './interactions.js';

let interval = 0;

const allParticles = [];
const activeParticles = [];

// should not loop by setInterval
const loop = setInterval(() => {
  if (interval === 0) return;
  // if interval < 0 reverse
  allParticles.forEach((particle) => {
    const relevantParticles = interactions.getRelevantParticles(particle, allParticles);
    relevantParticles.forEach((relevantParticle) => {
      const force = interactions.calcInteractions(particle, relevantParticle);
      // apply force - add appropriate velocity
      
    });
  });
  // apply motion
}, interval);

function init() {
  addParticles(particleTemplates.PROTON, 1);
}

function start(speed) {
  setSpeed(speed);
}

function setSpeed(speed) {
  interval = 1000 / speed;
}

function addParticles(template, amount) {
  for (let i = 0; i < amount; i++) allParticles.push(createParticle(template));
}

function createParticle(template) {
  return {
    ...template,
    //energy: 0, // derivative from velocity and mass???
    position: { x: 0, y: 0, z: 0 },
    velocity: { x: 0, y: 0, z: 0 }
  };
}

export default { init, start, setSpeed };