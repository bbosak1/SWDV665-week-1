class Grocery {
  constructor(
    public name: string,
    public quantity: number
  ) {
  }
}

function createGroceries(groceryList) {
  let returnStatement = 'My grocery list: ';
  for (let element of groceryList) {
    returnStatement = returnStatement + element.name + ". Quantity: " + element.quantity + " ";
  }
  return returnStatement;
}

const groceryList = [];
let banana = new Grocery("banana",3);
let orange = new Grocery("orange",5);
let grape = new Grocery("grape",30);
let kiwi = new Grocery("kiwi",4);
let canteloupe = new Grocery("canteloupe",1);
let watermelon = new Grocery("watermelon",1);
let strawberry = new Grocery("strawberry",7);
groceryList.push(banana);
groceryList.push(orange);
groceryList.push(grape);
groceryList.push(kiwi);
groceryList.push(canteloupe);
groceryList.push(watermelon);
groceryList.push(strawberry);

document.body.textContent = createGroceries(groceryList);
