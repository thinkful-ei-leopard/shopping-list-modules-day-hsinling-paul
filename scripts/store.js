import item from './item.js';

const items = [];
const hideCheckedItems = false;


function findById(id) {
  return items.find(item => item.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch(error){
    console.log('addItem not working');
    console.log(error);
  }
}

function findAndToggleChecked(id) {
  let item = findById(id);
  if (item.checked === false) {
    item.checked = true;
  } else {
    item.checked = false;
  }
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    let item = findById(id);
    item.name = newName;
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  let item = this.items.filter(item => item.id === id);
  this.items.splice(item, 1);
}

function toggleCheckedFilter(){
  if(this.hideCheckedItems=== false){
    this.hideCheckedItems = true;
  }else{
    this.hideCheckedItems = false;
  }
  
}

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};


