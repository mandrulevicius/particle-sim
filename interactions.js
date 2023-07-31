'use strict';

function calcInteractions(entity1, entity2) {
  const distance = calcDistance(entity1.pos, entity2.pos);
  const gravity = calcGravity(entity1.mass, entity2.mass, distance);
  return gravity;
}

function calcDistance(pos1, pos2) {
  const sqDistX = Math.pow(pos2.x - pos1.x);
  const sqDistY = Math.pow(pos2.y - pos1.y);
  const sqDistZ = Math.pow(pos2.z - pos1.z);
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

export default { calcInteractions };
