'use strict';
// this project might change and evolve a lot, so should focus on modularity
//  ability to switch out parts

// work incrementally - while considering big picture is important, not all pieces have to be in place at the start

// photons? basic particles? too deep?
const ATOMS = {
  iron: ['Fe', 0.0003, 0.45]
};
const MOLECULES = ['H2O'];
const CELLS = {};
const ORGANS = {};
const ORGANISMS = {};
// MACRO_ORGANISMS = {'earth'};
// maybe AI can do part of this?

const activeParticles = [];
const continuousInteractions = [];
const passiveParticles = [];
const partOfBiggerOrganismParticles = [];

const lumpOfIron = {
  template: ATOMS.iron,
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
// fire (pocketofHighEnergyParticles? nah thats just heat). fire is a chemical reaction?
// all just particles in different states.

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
    // energy with mass or energy without mass, still energy, just behaving slightly differently
    // have to divide over all interacting objects. or just emit total and its up to whoever picks the signal up
    // problem is have to emit directionally - take total emissions, spread around
    // another problem is that clumps of materials have shape which could influence emissions

    // start with point emission, 3d stuff can be done later when having time to think about it, consult people
    
    const energyEmission = (particle.mass / particle.shc) * (particle.currentEnergy - ZERO_ENERGY);
    // this energy emission only considers base energy level
    // should it contain target energy, or should that be calculated at the receiving end?
    
    // TODO move below line to 
    particle.currentEnergy -= energyEmission / 60; // maybe should save delta along with current value
    // per second rather than minute, depends on interval
    console.log('particle.currentEnergy', particle.currentEnergy);
    console.log('energyEmission', energyEmission);
    emitEnergy(energyEmission);
    receiveEnergyEmitters()
  });
}, 1000);
// add pause, speedup, slowdown, (reverse)

function emitEnergy(totalEnergyEmission) {
  // just send it off into 3d space
  // create a bunch of particles and blast them all around at varying strengths, dependant on temperature and pressure
}

function receiveEnergyEmitters() {
  // check 3d space around for incoming particles, add them to local active particles structure
  // or just trigger on-hit? photon particles hit first. there will be a lot of particles flying around.
  // have to make this part performant.
}

// after personal release, integrate with gta and make a demo of making a sword
//  fully automated asset creation, with 3d models and textures included.

// could throw the weapon (swing or thrust), a quickwheel action, checks how much the mouse was pulled,
//  determines power of throw. speed determined by mass and power. air has push effect.

// thrust weapon into wall, jump on the handle, jump up on wall picking up weapon and melee thrusting into wall higher up, then using that as a handle to climb.

// a punch to the wall might result in bone cracking. just need to calculate energyEmission + kineticEnergy?