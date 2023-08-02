'use strict';

import particleTemplates from './particleTemplates.js';
import interactions from './interactions.js';

let interval = 0; // sim speed
let tickLength = 1; // calculation precision??
let loop;

const allParticles = [];
const activeParticles = [];

function init() {
  addParticles(particleTemplates.PROTON, 2);
  console.log(allParticles)
  loop = setInterval(() => updatePhysics(), interval * 1000);
  // should not loop by setInterval
}

function start(speed) {
  setSpeed(speed);
}

function setSpeed(speed) {
  interval = 1 / speed;
  clearInterval(loop);
  loop = setInterval(() => updatePhysics(), interval * 1000);
}

function addParticles(template, amount) {
  for (let i = 0; i < amount; i++)
    allParticles.push(createParticle(template, { x: i, y: 0, z: 0 }));
}

function createParticle(template, position) {
  return {
    ...template,
    //energy: 0, // derivative from velocity and mass???
    position: position || { x: 0, y: 0, z: 0 },
    velocity: { x: 0, y: 0, z: 0 }
  };
}

function updatePhysics() {
  if (interval === 0) return;
  // if interval < 0 reverse
  allParticles.forEach((particle) => {
    const relevantParticles = interactions.getRelevantParticles(particle, allParticles);
    relevantParticles.forEach((relevantParticle) => {
      relevantParticle.velocity = interactions.calcInteractions(particle, relevantParticle);
    });
  });
  allParticles.forEach((particle) => {
    particle.position.x += particle.velocity.x * tickLength;
    particle.position.y += particle.velocity.y * tickLength;
    particle.position.z += particle.velocity.z * tickLength;
    console.log(particle);
  });
}

export default { init, start, setSpeed };