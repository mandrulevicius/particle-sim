'use strict';

const activeParticles = [];

const lumpOfIron = {
  mass: 3,
  shc: 0.45,  // constant
  currentEnergy: 27
};

const bucketOfWater = {
  mass: 5,
  shc: 4.2,  // constant
  currentEnergy: 17
};

// add air, add sun

const ZERO_ENERGY = 0;
let time = 0;

activeParticles.push(lumpOfIron, bucketOfWater);

setInterval(() => {
  time += 1;
  console.log('time', time);
  // for each active particle, check nearby energy, transfer.
  activeParticles.forEach(particle => {
    // TODO get close objects, transfer energy
    const energyEmission = (particle.mass / particle.shc) * (particle.currentEnergy - ZERO_ENERGY);
    particle.currentEnergy -= energyEmission / 60;
    // per second rather than minute, depends on interval
    console.log('particle.currentEnergy', particle.currentEnergy);
    console.log('energyEmission', energyEmission);
  });
}, 1000);