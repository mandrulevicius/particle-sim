'use strict';
// photons? basic particles? too deep?
// if want to build atoms, need to go protons-neutrons-electrons
// if want push-pull, need to go protons-neutrons-electrons
// then single atom mass becomes a derived variable.
// how to derive shc?

// insert coupling constant?
// definitely fine-structure constant

// is transforming matter into energy emergent? weak force?

//E2 = p2c2 + m2c4 - energy equation

const ATOMS = {
  iron: ['Fe', 0.0003, 0.45]
};
const MOLECULES = ['H2O'];
const CELLS = {};
const ORGANS = {};
const ORGANISMS = {};
// MACRO_ORGANISMS = {'earth'};
// maybe AI can do part of this?
// maybe doesnt have to if this is emergent

// in air, boundaries between different compositions and temperatures are quite ephemeral
// maybe can once again approximate?

const activeParticles = [];
const continuousInteractions = [];
const passiveParticles = [];
const partOfBiggerOrganismParticles = [];

const lumpOfIron = {
  template: ATOMS.iron,
  numberOfParticles: 10000,
  currentEnergyPerParticle: 0.0027,
  position: { x: 30, y: -45, z: 0.4 },
  velocity: { x: 0, y: 0, z: 0 }
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
    // particle does not know what it is interacting with until it does interact with it
    // so probably the receiving end

    // particles interact not only through hits, but also by gravity???
    // basically push or pull

    // interaction does not have to be resolved precisely at the point of interaction?
    // can just be approximated, and only precise measurement of the other particle would resolve the other
    // but do I really need quantum entanglement right now? No I do not.

    // max particle and field propagation speed - "speed of light"
    // while particle is traveling at relativistic speed, any calculations about its internal state slow down appropriately.
    // why though? performance considerations?

    
    emitParticles(particle);
    emitEnergy(energyEmission);

    // TODO move below lines to 
    particle.currentEnergy -= energyEmission / 60; // maybe should save delta along with current value
    // per second rather than minute, depends on interval
    particle.numberOfParticles -= particleEmission;
    console.log('particle.currentEnergy', particle.currentEnergy);
    console.log('energyEmission', energyEmission);
    emitEnergy(energyEmission);
    receiveEnergyEmitters()
  });
}, 1000);

function emitParticles(parent) {
  const childParticles = {
    template: parent.template,
    numberOfParticles: 10,
    currentEnergyPerParticle: 0.0027,
    position: { x: 30, y: -45, z: 0.4 },
    velocity: { x: 0, y: 0, z: 0 }
  };
  return childParticles;
}


function emitEnergy(totalEnergyEmission) {
  // divide total emission, create particles, set velocity, push to active particles
  // just send it off into 3d space
  // create a bunch of particles and blast them all around at varying strengths, dependant on temperature and pressure
}

function receiveEnergyEmitters() {
  // check 3d space around for incoming particles, add them to local active particles structure
  // or just trigger on-hit? photon particles hit first. there will be a lot of particles flying around.
  // have to make this part performant.
}