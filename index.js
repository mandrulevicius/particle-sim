'use strict';

const ATOM_PARTICLES = {
  iron: ['Fe', 0.0003, 0.45]
};
const MOLECULE_PARTICLES = ['H2O'];
const CELL_PARTICLES = [];
const ORGAN_PARTICLES = [];
const ORGANISM_PARTICLES = [];
// maybe AI can do part of this?

const activeParticles = [];
const continuousInteractions = [];
const passiveParticles = [];

const lumpOfIron = {
  template: ATOM_PARTICLES.iron,
  numberOfParticles: 10000,
  currentEnergyPerParticle: 0.0027,
  position: { x: 30, y: -45, z: 0.4 }
};

const bucketOfWater = {
  mass: 5,
  shc: 4.2,  // constant
  currentEnergy: 17
};

// maybe should not only define position, but also relation to other objects. push or pull or merge.

// add air(pocketOfParticles), add earth(lumpOfIron), add water (bucketOfWater), add sun

const ZERO_ENERGY = 0;
let time = 0;

activeParticles.push(lumpOfIron, bucketOfWater);
// add to active when new interactions.
// if interaction constant and repeating, can remove from active interactions into continuous

setInterval(() => {
  time += 1;
  console.log('time', time);
  // for each active particle, check nearby energy, transfer.
  activeParticles.forEach(particle => {
    // TODO get close objects, transfer energy
    // take a radius based on mass of the object
    // or just touching, and everything else going to air?
    // sun and other hot objects have different mechanism? or same really?
    const energyEmission = (particle.mass / particle.shc) * (particle.currentEnergy - ZERO_ENERGY);
    particle.currentEnergy -= energyEmission / 60;
    // per second rather than minute, depends on interval
    console.log('particle.currentEnergy', particle.currentEnergy);
    console.log('energyEmission', energyEmission);
  });
}, 1000);



// after personal release, integrate with gta and make a demo of making a sword
//  fully automated asset creation, with 3d models and textures included.

// could throw the weapon (swing or thrust), a quickwheel action, checks how much the mouse was pulled,
//  determines power of throw. speed determined by mass and power. air has push effect.

// thrust weapon into wall, jump on the handle, jump up on wall picking up weapon and melee thrusting into wall higher up, then using that as a handle to climb.