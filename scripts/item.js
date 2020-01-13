
function validateName(name) {
  if (!name) {
    throw new TypeError('Name must not be blank');
  }
} 

function create (name) {
  const item = {
    id: cuid(),
    name: name,
    checked: false
  }; 
  return item;
}


export default {
  validateName,
  create
};

import item from './item.js';

