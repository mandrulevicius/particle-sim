'use strict';

function getRelevantParticles(particle, allParticles) {
  // gravity radius based on mass, raycast based on momentum
  const interactionRadius = calcInteractionRadius(particle);
  // gravity does affect the object itself
  return allParticles.filter((subjectParticle) =>
    isInRadius(interactionRadius, particle.position, subjectParticle.position));
}

function isInRadius(radius, centerPosition, subjectPosition) {
  return radius >= calcDistance(centerPosition, subjectPosition);
}

function calcInteractionRadius(particle) {
  // TODO formula
  return particle.mass;
}

function calcInteractions(entity, subjectEntity) {
  const distance = calcDistance(entity.position, subjectEntity.position);
  const vector = calcNormalVector(subjectEntity.position, entity.position);
  const gravity = calcGravity(entity.mass, subjectEntity.mass, distance);
  const force = calcForce(gravity, vector);
  // calc other forces, add up vectors
  const velocity = combineVectors(subjectEntity.velocity, force);
  return velocity;
}

function calcDistance(position1, position2) {
  const sqDistX = Math.pow(position2.x - position1.x, 2);
  const sqDistY = Math.pow(position2.y - position1.y, 2);
  const sqDistZ = Math.pow(position2.z - position1.z, 2);
  return Math.sqrt(sqDistX + sqDistY + sqDistZ);
}

function calcNormalVector(position1, position2) {
  return normalizeVector(calcVector(position1, position2));
}

function calcVector(position1, position2) {
  return {
    x: position2.x - position1.x,
    y: position2.y - position1.y,
    z: position2.z - position1.z
  };
}

function normalizeVector(vector) {
  const sqX = vector.x * vector.x;
  const sqY = vector.y * vector.y;
  const sqZ = vector.z * vector.z;
  const magnitude = Math.sqrt(sqX + sqY + sqZ);
  if (magnitude === 0) return { x: vector.x, y: vector.y, z: vector.z };
  return {
    x: vector.x / magnitude,
    y: vector.y / magnitude,
    z: vector.z / magnitude
  }
}

const GRAVITATIONAL_CONSTANT = 6.673 * Math.pow(10, -11);
function calcGravity(mass1, mass2, distance) {
  if (distance === 0) return 0; // should affect itself (especially if bigger entity)
  return (GRAVITATIONAL_CONSTANT * mass1 * mass2) / Math.pow(distance, 2);
  // gravity should propagate at speed of light, but its fine for now
}

function calcForce(magnitude, vector) {
  return {
    x: vector.x * magnitude,
    y: vector.y * magnitude,
    z: vector.z * magnitude
  };
}

function combineVectors(vector1, vector2) {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y,
    z: vector1.z + vector2.z
  }
}

// const interactions = {
//   gravity: (mass1, mass2) => {},
//   electromagnetic: (charge1, charge2) => {},
//   weak: (), // ??
//   strong: ()// simple down to nuclear force
// };

export default { getRelevantParticles, calcInteractions };
