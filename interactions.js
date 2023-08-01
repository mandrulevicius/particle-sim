'use strict';

function getRelevantParticles(particle, allParticles) {
  // gravity radius based on mass, raycast based on momentum
  const interactionRadius = calcInteractionRadius(particle);
  return allParticles.filter((subjectParticle) =>
    isInRadius(interactionRadius, particle.position, subjectParticle.position));
}

function isInRadius(radius, position1, position2) {
  return radius >= calcDistance(position1, position2);
}

function calcInteractionRadius(particle) {
  // TODO formula
  return particle.mass;
}

function calcInteractions(entity1, entity2) {
  const distance = calcDistance(entity1.position, entity2.position);
  const gravity = calcGravity(entity1.mass, entity2.mass, distance);
  return gravity;
}

function calcDistance(position1, position2) {
  const sqDistX = Math.pow(position2.x - position1.x);
  const sqDistY = Math.pow(position2.y - position1.y);
  const sqDistZ = Math.pow(position2.z - position1.z);
  return Math.sqrt(sqDistX + sqDistY + sqDistZ);
}

const GRAVITATIONAL_CONSTANT = 6.673 * Math.pow(10, -11);
function calcGravity(mass1, mass2, distance) {
  // gravity should propagate at speed of light, but its fine for now
  return (GRAVITATIONAL_CONSTANT * mass1 * mass2) / Math.pow(distance, 2);
}

// const interactions = {
//   gravity: (mass1, mass2) => {},
//   electromagnetic: (charge1, charge2) => {},
//   weak: (), // ??
//   strong: ()// simple down to nuclear force
// };

export default { getRelevantParticles, calcInteractions };
